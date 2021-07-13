// import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from '../itemCount/itemCount'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 97%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  margin: 20px;

  /* button {
    border-radius: 0 0 20px 20px;
  } */

  img {
    max-height: 350px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    /* padding: 1rem; */
    height: 100%;
  }
`

export const ItemDetail = ({ item, handleAddToCart }) => {
  console.log(JSON.stringify(item))
  const { id, title, description, price, image, stock } = item
  console.log('id :>> ', id)

  // useEffect(
  //   () => {
  //     console.log(item);
  //   },
  //   [item]
  // )

  const onAdd = quantityToAdd => {
    console.log('quantityToAdd :>> ', quantityToAdd)
  }

  return (
    <Wrapper>
      {/* <ItemCount stock={stock} initial={1} onAdd={onAdd} />
      <Link to="/Cart" className="finishBuying">
        <p>Terminar Compra</p>
      </Link>
      <p>
        {title}
      </p> */}

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
      <ItemCount stock={stock} initial={1} onAdd={onAdd} />
      {/* <Button onClick={() => handleAddToCart(item)}>Ver detalle</Button> */}
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
