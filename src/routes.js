import React from 'react';
import { Switch, Route } from "react-router-dom";

import Login from './pages/Login'
import Register from './pages/Register'
import { LostPasswordPage } from './pages/LostPassword'
import { Dashboard } from './pages/Dashboard'
import { ProRegisterPage } from './pages/ProRegister'
import { ConsultasComponent } from './pages/Dashboard/Consultas';
import { ChatPage } from './pages/Dashboard/Chat';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/register" component={Register} />
      <Route path="/lostpassword" component={LostPasswordPage} exact />
      <Route path="/proregister" component={ProRegisterPage} />
      <Route path="/dashboard" component={Dashboard} exact />
      <Route path="/dashboard/consultas" component={ConsultasComponent} exact />
      <Route path="dashboard/consultas/chat" component={ChatPage} />
      <Route component = {() => <div>Pagina não encontrada</div>} />
    </Switch>
  )
}