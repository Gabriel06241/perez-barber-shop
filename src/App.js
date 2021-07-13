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

const Wrapper = styled.div``

export const App = () => {

  // const isLoading, error = null

  const getTotalItems = () => null

  const handleAddToCart = () => {
    console.log('clicked!')
  }

  const handleRemoveFromCart = () => null

  // if (isLoading) return <LinearProgress />

  // if (error) return <div>Something went wrong ...</div>

  return (
    <Router>
      <Wrapper>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Hola 👋🏽 , ¡Bienvenido a tu Barber Shop!" handleAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer greeting="Hola 👋🏽 , ¡Bienvenido a tu Barber Shop!" handleAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer handleAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
}