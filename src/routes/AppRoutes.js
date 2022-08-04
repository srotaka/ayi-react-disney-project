import React from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "../components/commons/NavigationBar";
import Home from "../components/commons/Home";
import MyFooter from "../components/commons/MyFooter";
import CharacterFetchData from './../components/characters/CharacterFetchData';
import Login from "../components/login/Login";
import UserFetchData from "../components/users/UserFetchData";
import Farewell from "../components/commons/Farewell";
import Register from "../components/login/Register";
import Profile from "../components/users/Profile";
import ScrollToTop from "../components/commons/ScrollToTop"

const AppRoutes = () => {
  return (
    <div>
      <NavigationBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farewell" element={<Farewell />} />
        <Route path="/characters" element={<CharacterFetchData />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<UserFetchData />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <MyFooter />
    </div>
  );
};

export default AppRoutes;
