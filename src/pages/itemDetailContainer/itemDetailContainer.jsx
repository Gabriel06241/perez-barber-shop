import './itemDetailContainer.css'
import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../../components/itemDetail/itemDetail'
import { CartContext } from '../../context/cartContext'

export const ItemDetailContainer = ({ greeting }) => {
  const { id } = useParams()
  const [item, setItem] = useState({})

  const { getItemByDocId } = useContext(CartContext)

  useEffect(() => {
    new Promise(async (resolve, reject) => {
      const item = await getItemByDocId(id)
      setTimeout(() => {
        resolve(item)
      }, 1000)
    })
      .then((item) => {
        if (!item.title) {
          alert('Error el id del producto no existe en firebase...')
        } else {
          setItem(item)
        }
      })
      .catch((error) => alert('Error obteniendo un producto ...', error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <section className='itemDetailContainer'>
      <p>{greeting}</p>
      <ItemDetail item={item} />
    </section>
  )
}
