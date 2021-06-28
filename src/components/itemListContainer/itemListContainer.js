import './itemListContainer.css';
import { ItemCount } from './../itemCount/itemCount'
export const ItemListContainer = ({ greeting }) => {
  return (
    <div className='item-list-container'>
      <p>{greeting}</p>
      <ItemCount stock="5" initial="1" />
    </div>
  )
}