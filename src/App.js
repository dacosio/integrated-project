import React, { useState } from "react";
// import FirebaseSample from "./config/FirebaseSample";
import { Routes, Route, Navigate } from "react-router-dom";
import loadable from "@loadable/component";
import Yuki from "./TestingComponents/Yuki";
import Don from "./TestingComponents/Don";
import Cylvia from "./TestingComponents/Cylvia";
import Yuhwan from "./TestingComponents/Yuhwan";
import Layout from "./components/layout/Layout/Layout";

// Lazy loading and suspense
const Home = loadable(() => import("./pages/Home"));
const ProfileDetail = loadable(() => import("./pages/Profile/ProfileDetail"));
const Login = loadable(() => import("./pages/Auth/Login"));
const Register = loadable(() => import("./pages/Auth/Register"));
const ForgotPassword = loadable(() => import("./pages/Auth/ForgotPassword"));
const TransactionList = loadable(() =>
  import("./pages/Transactions/TransactionList")
);
const TransactionDetail = loadable(() =>
  import("./pages/Transactions/TransactionDetail")
);

function App() {
  // const [value, setValue] = useState("");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />

          <Route path="transaction">
            <Route index element={<TransactionList />} />
            <Route path=":transactionId" element={<TransactionDetail />} />
          </Route>

          <Route path="user">
            <Route index element={<ProfileDetail />} />
          </Route>

          {/* Catch all - replace with 404 Not Found page if preferred */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>

      <>
        <Yuki />
        <Don />
        <Cylvia />
        <Yuhwan />
      </>
    </div>
  );
}

export default App;
