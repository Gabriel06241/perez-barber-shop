import './itemListContainer.css'
import { ItemList } from '../../components/itemList/itemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ITEMS from '../../data/items.json'

export const ItemListContainer = ({ greeting, handleAddToCart }) => {
  const { id } = useParams()
  const [items, setItems] = useState([])

  const getItems = (id) => new Promise((resolve, reject) => {
    const items = id ? ITEMS.filter(item => item.category === id) : ITEMS
    setTimeout(() => {
      resolve(items);
    }, 1000)
  })

  useEffect(() => {
      getItems(id).then((items) => {
        setItems(items)
      }).catch(error => alert('Error obteniendo los productos ...', error))
  }, [id])

  return (
    <section className="itemListContainer">
      <p>
        {greeting}
      </p>
      <ItemList items={items} handleAddToCart={handleAddToCart} />
    </section>
  )
}
