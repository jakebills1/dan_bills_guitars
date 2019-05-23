import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Show from './components/Show';
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
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/guitars/:id" exact component={Show} />

        </Switch>
      </Container>
    </>
  );
}

export default App;