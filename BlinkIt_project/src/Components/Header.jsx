import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../slice/BlinkitSlice";
export default function Header() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.apiKey.cart);
  return (
    <>
      <header>
        <div
          className={`backGround ${show && "onBackground"}`}
          onClick={() => setShow(false)}
        ></div>
        <div className={`toggleButton ${show && "on"}`}>
          <div className="nameplate1">
            My Cart
            <i className="fas fa-xmark" onClick={() => setShow(false)}></i>
          </div>
          {cart.length > 0 && (
            <>
              <div className="products">
                <div className="line">
                  <i class="fa-regular fa-clock"></i>
                  Delivery in 8 minutes
                </div>
                <p className="itemCount">
                  shipment of {cart.reduce((sum, el) => el.count + sum, 0)} item{" "}
                </p>
                <div className="delivery">
                  {cart.map((el, index) => {
                    return (
                      <div key={index}>
                        <div className="product">
                          <div className="product-img">
                            <img src={el.image} alt={el.name} />
                          </div>
                          <div className="product-contain">
                            <h6>{el.name}</h6>
                            <p>{el.weight}</p>
                            <font>₹{el.price}</font>
                          </div>
                          <div className="product-button">
                            <button className="add-button">
                              <button
                                onClick={() => dispatch(removeCart(el))}
                                className="add"
                              >
                                -
                              </button>
                              {el.count}
                              <button
                                className="add"
                                onClick={() => dispatch(addCart(el))}
                              >
                                +
                              </button>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="bill"></div>
              </div>
              <div className="products">
                <div className="line">Bill Detail</div>
                <div className="itemDetail">
                  <p>Item total</p>
                  <p>{`₹ ${cart.reduce(
                    (sum, el) => el.count * parseInt(el.price) + sum,
                    0
                  )}`}</p>
                </div>
                <div className="itemDetail">
                  <p>Delivery charge</p>
                  <p>{`₹ 25`}</p>
                </div>
                <div className="itemDetail">
                  <p>Handling charge</p>
                  <p>{`₹ 4`}</p>
                </div>
                <div className="itemDetail">
                  <p>
                    <b> Grand Total </b>
                  </p>
                  <p>
                    <b>{`₹ ${cart.reduce(
                      (sum, el) => el.count * parseInt(el.price) + sum,
                      29
                    )} `}</b>
                  </p>
                </div>
              </div>

              <div className="products-Btn">
              <p>
              <b>{`₹ ${cart.reduce(
              (sum, el) => el.count * parseInt(el.price) + sum,
               29
              )} `}</b> <br />
              Total
               </p>
              </div>
            </>
          )}
        </div>
        <div className="image">
          <img
            src="https://clevertap.com/wp-content/uploads/2023/08/blinkit-logo_casestudy.png"
            alt=""
          />
        </div>
        <div className="inp">
          <div className="inp1">
            <h1 style={{ fontWeight: "bolder", fontSize: "18px" }}>
              Delivery in 9 minutes
            </h1>
            <p>Bapa Sitaram Chowk, 7Q6J+8Q7</p>
          </div>
          <div className="inp2">
            <i className="fas fa-search"></i>
            <input
              className="search-input"
              type="text"
              placeholder='Search "items"'
            />
          </div>
        </div>
        <div className="btns">
          <button className="btn">Login</button>
          <button className="btn2" onClick={() => setShow(true)}>
            <i className="fa-solid fa-cart-shopping"></i>{" "}
            {cart.length > 0
              ? `${cart.reduce(
                  (sum, el) => el.count + sum,
                  0
                )} items ₹${cart.reduce(
                  (sum, el) => el.count * parseInt(el.price) + sum,
                  0
                )}`
              : "MyCart"}
          </button>
        </div>
      </header>
      <nav>
        <div className="nav">
          <a href="">Vegetables & Fruits</a>
          <a href="">Dairy & Breackfast</a>
          <a href="">Munchies</a>
          <a href="">Cold Drinks & Juices</a>
          <a href="">Intant & Frozen Food</a>
          <a href="">Tea, Coffee & Health Drinks</a>
          <a href="">More</a>
        </div>
      </nav>
    </>
  );
}
