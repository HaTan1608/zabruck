import axios from "axios";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import ProductImage from "../components/ProductImage";
import ProductContents from "../components/ProductContents";
import Product from "../models/Product";
import db from "../utils/db";
import { Store } from "../utils/Store";

export default function Home({ products }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error("Sorry. Product is out of stock");
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });

    toast.success("Product added to the cart");
  };
  return (
    <Layout title="Home Page">
      <div className="row">
        {products
          ? products.length > 0
            ? products.map((product, index) => (
                <div className="col-3 m-4 s-6 xs-6 p-15" key={product.slug}>
                  <div className={`cities__body`}>
                    <div className="cities__body__image1">
                      <Link href={`/product/${product.slug}`}>
                        <ProductImage img={product.image} />
                      </Link>
                    </div>

                    <ProductContents
                      ratingStar={product.rating}
                      name={product.name}
                      price={product.price}
                      addCart={() => addToCartHandler(product._id, index)}
                    />
                  </div>
                </div>
              ))
            : ""
          : ""}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
