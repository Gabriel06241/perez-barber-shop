import './itemListContainer.css'
import logo from '../../images/coderhouse.png'
import { ItemList } from '../../components/itemList/itemList'
import { useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import ITEMS from '../../data/items.json'
import LinearProgress from '@material-ui/core/LinearProgress'

export const ItemListContainer = ({ greeting, handleAddToCart }) => {
  const { id } = useParams()
  const [items, setItems] = useState([])

  const getItems = id =>
    new Promise((resolve, reject) => {
      const items = id ? ITEMS.filter(item => item.category === id) : ITEMS
      setTimeout(() => {
        resolve(items)
      }, 1000)
    })

  useEffect(
    () => {
      getItems(id)
        .then(items => {
          setItems(items)
        })
        .catch(error => alert('Error obteniendo los productos ...', error))
    },
    [id]
  )

  return (
    <section className="itemListContainer">
      <p>
        {greeting}
      </p>
      {!items.length
        ? <Fragment>
            <LinearProgress />
            <img src={logo} className="logo-loader" alt="logo" />
          </Fragment>
        : <ItemList items={items} handleAddToCart={handleAddToCart} />}
    </section>
  )
}
