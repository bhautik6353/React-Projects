import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/ProductNav.css";

export default function ProductNav() {
  const sidebar = [
    { img: "https://cdn.grofers.com/app/images/category/cms_images/icon/922_1643384380004.png", name: "Milk",navigate:"/" },
    { img: "https://cdn.grofers.com/app/images/category/cms_images/icon/953_1657599742631.png", name: "Bread",navigate:"/bread" },
    { img: "https://cdn.grofers.com/app/images/category/cms_images/icon/954_1680251634382.png", name: "Flakes & Kids Cereals",navigate:"/flakes" },
    { img: "https://cdn.grofers.com/app/images/category/cms_images/icon/614_1680251576771.png", name: "Muesli & Granola",navigate:"/muesli" },
    { img: "https://cdn.grofers.com/app/images/category/cms_images/icon/614_1680251576771.png", name: "Oats" ,navigate:"/oats"},
    { img: "https://cdn.grofers.com/app/images/category/cms_images/icon/923_1643384369257.png", name: "Paneer & Tofu" ,navigate:"/paneer"},
    { img: "https://cdn.grofers.com/app/images/category/cms_images/icon/123_1643384414434.png", name: "Curd & Yogurt" ,navigate:"/curd"},
    { img: "https://cdn.grofers.com/app/images/category/cms_images/icon/952_1657599773117.png", name: "Butter & More" ,navigate:"/butter"},
    { img: "https://cdn.grofers.com/app/images/category/cms_images/icon/2253_1694001802103.png", name: "Cheese" ,navigate:"/cheese"},
    { img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1092_1643384330629.png", name: "Cream & Whitener" ,navigate:"/cream"},
    { img: "https://cdn.grofers.com/app/images/category/cms_images/icon/130_1643384401123.png", name: "Condensed Milk" ,navigate:"/condensedmilk"},
    { img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1140_1643384951835.png", name: "Vermicelli" ,navigate:"/vermicelli"},
    { img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1295_1643445863467.png", name: "Poha, Daliya & Other Grains" ,navigate:"/poha"},
    { img: "https://cdn.grofers.com/app/images/category/cms_images/icon/644_1690196367179.png", name: "Peanut Butter" ,navigate:"/peanut"},
    { img: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1700735371138-2", name: "Energy Bars" ,navigate:"/energy"},
    { img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1184_1661407202472.png", name: "Lassi, Shakes & More" ,navigate:"/lassi"},
    { img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1612_1666261789562.png", name: "Breakfast Mixes" ,navigate:"/breakfast"},
    { img: "https://cdn.grofers.com/app/images/category/cms_images/icon/609_1695366756108.png", name: "Honey & Chyawanprash" ,navigate:"/honey"},
    { img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1425_1643613254262.png", name: "Batter" ,navigate:"/batter"},
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  

  return (
<nav className="navbar sidenav">
  {sidebar.map((item, index) => (
    <div
      key={item.name || index}
      className={`card-side ${selectedIndex === index ? "active" : ""}`}
      onClick={() => {
        setSelectedIndex(index);
        index == 0 ? navigate("/") : navigate(item.navigate);
      }}
    >
      {item.img && <img src={item.img} alt={item.name || "No description"} className="product-img" />}
      <h1 className="navbarname">{item.name || "No Name"}</h1>
    </div>
  ))}
</nav>

  );
}
