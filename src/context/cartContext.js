const { createContext, useState } = require("react");

export const CartContext = createContext()

export const CartProvider = ({ children, defaultCart = [] }) => {
  const [quantity, setQuantity] = useState(0)
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false)

  const getTotalItems = ({ items }) => {
    return {
      quantity: items.reduce((quantity, item) => quantity + item.quantity, 0),
      total: items.reduce((total, item) => total + (item.quantity * item.price), 0)
    }
  }

  const addItem = ({ item, quantity }) => {
    const { id: itemId } = item
    if (isInCart(itemId)) {
      const cartItem = cartItems.find(({item}) => item.id === itemId);
      cartItem.quantity += quantity
    } else {
      setCartItems([...cartItems, { item, quantity: quantity }])
    }
  }

  const isInCart = (itemId) => {
    return cartItems.some(({item}) => item.id === itemId);
  }

  const removeItem = (itemId) => {
    return cartItems.filter(({item}) => item.id !== itemId);
  }

  const clear = () => {
    console.log('Cart now is empty...');
    setCartItems(defaultCart);
  }

  const finishBuying = () => {
    setCartOpen(true)
    console.log('cartItems >> ', cartItems);
  }

  return (
    <CartContext.Provider value={{ cartOpen, setCartOpen, finishBuying, quantity, setQuantity, cartItems, addItem, removeItem, clear, getTotalItems }}>
      {children}
    </CartContext.Provider>
  )
}