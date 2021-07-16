import './navBar.css'
import { Link, NavLink } from 'react-router-dom'
import barberlogo from '../../images/barberlogo.png'
import { CartWidget } from '../cartWidget/cartWidget'
import LinearProgress from '@material-ui/core/LinearProgress'

export const NavBar = () => {
  const categories = [ 'Electronics', 'Jewelery', "Men's clothing", "Women's clothing" ]
  const categoriesIcon = ['💻', '💎', '👕', '👗']

  return (
    <header className="navBar">
      <LinearProgress/>
      <Link to="/">
        <img src={barberlogo} className="barberLogo" alt="logo" />
      </Link>
      <div className="categoriesDiv">
        <ul className="categories">
          {categories.map((category, index) =>
            <NavLink
              key={category.toLowerCase()}
              to={`/category/${category.toLowerCase()}`}
              activeStyle={{ color: 'red' }}
              className="navLink"
            >
              <li className="category">
                {categoriesIcon[index]}
                <p>
                  {' '}{category}{' '}
                </p>
              </li>
            </NavLink>
          )}
        </ul>
      </div>
      <CartWidget/>
    </header>
  )
}
