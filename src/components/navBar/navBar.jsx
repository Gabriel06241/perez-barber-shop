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
        {/* <NavLink to='/category/combos'>
          <li className='category'>
            💇🏼‍♂️ <p>COMBOS</p>
          </li>
        </NavLink>
        <NavLink to='/category/machines'>
          <li className='category'>
            🪒 <p>MAQUINAS</p>
          </li>
        </NavLink>
        <NavLink to='/category/razor'>
          <li className='category'>
            🖌 <p>NAVAJAS</p>
          </li>
        </NavLink>
        <NavLink to='/category/scissors'>
          <li className='category'>
            ✂️ <p>TIJERAS</p>
          </li>
        </NavLink>
        <NavLink to='accesories'>
          <li className='category'>
            💈 <p>ACCESORIOS</p>
          </li>
        </NavLink> */}
      </ul>
      <CartWidget />
    </header>
  )
}
