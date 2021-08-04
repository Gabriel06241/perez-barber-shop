import './itemListContainer.css'
import logo from '../../images/coderhouse.png'
import { useState, useEffect, Fragment, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import { ItemList } from '../../components/itemList/itemList'

export const ItemListContainer = ({ greeting }) => {
  const { id } = useParams()
  const [items, setItems] = useState([])

  const { getItemsFromFirebase, getItemsByCategory } = useContext(CartContext)

  const getItems = async (id) =>
    await new Promise(async (resolve, reject) => {
      const items = id
        ? await getItemsByCategory(id)
        : await getItemsFromFirebase()
      setTimeout(() => {
        resolve(items)
      }, 1000)
    })

  useEffect(() => {
    getItems(id)
      .then((items) => {
        setItems(items)
      })
      .catch((error) => alert('Error obteniendo los datos...', error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <section className='itemListContainer'>
      <p>{greeting}</p>
      {!items.length ? (
        <Fragment>
          <img src={logo} className='logo-loader' alt='logo' />
        </Fragment>
      ) : (
        <ItemList items={items} />
      )}
    </section>
  )
}
