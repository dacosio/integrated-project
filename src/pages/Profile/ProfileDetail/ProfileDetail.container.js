import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import ProfileDetailView from "./ProfileDetail.view";
import db from "../../../config/firebaseConfig";
import { doc, getDoc } from "@firebase/firestore";
import useMediaQuery from "../../../utils/useMediaQuery";

const ProfileDetail = () => {
  const { user } = UserAuth();
  const [data, setData] = useState();

  useEffect(() => {
    const getUserById = async (userId) => {
      try {
        const userDocRef = doc(db, "user", userId);
        const userSnapshot = await getDoc(userDocRef);

        if (userSnapshot.exists()) {
          const user = userSnapshot.data();
          setData(user);
        } else {
          console.log("User not found");
        }
      } catch (error) {
        console.error("Error retrieving user:", error);
      }
    };
    if (user.uid) getUserById(user.uid);
  }, []);

  console.log(data);

  const sm = useMediaQuery("(min-width: 360px) and (max-width:600px)");
  const md = useMediaQuery("(min-width: 601px) and (max-width:1020px)");
  const lg = useMediaQuery("(min-width: 1024px) and (max-width:1400px)");
  const xl = useMediaQuery("(min-width: 1401px)");

  const generatedProps = {
    // generated props here
    user,
    data,

    sm,
    md,
    lg,
    xl,
  };
  return <ProfileDetailView {...generatedProps} />;
};

export default ProfileDetail;
