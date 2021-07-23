import { firebase } from '../firebase'

export const uploadItems = async (ITEMS) => {
  const db = firebase.firestore()
  const batch = db.batch()

  await ITEMS.map(async (item) => {
    const docRef = await db.collection("items").doc();
    batch.set(docRef, item);
  });

  const response = await batch.commit();
  console.log('response :>> ', response);
  return response
}

export const getItemsFromFirebase = async () => {
  const snapshot = await firebase.firestore().collection('items').get()
  return snapshot.docs.map((doc) => { return { ...doc.data(), docId: doc.id } });
}

export const getItemsByCategory = async (category) => {
  const snapshot = await firebase.firestore().collection('items').where('category', '==', category).get()
  return snapshot.docs.map((doc) => { return { ...doc.data(), docId: doc.id } });
}

export const getItemById = async (id) => {
  const snapshot = await firebase.firestore().collection('items').where('id', '==', id).get()
  return snapshot.docs.map((doc) => { return { ...doc.data(), docId: doc.id } });
}

export const getItemByDocId = async (docId) => {
  const snapshot = await firebase.firestore().collection('items').get()
  return snapshot.docs.map((doc) => { return { ...doc.data(), docId: doc.id } });
}
