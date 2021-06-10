import logo from './images/coderhouse.png';
import { FaCut } from 'react-icons/fa';
import './App.css';
import { NavBar } from './components/navBar/navBar'

function App () {
  const name = 'Perez Barber Shop'

  const handleClick = () => alert('✂︎ Welcome to ' + name + ' ✂︎')

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <FaCut onClick={handleClick} /> Welcome to {name} <FaCut onClick={handleClick} />
        </p>
      </body>
    </div>
  );
}

export default App;
