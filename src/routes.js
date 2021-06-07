import React from 'react';
import { Switch, Route } from "react-router-dom";

import Login from './pages/Login'
import Register from './pages/Register'
import { LostPasswordPage } from './pages/LostPassword'
import { Dashboard } from './pages/Dashboard'
import { ProRegisterPage } from './pages/ProRegister'

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/lostpassword" component={LostPasswordPage} exact />
      <Route path="/proregister" component={ProRegisterPage} exact />
      <Route path="/dashboard" component={Dashboard} exact />
      <Route component = {() => <div>Pagina não encontrada</div>} />
    </Switch>
  )
}