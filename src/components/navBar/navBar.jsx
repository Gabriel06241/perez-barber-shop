import { Link, NavLink } from 'react-router-dom'
import { CartWidget } from '../cartWidget/cartWidget'
import barberlogo from '../../images/barberlogo.png'
import './navBar.css'

export const NavBar = () => {
  const categories = ['Combos', 'Maquinas', 'Navajas', 'Tijeras', 'Accesorios']
  const categoriesIcon = ['💇🏼‍♂️', '🪒', '🖌', '✂️', '💈']

  return (
    <header className="navBar">
      <Link to="/">
        <img src={barberlogo} className="barberLogo" alt="logo" />
      </Link>
      <ul className="categories">
        {categories.map((category, index) =>
          <NavLink to={`/category/${category.toLowerCase()}`} activeStyle={{color: 'red'}} className='navLink'>
            <li className="category">
              {categoriesIcon[index]}
              <p>
                {category}
              </p>
            </li>
          </NavLink>
        )}
      </ul>
      <CartWidget />
    </header>
  )
}
