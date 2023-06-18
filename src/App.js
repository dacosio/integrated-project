<<<<<<< HEAD
import React from "react";
import { Button } from "./components/base/Button/Button";
import { Pagetabs } from "./components/module/pagetabs/pagetabs";
import { Textinput } from "./components/base/Input/Input"
=======
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import loadable from "@loadable/component";
import Layout from "./components/layout/Layout/Layout";
import ProtectedRoute from "./components/layout/ProtectedRoute/ProtectedRoute";
import TestComponents from "./TestingComponents/TestComponents";
import "./utils/variable.css";

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
const AddListing = loadable(() => import("./pages/Listing/AddListing"));
const ListingDetail = loadable(() => import("./pages/Listing/ListingDetail"));

function App() {
  // const [value, setValue] = useState("");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="listing">
            <Route
              path="add"
              element={
                <ProtectedRoute>
                  <AddListing />
                </ProtectedRoute>
              }
            />
            <Route
              path=":listingId"
              element={
                <ProtectedRoute>
                  <ListingDetail />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />

          <Route path="transaction">
            <Route
              index
              element={
                <ProtectedRoute>
                  <TransactionList />
                </ProtectedRoute>
              }
            />
            <Route
              path=":transactionId"
              element={
                <ProtectedRoute>
                  <TransactionDetail />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="user">
            <Route
              index
              element={
                <ProtectedRoute>
                  <ProfileDetail />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="testComponent" element={<TestComponents />} />

          {/* Catch all - replace with 404 Not Found page if preferred */}
          {/* Catch all - replace with 404 Not Found page if preferred */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
