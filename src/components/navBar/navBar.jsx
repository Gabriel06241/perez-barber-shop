import './navBar.css'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Drawer from '@material-ui/core/Drawer'
// import LinearProgress from '@material-ui/core/LinearProgress'
import Badge from '@material-ui/core/Badge'
import { Link, NavLink } from 'react-router-dom'
import barberlogo from '../../images/barberlogo.png'
import { CartWidget } from '../cartWidget/cartWidget'
import { useState } from 'react'

const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`

export const NavBar = () => {
  const categories = [
    'Electronics',
    'Jewelery',
    "Men's clothing",
    "Women's clothing"
  ]
  const categoriesIcon = ['💻', '💎', '👕', '👗']

  const [cartOpen, setCartOpen] = useState(false)
  // const [ cartItems, setCartItems ] = useState([]);

  return (
    <header className="navBar">
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
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <CartWidget />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={5} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
    </header>
  )
}
