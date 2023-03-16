import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Layout from "../../components/Layout";
import Product from "../../models/Product";
import db from "../../utils/db";
import { Store } from "../../utils/Store";

export default function ProductScreen(props) {
  const { product } = props;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  if (!product) {
    return <Layout title="Produt Not Found">Produt Not Found</Layout>;
  }

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return;
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };

  return (
    <Layout title={product.name}>
      <div className="product">
        <div className="product__imageInfo">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="product__imageInfo__image"
          />
          <div className="product__imageInfo__info">
            <h1 className="product__imageInfo__info__name">{product.name}</h1>
            {/* <div>
              {product.rating} of {product.numReviews} reviews
            </div> */}
            <div className="product__imageInfo__info__price">
              {product.price}&nbsp;$
            </div>

            <button
              className="btn-default"
              onClick={() => addToCartHandler(product)}
            >
              Add to cart
            </button>
            <div className="product__imageInfo__info__description">
              Description: {product.description}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
}
