import React from 'react';
import './App.css';
import { Redirect, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Products from './pages/Products';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <Router>
      <AppProvider>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/customer/products" component={ Products } />
        </Switch>
      </AppProvider>
    </Router>
  );
}

export default App;
