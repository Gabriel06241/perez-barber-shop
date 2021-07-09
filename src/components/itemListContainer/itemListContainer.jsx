import './itemListContainer.css'
import { ItemList } from '../itemList/itemList'
import { useState, useEffect } from 'react'
export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = () => {
      return [
        {
          id: 1,
          title: 'Title 1',
          description: 'Description 1',
          price: 1,
          pictureUrl: 'PictureUrl 1',
          stock: 3
        },
        {
          id: 2,
          title: 'Title 2',
          description: 'Description 2',
          price: 2,
          pictureUrl: 'PictureUrl 2',
          stock: 0
        },
        {
          id: 3,
          title: 'Title 3',
          description: 'Description 3',
          price: 3,
          pictureUrl: 'PictureUrl 3',
          stock: 5
        }
      ]
    }
    const items = getItems()
    setItems(items)
  }, [])

  return (
    <section className="itemListContainer">
      <p>
        {greeting}
      </p>
      <ItemList items={items} />
    </section>
  )
}
