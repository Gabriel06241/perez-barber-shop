import { firebase } from '../firebase/firebase'
const { createContext, useState } = require("react");

export const CartContext = createContext()

export const CartProvider = ({ children, defaultCart = [] }) => {
  const [quantity, setQuantity] = useState(0)
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false)
  const [buyerData, setBuyerData] = useState({
    firstName: '',
    lastName: '',
    cellphone: '',
    email: ''
  })
  const [formError, setFormError] = useState('')

  const getItemsFromFirebase = async () => {
    const snapshot = await firebase.firestore().collection('items').get()
    return snapshot.docs.map((doc) => { return { ...doc.data(), docId: doc.id } });
  }
  
  const getItemsByCategory = async (category) => {
    const snapshot = await firebase.firestore().collection('items').where('category', '==', category).get()
    return snapshot.docs.map((doc) => { return { ...doc.data(), docId: doc.id } });
  }
  
  const getItemByDocId = async (docId) => {
    const doc = await firebase.firestore().collection('items').doc(docId).get()
    return { ...doc.data(), docId: doc.id }
  }

  const createOrder = async (order) => {
    const db = firebase.firestore()
    try {
      const response = await db.collection("checkout").add(order);
      return response.id
    } catch (error) {
      throw new Error(error);
    }
  }

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
    <CartContext.Provider value={{
      cartOpen,
      setCartOpen,
      quantity,
      setQuantity,
      cartItems,
      addItem,
      removeItem,
      clear,
      calculateTotal,
      createOrder,
      getItemsFromFirebase,
      getItemsByCategory,
      getItemByDocId,
      buyerData,
      setBuyerData,
      formError,
      setFormError
    }}>
      {children}
    </CartContext.Provider>
  )
}