/* eslint-disable */
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import Cookies from "js-cookie";
import React, { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Menu } from "@headlessui/react";
import "react-toastify/dist/ReactToastify.css";
import { Store } from "../utils/Store";
import DropdownLink from "./DropdownLink";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdShoppingCart } from "react-icons/md";
export default function Layout({ title, children }) {
  const { status, data: session } = useSession();
  const [openSearch, setOpenSearch] = useState(false);
  const [openToggle, setOpenToggle] = useState(false);
  const getToggle = () => {
    setOpenToggle(!openToggle);
  };
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  // const [cartItemsCount, setCartItemsCount] = useState(0);
  // useEffect(() => {
  //   setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  // }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };

  console.log("cate", cart.cartItems);
  return (
    <>
      <Head>
        <title>{title ? title + " - Amazona" : "Amazona"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="header">
        <header className="container">
          <nav className="header__container">
            <BsSearch
              className="search"
              onClick={() => setOpenSearch(!openSearch)}
            />
            {openSearch ? (
              <div
                className="navLayer zi-10"
                onClick={() => setOpenSearch(!openSearch)}
              ></div>
            ) : (
              ""
            )}
            <div
              className={
                openSearch
                  ? "header__search__small header__search__small--open"
                  : "header__search__small header__search__small--close"
              }
            >
              <SearchBox />
            </div>
            {/* <Link href="/">
              <Image
                width={80}
                height={80}
                alt="logo"
                // src="https://cdndev2.ntlogistics.vn/uploads/default/2022/12/01/e539c562d9d5490d88591ee406fe88ec/logozeb.jpeg"
              />
            </Link> */}
            <div className="header__right">
              <div className="header__right__cart__icon">
                <div className="wrapper">
                  <div className="icon">
                    <div className="tooltip mt-1  w-30 r-3">
                      {cart.cartItems &&
                        (cart.cartItems.length > 0 ? (
                          <>
                            <div className="header__cart__heading">
                              <div>Sản phẩm</div>
                              <div>Số lượng</div>
                            </div>
                            {cart.cartItems.map((item, index) => (
                              <div className="header__cart__items" key={index}>
                                <div className="header__cart__items__name">
                                  <LazyLoadImage
                                    src={item.image}
                                    alt={item.image}
                                  />
                                  <div className="header__cart__items__name--name">
                                    {item.name}
                                  </div>
                                </div>
                                <div>x{item.qty}</div>
                              </div>
                            ))}
                            <div className="header__cart__total">
                              <div className="header__cart__total__text">
                                Tổng tiền:
                              </div>
                              <div className="header__cart__total__price">
                                {cart.cartItems.reduce(
                                  (a, c) => a + c.price * c.qty,
                                  0
                                )}
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="header__cart__items__empty">
                            <LazyLoadImage
                              src={state.logoEmpty}
                              alt={state.logoEmpty}
                            />
                          </div>
                        ))}
                    </div>
                    {cart.cartItems &&
                      (cart.cartItems.length > 0 ? (
                        <div className="header__cart__count">
                          {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                        </div>
                      ) : (
                        ""
                      ))}
                    <Link href="/cart">
                      <MdShoppingCart size={30} color="#000" />
                    </Link>
                  </div>
                </div>
              </div>

              {status === "loading" ? (
                "Loading"
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-blue-600">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg ">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    {session.user.isAdmin && (
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/admin/dashboard"
                        >
                          Admin Dashboard
                        </DropdownLink>
                      </Menu.Item>
                    )}
                    <Menu.Item>
                      <a
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <Footer />
      </div>
    </>
  );
}
