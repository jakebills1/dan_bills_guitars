import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AdminPortal from './components/admin/AdminPortal';
import { Switch, Route, } from 'react-router-dom';
import {  Container, } from 'semantic-ui-react';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin" exact component={AdminPortal} />

        </Switch>
      </Container>
    </>
  );
}

export default App;
