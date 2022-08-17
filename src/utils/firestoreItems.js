import { firestore } from "./Firebase";

const createItem = async (collection, item) => {
  const ref = await firestore.collection(collection).add(item);

  const newItem = {
    id: ref.id,
    ...item,
  };

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

const readItemsBy = async (collection, field, user) => {
  let items = [];
  const snapshot = await firestore
    .collection(collection)
    .where(field, "==", user)
    .get();

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

  return item;
};

const updateItem = async (collection, id, updates) => {
  await firestore.collection(collection).doc(id).update(updates);

  const item = readItemById(id);

  return item;
};

const deleteItemById = async (collection, id) => {
  await firestore.collection(collection).doc(id).delete();

  return id;
};

const getCount = async (collection) => {
  let size = await firestore
    .collection(collection)
    .get()
    .then((snap) => {
      size = snap.size;
    });

  return size;
};

export {
  createItem,
  readAllItems,
  readItemsBy,
  readItemById,
  updateItem,
  deleteItemById,
  getCount,
};
