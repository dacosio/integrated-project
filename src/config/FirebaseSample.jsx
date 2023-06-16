/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  onSnapshot,
  collection,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
  query,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./firebaseConfig";

const FirebaseSample = () => {
  // initial value of categories is array of object with title of an empty string
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "category"), (snapshot) => {
        return setCategories(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }),
    []
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "user"), (snapshot) => {
        return setUsers(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }),
    []
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "product"), (snapshot) => {
        return setProducts(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }),
    []
  );

  // useEffect(
  //   () =>
  //     onSnapshot(collection(db, "user"), (snapshot) => {
  //       return setUsers(
  //         snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //       );
  //     }),
  //   []
  // );

  const handleNew = async () => {
    const title = prompt("Enter category title");

    const collectionRef = collection(db, "category");
    const payload = { title };
    const docRef = await addDoc(collectionRef, payload);
    console.log("The new ID is: " + docRef.id);
  };

  const handleEdit = async (id) => {
    const title = prompt("Enter category title");

    const docRef = doc(db, "category", id);
    const payload = { title };

    setDoc(docRef, payload);
  };

  const handleDelete = async (id) => {
    const docRef = doc(db, "category", id);
    await deleteDoc(docRef);
  };

  console.log(users);
  console.log(categories);
  console.log(products);

  return (
    <>
      <div>firebaseSample</div>
      <button onClick={handleNew}>Add New Category</button>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button onClick={() => handleEdit(category.id)}>edit</button>
            <button onClick={() => handleDelete(category.id)}>delete</button>
            <span>{category.label}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FirebaseSample;
