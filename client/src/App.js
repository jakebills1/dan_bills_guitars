import React from 'react';
import Home from './components/Home';
import AdminPortal from './components/admin/AdminPortal';
import { Switch, Route, } from 'react-router-dom';
import {  Container, } from 'semantic-ui-react';

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/admin" exact component={AdminPortal} />

      </Switch>
    </Container>
  );
}

export default App;
