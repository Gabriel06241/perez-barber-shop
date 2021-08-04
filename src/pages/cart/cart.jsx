import { useContext, useState } from 'react'
import { CartItem } from '../../components/cartItem/cartItem'
import { CartContext } from '../../context/cartContext'
import { FormBuyer } from '../../components/formBuyer/formBuyer'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import RemoveShoppingCart from '@material-ui/icons/RemoveShoppingCart'
import Button from '@material-ui/core/Button'

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
  const [showForm, setShowForm] = useState(false)

  const {
    createOrder,
    cartItems,
    calculateTotal,
    clear,
    setCartOpen,
    buyerData,
    setFormError
  } = useContext(CartContext)

  const confirmClearCart = () => {
    const confirmed = window.confirm(
      '¿Estas seguro que deseas vaciar tu carrito?'
    )
    if (confirmed) {
      clear()
    }
  }

  const validateRequiredParams = (objectToValidate) => {
    for (const key in objectToValidate) {
      if (!objectToValidate[key]) {
        return setFormError(`El campo ${key} es requerido`)
      } else {
        setFormError('')
      }
    }
  }

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  const handleCreateOrder = async (e) => {
    e.preventDefault()
    validateRequiredParams(buyerData)

    if (
      buyerData.firstName &&
      buyerData.lastName &&
      buyerData.cellphone &&
      !validateEmail(buyerData.email)
    ) {
      return setFormError('Por favor ingrese un correo valido')
    }

    if (
      buyerData.firstName &&
      buyerData.lastName &&
      buyerData.cellphone &&
      validateEmail(buyerData.email)
    ) {
      const items = await cartItems.map(({ item, quantity }) => {
        const { id, title, price } = item
        return { id, title, price, quantity }
      })

      const orderId = await createOrder({
        buyer: {
          name: `${buyerData.firstName} ${buyerData.lastName}`,
          phone: buyerData.cellphone,
          email: buyerData.email
        },
        items,
        date: new Date(),
        total: calculateTotal(cartItems).toFixed(2)
      })
      alert(`Su numero de orden creada existosamente es: ${orderId}`)
      clear()
      setCartOpen(false)
    }
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
        {showForm ? <FormBuyer /> : ''}
        {!showForm ? (
          <Button variant='outlined' onClick={() => setShowForm(true)}>
            Crear Orden
          </Button>
        ) : (
          <Button variant='outlined' onClick={handleCreateOrder}>
            Realizar Compra
          </Button>
        )}
      </div>
    </Wrapper>
  )
}
