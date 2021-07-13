import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import { ItemCount } from '../itemCount/itemCount'
// import './item.css'
import Button from '@material-ui/core/Button'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 95%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  margin: 0 5px 0 10px;

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-height: 220px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`

export const Item = ({ item, handleAddToCart }) => {
  const { id, title, description, price, image, stock } = item

  return (
    <Wrapper>
      <img src={image} alt="Product" />
      <div>
        <h3>
          <Link to={`/item/${id}`} className="itemLink">
            {' '}{title}{' '}
          </Link>
        </h3>
        <p>
          {' '}{description}{' '}
        </p>
        <h3>
          {'$ '}{price}{' '}
        </h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Ver detalle</Button>
      {/* <Button onClick={() => handleAddToCart(item)}>Agregar al carrito</Button> */}
      {/* <ItemCount
        stock={stock}
        initial={1}
        onAdd={() => {
          console.log('onAdd...')
        }}
      /> */}
    </Wrapper>
  )
}
