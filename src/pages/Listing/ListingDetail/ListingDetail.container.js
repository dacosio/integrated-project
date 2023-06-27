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
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const productRef = doc(store, "product", listingId);

    getDoc(productRef)
      .then((productResponse) => {
        setProduct(productResponse.data());

        getDocs(collection(productRef, "image"))
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

  const handleOnClick = () => {
    console.log("C");
    setVisibility(true);
  };

  const generatedProps = {
    product: product,
    user: user,
    items: items,
    images: images,
    visibility: visibility,
    setVisibility: setVisibility,
    handleOnClick: handleOnClick,
  };
  return <ListDetailView {...generatedProps} />;
};

export default ListingDetail;
