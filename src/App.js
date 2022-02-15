import React from 'react';
import Login from './components/Login';
import {Switch,Route,Redirect} from "react-router-dom"
import Authenticator from './components/Authenticator';
import Chats from './components/Chats';
const App = (props) => {

  return (
    <Authenticator>
      <Switch>
        <Route path="/chats" component={Chats} />
        <Route path="/" component={Login} />
      </Switch>
    </Authenticator>
  );
};

export default App;
