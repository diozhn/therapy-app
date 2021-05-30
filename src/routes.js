import React from 'react';
import { Switch, Route } from "react-router-dom";
import Configs from './components/Dashboard/Pages/Configs';
import Consultas from './components/Dashboard/Pages/Consultas';
import Pagamentos from './components/Dashboard/Pages/Pagamentos';
import Profissionais from './components/Dashboard/Pages/Profissionais';
import ProRegister from './components/Dashboard/Pages/ProRegister';
import Ticket from './components/Dashboard/Pages/Ticket';

import Login from './pages/Login'
import Register from './pages/Register'
import { LostPasswordPage } from './pages/LostPassword'
import { Dashboard } from './pages/Dashboard'

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/lostpassword" component={LostPasswordPage} exact />

      <Route path="/dashboard" component={Dashboard} exact />
      <Route path="/dashboard/consultas" component={Consultas} />
      <Route path="/dashboard/profissionais" component={Profissionais} />
      <Route path="/dashboard/pro-register" component={ProRegister} />
      <Route path="/dashboard/pagamentos" component={Pagamentos} />
      <Route path="/dashboard/ticket" component={Ticket} />
      <Route path="/dashboard/configs" component={Configs} />
      <Route component = {() => <div>Pagina não encontrada</div>} />
    </Switch>
  )
}