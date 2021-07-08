import { ItemCount } from '../itemCount/itemCount'
export const Item = ({ item }) => {
  const { id, title, price, pictureUrl, stock } = item

  return (
    <article id={id}>
      <h2>
        {title}
      </h2>
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
  )
}
