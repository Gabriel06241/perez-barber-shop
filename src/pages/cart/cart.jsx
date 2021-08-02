import { useContext, useState } from 'react'
import { CartItem } from '../../components/cartItem/cartItem'
import { CartContext } from '../../context/cartContext'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import RemoveShoppingCart from '@material-ui/icons/RemoveShoppingCart'
import { createOrder } from '../../data/order'
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

const Input = styled.input`
  padding: 0.5em;
  color: #ee402c;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`

const Message = styled.label`
  margin-bottom: 0.5em;
  color: palevioletred;
  display: block;
`

export const Cart = () => {
  const [showForm, setShowForm] = useState(false)
  const [formError, setFormError] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    cellphone: '',
    email: ''
  })
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

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
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

  const handleCreateOrder = async (e) => {
    e.preventDefault()
    validateRequiredParams(formData)

    if (
      formData.firstName &&
      formData.lastName &&
      formData.cellphone &&
      !validateEmail(formData.email)
    ) {
      return setFormError('Por favor ingrese un correo valido')
    }

    if (
      formData.firstName &&
      formData.lastName &&
      formData.cellphone &&
      validateEmail(formData.email)
    ) {
      const items = await cartItems.map(({ item, quantity }) => {
        const { id, title, price } = item
        return { id, title, price, quantity }
      })

      const orderId = await createOrder({
        buyer: {
          name: `${formData.firstName} ${formData.lastName}`,
          phone: formData.cellphone,
          email: formData.email
        },
        items,
        date: new Date(),
        total: calculateTotal(cartItems).toFixed(2)
      })
      alert(`Numero de Orden ${orderId}, creada existosamente!`)
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
        {showForm ? (
          <form>
            <h4>Datos de compra: </h4>
            <Input
              name='firstName'
              placeholder='First name'
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <br />
            <Input
              name='lastName'
              placeholder='Last name'
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
            <br />
            <Input
              name='cellphone'
              placeholder='Cell phone'
              value={formData.cellphone}
              onChange={(e) =>
                setFormData({ ...formData, cellphone: e.target.value })
              }
            />
            <br />
            <Input
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <br />
            <Message>{formError}</Message>
          </form>
        ) : (
          ''
        )}
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
