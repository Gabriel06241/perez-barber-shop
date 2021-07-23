import { useContext } from 'react'
import { CartItem } from '../../components/cartItem/cartItem'
import { CartContext } from '../../context/cartContext'
import styled from 'styled-components'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import RemoveShoppingCart from '@material-ui/icons/RemoveShoppingCart'

const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;
`

const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`

export const Cart = () => {
  const { cartItems, calculateTotal, clear } = useContext(CartContext)

  return (
    <Wrapper>
      <div>
      <h2>Your shopping cart</h2>
      {/* <h2>🗑</h2> */}
      <StyledButton onClick={clear}>
        <RemoveShoppingCart />
      </StyledButton>
      </div>
      {cartItems.length === 0 ? <p>Not items in the cart.</p> : null}
      {cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.item.id}
          cartItem={cartItem}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  )
}
