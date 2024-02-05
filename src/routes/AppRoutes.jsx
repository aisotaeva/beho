import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Leyout from "../components/Leyout/Leyout";
import ProductsPage from "../pages/Products/ProductsPage";
import Home from "../pages/Home/Home";
import Content from "../pages/Content/Content";
import ColorFullBtn from "../components/ColorFullBtn/ColorFullBtn";
import Favorite from "../pages/Favorite/Favorite";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Leyout />}>
          <Route index element={<Home/>} />
          <Route path="/products" element={<h1>hello world</h1>} />
          <Route path="/content/:id" element={<Content/>}/>
          <Route path="/favorite" element={<Favorite/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
