import React, { useState, useEffect } from "react";
import store, { storage } from "../../../config/firebaseConfig";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  startAfter,
  limit,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import ListDetailView from "./ListingDetail.view";

const ListingDetail = () => {
  const [product, setProduct] = useState({});
  const [user, setUser] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    const productRef = doc(store, "product", "LiI8AlOLDOEusml6Eg9K");

    getDoc(productRef)
      .then((productResponse) => {
        setProduct(productResponse.data());

        const userRef = doc(
          store,
          "user",
          productResponse.data()["created_by"]["id"]
        );

        getDoc(userRef)
          .then((userResponse) => {
            setUser(userResponse.data());
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const directoryRef = ref(storage, "image");

    listAll(directoryRef)
      .then(async (res) => {
        const files = [];

        const promises = res.items.map(async (fileRef, index) => {
          await getDownloadURL(fileRef).then((url) => {
            files.push(url);
          });
        });

        await Promise.all(promises);

        setImages([...files.sort()]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const generatedProps = {
    product: product,
    user: user,
    images: images,
    // generated props here
  };
  return <ListDetailView {...generatedProps} />;
};

export default ListingDetail;
