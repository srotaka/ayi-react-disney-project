import React from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "../components/commons/NavigationBar";
import Home from "../components/commons/Home";
import MyFooter from "../components/commons/MyFooter";
import CharacterFetchData from './../components/characters/CharacterFetchData';
import Login from "../components/login/Login";

const AppRoutes = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharacterFetchData />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <MyFooter />
    </div>
  );
};

export default AppRoutes;
