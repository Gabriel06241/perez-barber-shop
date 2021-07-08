import { useEffect, useState } from 'react'
import { ItemDetail } from '../itemDetail/itemDetail'

export const ItemDetailContainer = () => {
  const [item, setItem] = useState()

  useEffect(() => {
    const getItem = () => {
      return {
        id: 3,
        title: 'Title 3',
        description: 'Description 3',
        price: 3,
        pictureUrl: 'PictureUrl 3',
        stock: 5
      }
    }
    const item = getItem()
    setItem(item)
  }, [])

  return (
    <section>
      <ItemDetail item={item} />
    </section>
  )
}
