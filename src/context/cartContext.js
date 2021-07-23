const { createContext, useState } = require("react");

export const CartContext = createContext()

export const CartProvider = ({ children, defaultCart = [] }) => {
  const [quantity, setQuantity] = useState(0)
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false)

  const calculateTotal = (items) => {
    return items.reduce((total, { item, quantity }) => total + quantity * item.price, 0)
  }

  const addItem = ({ item, quantity }) => {
    const { id: itemId } = item
    if (isInCart(itemId)) {
      const cartItem = cartItems.find(({ item }) => item.id === itemId);
      cartItem.quantity += quantity
    } else {
      setCartItems([...cartItems, { item, quantity }])
    }
  }

  const isInCart = (itemId) => {
    return cartItems.some(({ item }) => item.id === itemId);
  }

  const removeItem = (itemId) => {
    if (isInCart(itemId)) {
      const cartItem = cartItems.find(({ item }) => item.id === itemId);
      if (cartItem.quantity === 1) {
        setCartItems(cartItems.filter(({ item }) => item.id !== itemId));
      } else {
        cartItem.quantity -= 1
      }
    }
  }

  const clear = () => {
    setQuantity(0);
    setCartItems(defaultCart);
  }

  return (
    <CartContext.Provider value={{ cartOpen, setCartOpen, quantity, setQuantity, cartItems, addItem, removeItem, clear, calculateTotal }}>
      {children}
    </CartContext.Provider>
  )
}