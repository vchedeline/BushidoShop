import { firestore } from "./Firebase";

const getItems = async (collection) => {
  const snapshot = await firestore.collection(collection).get();

  snapshot.docs.forEach((doc) => console.log(doc.data()));
};

const createItem = async (collection, item) => {
  const ref = await firestore.collection(collection).add(item);

  const newItem = {
    id: ref.id,
    ...item,
  };

  console.log(newItem);
  return newItem;
};

const readAllItems = async (collection) => {
  let items = [];
  const snapshot = await firestore.collection(collection).get();

  items = snapshot.docs.map((doc) => [
    {
      id: doc.id,
      ...doc.data(),
    },
  ]);

  return items;
};

const readItemById = async (collection, id) => {
  const doc = await firestore.collection(collection).doc(id).get();

  const item = {
    id: doc.id,
    ...doc.data(),
  };

  console.log(item);
  return item;
};

const updateItem = async (collection, id, updates) => {
  await firestore.collection(collection).doc(id).update(updates);

  const item = readItemById(id);

  return item;
};

const deleteItemById = async (collection, id) => {
  await firestore.collection(collection).doc(id).delete();
  console.log(id);
  return id;
};

export {
  getItems,
  createItem,
  readAllItems,
  readItemById,
  updateItem,
  deleteItemById,
};
