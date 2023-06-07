import React from "react";
import HomeView from "./Home.view";
import { UserAuth } from "../../context/AuthContext";

const Home = () => {
  const { user, logout } = UserAuth();
  const handleLogOut = async () => {
    await logout();
  };
  const generatedProps = {
    // generated props here
    handleLogOut,
    user,
  };
  return <HomeView {...generatedProps} />;
};

export default Home;
