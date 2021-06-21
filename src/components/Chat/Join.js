import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChatContext } from "../../ChatContext";

import "./Join.css";

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const { chatLogin, error, loading } = React.useContext(ChatContext);

  async function handleSubmit(event) {
    event.preventDefault();
    chatLogin(name.value, room.value);
  }

  return (
    <div className={`joinOuterContainer`}>
      <div className="joinInnerContainer">
        <h1 className="heading">Consulta</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              placeholder="Nome"
              className="joinInput"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Sala"
              className="joinInput mt-20"
              type="text"
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/dashboard/consultas/chat?name=${name}&room=${room}`}
          >
            <button className={"button mt-20"} type="submit" style={{cursor: "pointer"}}>
              Entrar no chat
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
