import { useState, useEffect } from 'react';
import './itemCount.css';

export function ItemCount({ stock, initial, onAdd }) {
  let [counter, setCounter] = useState(initial);
  let [disabledDecrement, setDisabledDecrement] = useState(true);
  let [disabledIncrement, setDisabledIncrement] = useState(false);

  useEffect(() => {
    if (counter == initial) {
      setDisabledDecrement(true);
    }
    if (counter > initial) {
      setDisabledDecrement(false);
    }
    if (counter == stock) {
      setDisabledIncrement(true);
    }
    if (counter < initial) {
      setCounter(initial);
    }
    if (counter < stock) {
      setDisabledIncrement(false);
    }
    if (counter > stock) {
      alert('Stock Out!');
      setCounter(stock);
    }
  }, [counter]);

  const addToCart = e => {
    e.preventDefault();
    alert(
      counter +
        (counter == 1 ? ' unidad' : ' unidades') +
        (counter == 1 ? ' agregada' : ' agregadas') +
        ' al carrito'
    );
    if (counter != 1) setCounter(1);
  };

  return (
    <div className="compItemCount">
      <h5>ItemCount!</h5>
      <form className="formItemCount" onSubmit={addToCart}>
        <button
          name="decrement"
          className="btnDecrement"
          type="button"
          onClick={() => {
            setCounter(--counter);
          }}
          disabled={disabledDecrement}
        >
          -
        </button>
        <label>
          <input
            type="text"
            name="count"
            className="countInput"
            value={counter}
            onChange={(e)=>{console.log('input change')}}
          />
        </label>
        <button
          name="increment"
          className="btnIncrement"
          type="button"
          onClick={() => {
            setCounter(++counter);
          }}
          disabled={disabledIncrement}
        >
          +
        </button>
        <input
          type="submit"
          className="btnAddToCart"
          value="Agregar al carrito"
        />
      </form>
    </div>
  );
}
