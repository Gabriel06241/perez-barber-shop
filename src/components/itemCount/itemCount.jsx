import { useState } from 'react'
import './itemCount.css'

export const ItemCount = ({ initial = 1, stock, onAdd }) => {
  const [quantityToAdd, setQuantity] = useState(initial)

  const handleQuantity = operator => {
    if (operator === '+') {
      if (stock > quantityToAdd) {
        setQuantity(quantityToAdd + 1)
      }
    } else if (operator === '-') {
      if (quantityToAdd > 1) {
        setQuantity(quantityToAdd - 1)
      }
    }
  }

  return (
    <div className="itemCountContainer">
      <div className="itemCount">
        <button
          onClick={() => {
            handleQuantity('-')
          }}
        >
          -
        </button>
        <p>
          {quantityToAdd}
        </p>
        <button
          onClick={() => {
            handleQuantity('+')
          }}
        >
          +
        </button>
      </div>
      <button disabled={!stock} onClick={() => onAdd({quantityToAdd})}>
        Agregar al carrito
      </button>
    </div>
  )
}
