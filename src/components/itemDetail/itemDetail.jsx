import { Fragment, useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ItemCount } from '../itemCount/itemCount'
import './itemDetail.css'
import styled from 'styled-components'
import LinearProgress from '@material-ui/core/LinearProgress'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Skeleton from '@material-ui/lab/Skeleton'
import { CartContext } from '../../context/cartContext'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  padding: 10px;
  margin: 10px;

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
    font-size: 15px;
    /* padding: 1rem; */
    height: 100%;
  }

  .bodyCartItemSkeleton {
    width: 350px;
  }
  .skeletonImage {
    justify-content: center;
  }

  .finishBuying {
    border-radius: 5px;
    background-color: cadetblue;
    text-align: center;
    margin-bottom: 30px;
  }

  .continueBuying {
    border-radius: 5px;
    background-color: skyblue;
    text-align: center;
    margin-bottom: 30px;
  }
`

export const ItemDetail = ({ item }) => {
  const history = useHistory()
  const [itemAdded, setItemAdded] = useState(false)
  const { quantity, setQuantity, addItem, setCartOpen } = useContext(CartContext)
  const { id, title, description, price, image, stock } = item

  const onAdd = ({ quantityToAdd }) => {
    setItemAdded(true)
    setQuantity(quantity + quantityToAdd)
    addItem({ item, quantity: quantityToAdd })
  }

  return (
    <Fragment>
      <LinearProgress />
      <Card className='cardItem'>
        <Wrapper>
          <CardActionArea>
            {image ? (
              <CardMedia
                component='img'
                alt={description}
                height='250'
                image={image}
                title={title}
              />
            ) : (
              <Skeleton
                className='skeletonImage'
                variant='rect'
                width={350}
                height={200}
              />
            )}
          </CardActionArea>
          {title ? (
            <div>
              <h4>
                <Link to={`/item/${id}`} className='itemLink'>
                  {' '}
                  {title}{' '}
                </Link>
              </h4>
              <p> {description} </p>
              <h3>
                {'$ '}
                {price}{' '}
              </h3>
            </div>
          ) : (
            <div className='bodyCartItemSkeleton'>
              <Skeleton />
              <Skeleton animation={false} />
              <Skeleton animation='wave' />
            </div>
          )}
          <CardActions>
            {title && !itemAdded ? (
              <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            ) : (
              ''
            )}
            {title && itemAdded && quantity ? (
              <>
              <button
                className='finishBuying'
                disabled={!stock}
                onClick={() => setCartOpen(true)}
              >
                Terminar compra
              </button>
              <button
                className='continueBuying'
                onClick={() => history.push('/')}
              >
                Continuar comprando
              </button>
              </>
            ) : (
              ''
            )}
          </CardActions>
        </Wrapper>
      </Card>
    </Fragment>
  )
}
