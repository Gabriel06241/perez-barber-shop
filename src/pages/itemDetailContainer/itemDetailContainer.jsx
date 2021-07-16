import './itemDetailContainer.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../../components/itemDetail/itemDetail'
import ITEMS from '../../data/items.json'

export const ItemDetailContainer = ({ greeting, handleAddToCart }) => {
  const { id } = useParams()
  const [item, setItem] = useState({})

  const getItem = new Promise((resolve, reject) => {
    const items = ITEMS.find(item => item.id === Number(id))
    setTimeout(() => {
      resolve(items)
    }, 1000)
  })

  useEffect(() => {
    getItem
      .then(item => {
        setItem(item)
      })
      .catch(error => alert('Error obteniendo un producto ...', error))
  }, )

  return (
    <section className="itemDetailContainer">
      <p>
        {greeting}
      </p>
      <ItemDetail item={item} handleAddToCart={handleAddToCart} />
    </section>
  )
}
