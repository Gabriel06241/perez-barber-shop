import { firebase } from '../firebase'

export const createOrder = async (order) => {
  const db = firebase.firestore()
  try {
    const response = await db.collection("checkout").add(order);
    return response.id
  } catch (error) {
    throw new Error(error);
  }
}
