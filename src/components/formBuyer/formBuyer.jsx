import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import styled from 'styled-components'

const Input = styled.input`
padding: 0.5em;
color: #ee402c;
background: papayawhip;
border: none;
border-radius: 3px;
width: 97%;
margin-bottom: 0.5em;
`

const Message = styled.label`
margin-bottom: 0.5em;
color: palevioletred;
display: block;
`

export const FormBuyer = () => {
  const { buyerData, setBuyerData, formError } = useContext(CartContext)

  return (
    <form>
      <h4>Datos de compra: </h4>
      <Input
        name='firstName'
        placeholder='First name'
        value={buyerData.firstName}
        onChange={(e) =>
          setBuyerData({ ...buyerData, firstName: e.target.value })
        }
      />
      <br />
      <Input
        name='lastName'
        placeholder='Last name'
        value={buyerData.lastName}
        onChange={(e) => setBuyerData({ ...buyerData, lastName: e.target.value })}
      />
      <br />
      <Input
        name='cellphone'
        placeholder='Cell phone'
        value={buyerData.cellphone}
        onChange={(e) =>
          setBuyerData({ ...buyerData, cellphone: e.target.value })
        }
      />
      <br />
      <Input
        name='email'
        placeholder='Email'
        value={buyerData.email}
        onChange={(e) => setBuyerData({ ...buyerData, email: e.target.value })}
      />
      <br />
      <Message>{formError}</Message>
    </form>
  )
}
