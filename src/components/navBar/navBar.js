import './navBar.css';
import barberlogo from '../../images/barberlogo.png';
export const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <img src={barberlogo} className="Barber-logo" alt="logo" />
        </ul>
        <ul className='nav-options'>
          <li className='option'><button>SÚPER COMBOS 💇🏼‍♂️</button></li>
          <li className='option'><button>MÁQUINAS 🪒</button></li>
          <li className='option'><button>NAVAJAS 🖌</button></li>
          <li className='option'><button>TIJERAS ✂️</button></li>
          <li className='option'><button>ACCESORIOS 💈</button></li>
          <li className='option'><button>HERRAMIENTAS 🧰</button></li>
          <li className='option'><button>PRODUCTOS 💄</button></li>
        </ul>
      </nav>
    </div>
  )
}