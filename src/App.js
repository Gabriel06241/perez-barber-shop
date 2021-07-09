import './App.css';
import { NavBar } from './components/navBar/navBar'
import { ItemListContainer } from './pages/itemListContainer/itemListContainer'
import { ItemDetailContainer } from './pages/itemDetailContainer/itemDetailContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <main>
        <NavBar />
        <Switch>
          <Route path="/">
            <ItemListContainer />
          </Route>
          <Route path="/category/:id">
            <ItemListContainer greeting="Hola 👋🏽 , ¡Bienvenido a tu Barber Shop!"  />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}