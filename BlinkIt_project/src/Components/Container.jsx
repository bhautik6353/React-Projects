import React, { useEffect } from "react";
import ProductNav from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Milk from "./Milk";
import { useDispatch } from "react-redux";
import { fetchCart, fetchData } from "../slice/BlinkitSlice";
import Bread from "./Bread";
import Flakes from'./Flakes';
import Muesli from "./Muesli";
import Oats from "./Oats";
import Paneer from "./Paneer";
import Curd from "./Curd";
import Butter from "./Butter";
import Cheese from "./Cheese";
import Cream from "./Cream";
import CondensedMilk from "./CondensedMilk";
import Vermicelli from "./Vermicelli";
import Poha from "./Poha";
import Peanut from "./Peanut";
import Energy from "./Energy";
import Lassi from "./Lassi";
import Breakfast from "./Breakfast";
import Honey from "./Honey";
import Batter from "./Batter";

export default function ProductContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchCart());
  }, []);
  return (
    <div className="productContainer">
      <ProductNav />
      <Routes>
      <Route path="/" element={<Milk />} />
      <Route path="/bread" element={<Bread />} />
      <Route path="/flakes" element={< Flakes/>} />
      <Route path="/muesli" element={< Muesli/>} />
      <Route path="/oats" element={< Oats/>} />
      <Route path="/paneer" element={< Paneer/>} />
      <Route path="/curd" element={< Curd/>} />
      <Route path="/butter" element={< Butter/>} />
      <Route path="/cheese" element={< Cheese/>} />
      <Route path="/cream" element={< Cream/>} />
      <Route path="/condensedmilk" element={< CondensedMilk/>} />
      <Route path="/vermicelli" element={< Vermicelli/>} />
      <Route path="/poha" element={< Poha/>} />
      <Route path="/peanut" element={< Peanut/>} />
      <Route path="/energy" element={< Energy/>} />
      <Route path="/lassi" element={< Lassi/>} />
      <Route path="/breakfast" element={< Breakfast/>} />
      <Route path="/honey" element={< Honey/>} />
      <Route path="/batter" element={< Batter/>} />
      </Routes>
    </div>
  );
}
