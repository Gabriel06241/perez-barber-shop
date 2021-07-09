import './navBar.css'
import barberlogo from '../../images/barberlogo.png'
import { CartWidget } from '../cartWidget/cartWidget'

export const NavBar = () => {
  return (
    <header className="navBar">
      <img src={barberlogo} className="barberLogo" alt="logo" />
      <ul className="categories">
        <li className="category">
          💇🏼‍♂️ <p>SÚPER COMBOS</p>
        </li>
        <li className="category">
          🪒 <p>MÁQUINAS</p>
        </li>
        <li className="category">
          🖌 <p>NAVAJAS</p>
        </li>
        <li className="category">
          ✂️ <p>TIJERAS</p>
        </li>
        <li className="category">
          💈 <p>ACCESORIOS</p>
        </li>
      </ul>
      <CartWidget />
    </header>
  )
}
