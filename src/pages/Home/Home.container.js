import React from "react";
import HomeView from "./Home.view";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await logout();
    navigate("/login");
  };
  const generatedProps = {
    // generated props here
    handleLogOut,
    user,
  };
  return <HomeView {...generatedProps} />;
};

export default Home;
