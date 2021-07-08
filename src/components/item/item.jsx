import { Link } from 'react-router-dom'
import { ItemCount } from '../itemCount/itemCount'
import './item.css'

export const Item = ({ item }) => {
  const { id, title, description, price, pictureUrl, stock } = item

  return (
    <Link to={`/item/${id}`} className='itemLink'>
      <article id={id}>
        <h2>
          {title}
        </h2>
        <h3>
          {description}
        </h3>
        <img src={pictureUrl} alt="Product" />
        <p>
          {price}
        </p>
        <ItemCount
          stock={stock}
          initial={1}
          onAdd={() => {
            console.log('onAdd...')
          }}
        />
      </article>
    </Link>
  )
}
