import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";

import { GoogleOAuthProvider } from "@react-oauth/google";

const Home = React.lazy(() => import("./pages/Home"));
const Documents = React.lazy(() => import("./pages/Documents"));
const Signup = React.lazy(() => import("./pages/Signup"));
// const {Login} = React.lazy(() => import("./components/Login"));
const Profile = React.lazy(() => import("./pages/Profile"));

function App() {
  const GOOGLE_CLIENT_ID =
    "292703328960-m2qktft8h30p7snjpn1ogepmks2nq39a.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <React.Suspense fallback={<>Loading...</>}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/signin" element={<Signup />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/myprofile" element={<Profile />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </React.Suspense>
    </GoogleOAuthProvider>
  );
}

export default App;
