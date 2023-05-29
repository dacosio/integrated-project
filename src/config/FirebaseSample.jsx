/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  onSnapshot,
  collection,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./firebaseConfig";

const FirebaseSample = () => {
  // initial value of categories is array of object with title of an empty string
  const [categories, setCategories] = useState([{ title: "" }]);

  useEffect(
    () =>
      onSnapshot(collection(db, "category"), (snapshot) =>
        setCategories(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );

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

  return (
    <>
      <div>firebaseSample</div>

      <button onClick={handleNew}>Add New Category</button>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button onClick={() => handleEdit(category.id)}>edit</button>
            <button onClick={() => handleDelete(category.id)}>delete</button>
            <span>{category.title}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FirebaseSample;
