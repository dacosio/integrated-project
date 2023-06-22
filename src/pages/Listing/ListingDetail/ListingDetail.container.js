import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import store, { storage } from "../../../config/firebaseConfig";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  where,
  getDocs,
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
  const { listingId } = useParams();
  const [product, setProduct] = useState({});
  const [user, setUser] = useState({});
  const [items, setItems] = useState();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const productRef = doc(store, "product", listingId);

    getDoc(productRef)
      .then((productResponse) => {
        setProduct(productResponse.data());

        const imageRef = collection(productRef, "image");

        getDocs(imageRef)
          .then(async (imageResponse) => {
            const _images = [];
            imageResponse.docs.forEach((doc) => {
              _images.push(doc.data().imageUrl);
            });
            setImages(_images);
          })
          .catch((error) => {
            console.log(error);
          });

        const userRef = productResponse.data().createdById;

        getDoc(userRef)
          .then(async (userResponse) => {
            setUser(userResponse.data());

            const productsRef = collection(store, "product");
            const q = query(productsRef, where("createdById", "==", userRef));

            setItems((await getDocs(q)).size);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const generatedProps = {
    product: product,
    user: user,
    items: items,
    images: images,
    // generated props here
  };
  return <ListDetailView {...generatedProps} />;
};

export default ListingDetail;
