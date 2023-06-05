import React from "react";

const Home = (props) => {
  const { user, handleLogOut } = props;
  return (
    <div>
      <h1>Home Screen</h1>
      {user && <button onClick={handleLogOut}>logout</button>}
    </div>
  );
};

export default Home;
