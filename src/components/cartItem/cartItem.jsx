import { useContext } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { CartContext } from '../../context/cartContext'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .information, .buttons {
    display: flex;
    justify-content: space-between;
  }

  img  {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
`

export const CartItem = ({ cartItem }) => {
  const { quantity, setQuantity, addItem, removeItem } = useContext(CartContext)
  const {
    item: { id, title, price, image },
    item
  } = cartItem

  const handleAddItem = (item, quantityToAdd) => {
    setQuantity(quantity + quantityToAdd)
    addItem({ item, quantity: quantityToAdd })
  }

  const handleRemoveItem = (id) => {
    setQuantity(quantity - 1)
    removeItem(id)
  }

  return (
    <Wrapper>
      <div>
        <h4>{title}</h4>
        <div className='information'>
          <p>Price: ${price}</p>
          <p>Total: ${(cartItem.quantity * price).toFixed(2)}</p>
        </div>
        <div className='buttons'>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => handleRemoveItem(id)}
          >
            -
          </Button>
          <p>{cartItem.quantity}</p>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => handleAddItem(item, 1)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={image} alt={title} />
    </Wrapper>
  )
}
