import React from "react";
import HomeView from "./Home.view";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../utils/useMediaQuery";

const Home = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await logout();
    navigate("/login");
  };

  const data = [
    { id: 1, lat: 49.225, long: -123.107, location: "Langara" },
    { id: 2, lat: 49.19, long: -123.122, location: "Bridgeport" },
    { id: 3, lat: 49.19, long: -123.122, location: "Bridgeport" },
    { id: 4, lat: 49.19, long: -123.122, location: "Bridgeport" },
    { id: 5, lat: 49.225, long: -123.107, location: "Langara" },
    { id: 6, lat: 49.19, long: -123.122, location: "Bridgeport" },
    { id: 7, lat: 49.19, long: -123.122, location: "Bridgeport" },
    { id: 8, lat: 49.19, long: -123.122, location: "Bridgeport" },
  ];

  const lg = useMediaQuery("(min-width: 800px)");
  const md = useMediaQuery("(min-width: 600px) and (max-width: 799px)");
  const sm = useMediaQuery("(min-width: 360px) and (max-width: 599px");

  const columns = sm ? 2 : md ? 3 : lg ? 4 : 2;

  const generatedProps = {
    // generated props here
    handleLogOut,
    user,
    data,
    columns,
    lg,
  };
  return <HomeView {...generatedProps} />;
};

export default Home;
