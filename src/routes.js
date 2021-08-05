import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from './pages/home/home'
import { Cart } from "./pages/cart/cart";
import { ItemListContainer } from './pages/itemListContainer/itemListContainer'
import { ItemDetailContainer } from './pages/itemDetailContainer/itemDetailContainer'

export const Routes = () => {
  const greeting = "Hola 👋🏽 , ¡Bienvenido a tu Barber Shop!";
  return (
    <Router>
      <Home />
      <Switch>
        <Route exact path="/">
          <ItemListContainer greeting={greeting} />
        </Route>
        <Route exact path="/category/:id">
          <ItemListContainer greeting={greeting} />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer greeting={greeting} />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}