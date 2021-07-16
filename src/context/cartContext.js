const { createContext } = require("react");

export const CartContext = createContext()

export const CartProvider = ({ children, defaultCart = [] }) => {
  return (
    <CartContext.Provider value={{ defaultCart }}>
      {children}
    </CartContext.Provider>
  )
}