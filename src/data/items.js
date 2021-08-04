import { firebase } from '../firebase/firebase'

export const uploadItems = async (ITEMS) => {
  const db = firebase.firestore()
  const batch = db.batch()

  await ITEMS.map(async (item) => {
    const docRef = await db.collection("items").doc();
    batch.set(docRef, item);
  });

  const response = await batch.commit();
  return response
}

export const getItemById = async (id) => {
  const snapshot = await firebase.firestore().collection('items').where('id', '==', id).get()
  return snapshot.docs.map((doc) => { return { ...doc.data(), docId: doc.id } });
}
