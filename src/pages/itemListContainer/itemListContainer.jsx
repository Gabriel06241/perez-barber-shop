import './itemListContainer.css'
import logo from '../../images/coderhouse.png'
import { ItemList } from '../../components/itemList/itemList'
import { useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { getItemsFromFirebase, getItemsByCategory } from '../../data/items'

export const ItemListContainer = ({ greeting }) => {
  const { id } = useParams()
  const [items, setItems] = useState([])

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
