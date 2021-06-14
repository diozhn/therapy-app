import React from "react";
import { CHAT_POST, CHAT_GET, USER_GET } from "./api";
import {useHistory} from "react-router-dom";

export const ChatContext = React.createContext();

export const ChatStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  let navigate = useHistory();

  const chatLogout = React.useCallback(
    async function chatLogout() {
      setData(null);
      setError(null);
      setLoading(false);
      setUser(false);
      navigate.push("/consulta");
    },
    [navigate]
  );

  async function getUserId() {
    const { url, options } = USER_GET();
    const response = await fetch(url, options);
    const userId = await response.json();
    setData(userId);
    setUser(true);
    console.log(userId);
  }

  async function chatLogin(userId, roomId) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = CHAT_POST({ userId, roomId });
      const chatRes = await fetch(url, options);
      if (!chatRes.ok)
        throw new Error(`Erro: Id do usuário ou sala inválidos.`);
      await getUserId();
      navigate.push("/chat");
    } catch (err) {
      setError(err.message);
      setUser(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ChatContext.Provider
      value={{
        chatLogin,
        data,
        chatLogout,
        error,
        loading,
        user,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
