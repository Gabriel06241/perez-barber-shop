import './navBar.css';
import barberlogo from '../../images/barberlogo.png';
import { CartWidget } from './../cartWidget/cartWidget'

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <img src={barberlogo} className="barber-logo" alt="logo" />
      </ul>
      <ul className='nav-options'>
        <li className='option'><button>SÚPER COMBOS 💇🏼‍♂️</button></li>
        <li className='option'><button>MÁQUINAS 🪒</button></li>
        <li className='option'><button>NAVAJAS 🖌</button></li>
        <li className='option'><button>TIJERAS ✂️</button></li>
        <li className='option'><button>ACCESORIOS 💈</button></li>
      </ul>
      <CartWidget />
    </nav>
  )
}