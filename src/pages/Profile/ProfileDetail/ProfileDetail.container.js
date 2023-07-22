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
  orderBy,
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
    const getUserById = async (userId) => {
      try {
        const userDocRef = doc(db, "user", userId);
        const userSnapshot = await getDoc(userDocRef);

        if (userSnapshot.exists()) {
          const _user = userSnapshot.data();
          getDocs(
            query(
              collection(db, "order"),
              where("splitterId", "==", userId),
              where("orderStatus", "==", "completed")
            )
          ).then((itemsResponse) => {
            setData({
              ..._user,
              qty: itemsResponse.docs.length,
            });
          });

          const productDocRef = collection(db, "product");
          const userProductSnapshot = await getDocs(
            query(
              productDocRef,
              where("createdByIdent", "==", userId),
              where("qty", ">", 0),
              orderBy("createdAt", "desc")
            )
          );
          const productData = userProductSnapshot.docs.map((doc) => doc.data());

          setProduct(productData);
        } else {
          console.log("User not found");
        }
      } catch (error) {
        console.error("Error retrieving user:", error);
      }
    };

    if (user && user.uid) {
      getUserById(user.uid);
    }
  }, [user]);

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
    navigate,
  };
  return <ProfileDetailView {...generatedProps} />;
};

export default ProfileDetail;
