import React from "react";
import Navbar from "./Navbar/Navbar";
import Content from "./ContentPage/Content";
import Contact from "./ContactPage/Contact";
import AboutPage from "./AboutPage/AboutPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Member from "./AboutPage/Member/Member";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Band = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Content></Content> */}
        <Routes>
          <Route path="/" element={<Content />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/member/:id" element={<Member />}></Route>
          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Band;
