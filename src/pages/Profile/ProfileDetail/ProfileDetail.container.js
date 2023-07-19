import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import ProfileDetailView from "./ProfileDetail.view";
import db from "../../../config/firebaseConfig";
import {
  doc,
  getDoc,
  getDocs,
  collection,
  where,
  query,
} from "@firebase/firestore";
import useMediaQuery from "../../../utils/useMediaQuery";
import { usePosition } from "../../../utils/usePosition";
import { useNavigate } from "react-router";

const ProfileDetail = () => {
  const { user } = UserAuth();
  const { latitude, longitude, error } = usePosition();
  const [data, setData] = useState();
  const [product, setProduct] = useState();

  useEffect(() => {
    console.log(latitude, longitude);
  }, [latitude, longitude]);

  useEffect(() => {
    const getUserById = async (userId) => {
      try {
        const userDocRef = doc(db, "user", userId);
        const userSnapshot = await getDoc(userDocRef);

        if (userSnapshot.exists()) {
          const _user = userSnapshot.data();
          setData(_user);

          // const userProductQuery = query(
          //   collection(db, "product"),
          //   where("createdById", "==", userDocRef)
          // );

          const productDocRef = collection(db, "product");
          const userProductSnapshot = await getDocs(productDocRef);
          const productData = userProductSnapshot.docs.map((doc) => doc.data());
          // console.log(productData);
          console.log(user.uid);
          const result = productData.filter(
            (productData) => productData.createdByIdent === user.uid
          );

          console.log(result);

          setProduct(result);
        } else {
          console.log("User not found");
        }
      } catch (error) {
        console.error("Error retrieving user:", error);
      }
      // console.log("here", user.uid);
    };

    if (user && user.uid) {
      getUserById(user.uid);
    }
  }, [user]);

  // console.log(data);
  // console.log(product);

  const sm = useMediaQuery("(min-width: 360px) and (max-width:600px)");
  const md = useMediaQuery("(min-width: 601px) and (max-width:1020px)");
  const lg = useMediaQuery("(min-width: 1024px) and (max-width:1400px)");
  const xl = useMediaQuery("(min-width: 1401px)");
  const navigate = useNavigate();

  const generatedProps = {
    // generated props here
    user,
    data,
    product,
    sm,
    md,
    lg,
    xl,
    latitude,
    longitude,
    error,
    navigate
  };
  return <ProfileDetailView {...generatedProps} />;
};

export default ProfileDetail;
