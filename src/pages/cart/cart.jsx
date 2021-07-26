import { useContext } from 'react'
import { CartItem } from '../../components/cartItem/cartItem'
import { CartContext } from '../../context/cartContext'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import RemoveShoppingCart from '@material-ui/icons/RemoveShoppingCart'
import { createOrder } from '../../data/order'

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
  const { cartItems, calculateTotal, clear, setCartOpen } =
    useContext(CartContext)

  const confirmClearCart = () => {
    const confirmed = window.confirm(
      '¿Estas seguro que deseas vaciar tu carrito?'
    )
    if (confirmed) {
      clear()
    }
  }

  const handleCreateOrder = async (cartItems) => {
    const items = await cartItems.map(({ item, quantity }) => {
      const { id, title, price } = item
      return { id, title, price, quantity }
    })

    const orderId = await createOrder({
      buyer: {
        name: 'Gabriel',
        phone: '+57-(314)-567-1234',
        email: 'gabriel@gmail.com'
      },
      items,
      date: new Date(),
      total: calculateTotal(cartItems).toFixed(2)
    })
    alert(`Oder ${orderId} creada existosamente!`)
    clear()
    setCartOpen(false)
  }

  return (
    <Wrapper>
      <div>
        <h2>Your shopping cart</h2>
        <StyledButton onClick={confirmClearCart}>
          <RemoveShoppingCart />
        </StyledButton>
      </div>
      {cartItems.length === 0 ? <p>Not items in the cart.</p> : null}
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.item.id} cartItem={cartItem} />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
      <div>
        <button onClick={() => handleCreateOrder(cartItems)}>
          Create Order
        </button>
      </div>
    </Wrapper>
  )
}
