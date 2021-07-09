import { useState } from 'react'
import './itemCount.css'

export const ItemCount = ({ initial = 1, stock, onAdd }) => {
  const [counter, setCounter] = useState(initial)

  const handleCounter = operator => {
    if (operator === '+') {
      if (stock > counter) {
        setCounter(counter + 1)
      }
    } else if (operator === '-') {
      if (counter > 1) {
        setCounter(counter - 1)
      }
    }
  }

  return (
    <div className='itemCountContainer'>
      <div className='itemCount'>
        <button
          onClick={() => {
            handleCounter('-')
          }}
        >
          -
        </button>
        <p>
          {counter}
        </p>
        <button
          onClick={() => {
            handleCounter('+')
          }}
        >
          +
        </button>
      </div>
      <button disabled={!stock} onClick={onAdd}>
        Agregar al carrito
      </button>
    </div>
  )
}
