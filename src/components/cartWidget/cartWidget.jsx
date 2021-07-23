import './cartWidget.css'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Drawer from '@material-ui/core/Drawer'
import Badge from '@material-ui/core/Badge'
import { useContext } from 'react'
import { Cart } from '../../pages/cart/cart'
import { CartContext } from '../../context/cartContext'

const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`

export const CartWidget = () => {
  const { quantity, cartOpen, setCartOpen } = useContext(CartContext)
  return (
    <>
      {quantity ? (
        <>
          <Drawer
            anchor='right'
            open={cartOpen}
            onClose={() => setCartOpen(false)}
          >
            <Cart />
          </Drawer>
          <StyledButton onClick={() => setCartOpen(true)}>
            <Badge badgeContent={quantity} color='error'>
              <AddShoppingCartIcon />
            </Badge>
          </StyledButton>
        </>
      ) : (
        ''
      )}
    </>
  )
}
