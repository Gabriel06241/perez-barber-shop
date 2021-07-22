// import './App.css';
import styled from 'styled-components';
import { NavBar } from './components/navBar/navBar'
import { ItemListContainer } from './pages/itemListContainer/itemListContainer'
import { ItemDetailContainer } from './pages/itemDetailContainer/itemDetailContainer'
import { Cart } from "./components/cart/cart";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { CartProvider } from './context/cartContext';

const Wrapper = styled.div``

export const App = () => {
  const greeting = "Hola 👋🏽 , ¡Bienvenido a tu Barber Shop!";

  // const isLoading, error = null

  // if (isLoading) return <LinearProgress />

  // if (error) return <div>Something went wrong ...</div>

  return (
    <CartProvider>
      <Router>
        <Wrapper>
          <NavBar />
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
        </Wrapper>
      </Router>
    </CartProvider>
  );
}