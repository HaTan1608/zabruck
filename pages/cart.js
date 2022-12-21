/* eslint-disable */
import Link from "next/link";
import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import axios from "axios";
import { toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdDeleteForever } from "react-icons/md";
import Cookies from "js-cookie";

function CartScreen() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  // const removeItemHandler = (item) => {
  //   dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  // };
  const updateCartHandler = async (item, qty) => {
    const quantity = Number(qty);
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      return toast.error("Sorry. Product is out of stock");
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
    toast.success("Product updated in the cart");
  };

  const checkoutHandler = (e) => {
    // e.preventDefault();
    // if (!selectedPaymentMethod) {
    //   return toast.error("Payment method is required");
    // }
    // dispatch({ type: "SAVE_PAYMENT_METHOD", payload: selectedPaymentMethod });
    Cookies.set(
      "cart",
      JSON.stringify({
        ...cartItems,
        // paymentMethod: selectedPaymentMethod,
      })
    );

    router.push("/placeorder");
  };

  return (
    <Layout title="Shopping Cart">
      <div className="cart">
        <div className="container">
          {cartItems?.length > 0 && (
            <div className="cart__link">
              <Link href="/">Tiếp tục mua sắm</Link>
            </div>
          )}
          <div className="row">
            {cartItems?.length > 0 ? (
              <>
                <div className="col-10 m-12 s-12">
                  <div className="row cart__title m-0">
                    <div className="col-6 cart__title__product m-0">
                      SẢN PHẨM
                    </div>
                    <div className="col-6 cart__title__atc m-0 ">
                      <span>GIÁ</span>
                      <span>SỐ LƯỢNG</span>
                      <span>THÀNH TIỀN</span>
                    </div>
                  </div>
                  {cartItems.map((item) => (
                    <div className="row" key={item.product}>
                      <div className="col-6 cart__infomation">
                        <div className="cart__infomation__image">
                          <LazyLoadImage src={item.image} />
                        </div>
                        <div className="cart__infomation__name">
                          {item.name}
                        </div>
                      </div>
                      <div className="col-6 cart__infomation">
                        <div className="cart__infomation__price">
                          {item.price.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                          })}
                          <span className="cart__infomation__price__dollor">
                            {" "}
                            VNĐ
                          </span>
                        </div>
                        <div className="cart__infomation__qty ">
                          <span className="ctrl cart__infomation__stepper">
                            <div
                              className="ctrl__button ctrl__button--decrement"
                              onClick={() => updateCartHandler(item, -1)}
                            >
                              &ndash;
                            </div>
                            <div className="ctrl__counter">
                              <input
                                className="ctrl__counter-input"
                                type="text"
                                id={`qty-input-${item.product}`}
                                defaultValue={item.qty}
                                onChange={(e) =>
                                  dispatch({
                                    type: "CART_ADD_ITEM",
                                    payload: {
                                      ...item,
                                      quantity: Number(e.target.value),
                                    },
                                  })
                                }
                              />
                            </div>
                            <div
                              className="ctrl__button ctrl__button--increment "
                              onClick={() => updateCartHandler(item, 1)}
                            >
                              +
                            </div>
                          </span>
                        </div>
                        <div className="cart__infomation__total">
                          {(item.price * item.qty).toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </div>
                        <div className="cart__infomation__delete">
                          <MdDeleteForever
                            size={30}
                            onClick={() => removeFromCartHandler(item)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-2 m-12 s-12">
                  <div className="cart__checkout">
                    <h2 className="cart__checkout__heading">TỔNG TIỀN </h2>

                    <div className="cart__checkout__total">
                      {cartItems
                        .reduce((a, c) => a + c.price * c.qty, 0)
                        .toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      <span className="cart__infomation__price__dollor">
                        {" "}
                        VNĐ
                      </span>
                    </div>
                    <div className="cart__checkout__qty">
                      {" "}
                      ( {cartItems.reduce((a, c) => a + c.qty, 0)} sản phẩm ){" "}
                    </div>
                    <div className="cart__checkout__button">
                      <button
                        type="button"
                        onClick={checkoutHandler}
                        className="btn-dark"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* <div className="cart__empty">
                  <LazyLoadImage src={empty.logo} alt={empty.logo} />
                </div> */}
                <div className="cart__empty__link">
                  <Link href="/">Tiếp tục mua sắm</Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
