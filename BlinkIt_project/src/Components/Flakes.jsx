import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../slice/BlinkitSlice";
export default function Frakes() {
  const data = useSelector((state) => state.apiKey.data);
  useEffect(() => {
    console.log(data);
  }, [data]);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.apiKey.cart);
  return (
  <>
<div className="main-container">
<div className="nameplate">
<p>Buy Flakes & Kids Cereals Online</p>
</div>
{data &&
data.filter((item) => item.category === "flakes")
            .map((el, ind) => (
              <div className="product-card" key={ind}>
                <div className="product-image">
                  {<img src={el.image} alt="Super Crustless White Bread" />}
                </div>
                <h3 id="productname" className="product-name">{el.name}</h3> 
                <p className="product-weight">{el.weight}</p>                 
                <p className="product-price">₹{el.price}</p> 
                {cart.find((item) => el.id === item.id) ? (
                  <button className="add-button">
                    <button onClick={() => dispatch(removeCart(el))} className="add" >-</button>
                    {cart.find((item) => el.id === item.id).count}
                    <button className="add" onClick={() => dispatch(addCart(el))}>+</button>
                  </button>
                ) : (
                  <button className="add-button"  onClick={() => dispatch(addCart(el))}
                  >
                    Add
                  </button>
                )}              
</div>
))}
</div>
  </>
  )
}
