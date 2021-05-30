import React from 'react';
import { Switch, Route } from "react-router-dom";
import Consultas from './Pages/Consultas';
import Profissionais from './Pages/Profissionais';
import ProRegister from './Pages/ProRegister';
import Pagamentos from './Pages/Pagamentos';
import Ticket from './Pages/Ticket';
import Configs from './Pages/Configs';

export const DashboardRoutes = () => {
  <Switch>
    <Route path="/dashboard/consultas" component={Consultas} />
    <Route path="/dashboard/profissionais" component={Profissionais} />
    <Route path="/dashboard/pro-register" component={ProRegister} />
    <Route path="/dashboard/pagamentos" component={Pagamentos} />
    <Route path="/dashboard/ticket" component={Ticket} />
    <Route path="/dashboard/configs" component={Configs} />
  </Switch>
}