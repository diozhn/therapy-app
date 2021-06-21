/*
import { createContext, useState, useContext } from "react";
import ContentPage from "./components/Dashboard/Pages/ContentPage";
import Consultas from "./components/Dashboard/Pages/Consultas";
import Pagamentos from "./components/Dashboard/Pages/Pagamentos";
import Profissionais from "./components/Dashboard/Pages/Profissionais";
import ProRegister from "./components/Login/ProRegister";
import Ticket from "./components/Dashboard/Pages/Ticket";
import Configs from "./components/Dashboard/Pages/Configs";

export const components = [
  {
    name: "content",
    component: ContentPage,
  },
  {
    name: "consultas",
    component: Consultas,
  },
  {
    name: "pagamentos",
    component: Pagamentos,
  },
  {
    name: "profissionais",
    component: Profissionais,
  },
  {
    name: "proRegister",
    component: ProRegister,
  },
  {
    name: "ticket",
    component: Ticket,
  },
  {
    name: "configs",
    component: Configs,
  },
];

const ContentContext = createContext();

export default function ContentProvider({ children }) {
  const [component, setComponent] = useState(components[0]);

  return (
    <ContentContext.Provider
      value={{
        component,
        setComponent,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useComponent() {
  const context = useContext(ContentContext);
  if (!context)
    throw new Error("useComponent must be used within a ContentProvider");
  const { component, setComponent } = context;
  return { component, setComponent };
}
*/
