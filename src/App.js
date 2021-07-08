import './App.css';
import { NavBar } from './components/navBar/navBar'
import { ItemListContainer } from './components/itemListContainer/itemListContainer'

const App = () => {
  return (
    <main className="App">
      <NavBar />
      <ItemListContainer greeting="Hola 👋🏽 , ¡Bienvenido a tu Barber Shop!" />
    </main>
  );
}

export default App;
