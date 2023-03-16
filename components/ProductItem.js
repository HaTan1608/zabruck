import Link from "next/link";
import React from "react";

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="cardItem">
      <Link href={`/product/${product.slug}`} className="cardItemImage">
        <img src={product.images[0].image} alt={product.name} />
      </Link>
      <div className="cardItemImageInfo">
        <Link href={`/product/${product.slug}`}>
          <h2 className="cardItemImageInfoName">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button
          className="primary-button"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
