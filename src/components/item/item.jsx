import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Skeleton from '@material-ui/lab/Skeleton'

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
  
  .skeletonImage {
    justify-content: center;
  }
`

export const Item = ({ item }) => {
  const history = useHistory()
  const { id, title, description, price, image } = item

  return (
    <Wrapper>
      {image
        ? <img src={image} alt="Product" />
        : <Skeleton
            className="skeletonImage"
            variant="rect"
            width={350}
            height={200}
          />}
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
          {'$ '}
          {price}{' '}
        </h3>
      </div>
      <Button onClick={() => history.push(`/item/${id}`) }>Ver detalle</Button>
      {/* <Button onClick={() => handleAddToCart(item)}>Ver detalle</Button> */}
    </Wrapper>
  )
}
