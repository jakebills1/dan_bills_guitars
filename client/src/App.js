import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Show from './components/Show';
import FetchUser from './components/FetchUser';
import AdminPortal from './components/admin/AdminPortal';
import NoMatch from './components/NoMatch';
import ProtectedRoute from './components/ProtectedRoute';
import Edit from './components/admin/Edit';
import Background from './assets/ian-tormo-321516-unsplash.jpg';
import { Switch, Route, } from 'react-router-dom';
import {  Container, } from 'semantic-ui-react';

function App() {
  return (
    <>
    <Navbar />
    <Container>
      <FetchUser>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin" exact component={AdminPortal} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/guitars/:id" exact component={Show} />
          <ProtectedRoute path="/dashboard" exact component={Dashboard} />
          <ProtectedRoute path="/guitars/edit/:id" exact component={Edit} />
          <Route component={NoMatch} />
        </Switch>
      </FetchUser>
    </Container>
    </>
  );
}

export default App;
