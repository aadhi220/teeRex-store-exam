import React from "react";
import { addToWishList } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";

function ProductCard({ product, index, dispatch }) {
  return (
    <>
      <div
        key={index}
        className="card relative w-[20rem] bg-base-100 shadow-xl hover:shadow-2xl hover:scale-[1.01]"
      >
        <div className="h-[15rem] flex justify-center items-center  ">
          <img
            className="h-full object-cover"
            src={product?.image}
            alt="Shoes"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title truncate">{product.title}</h2>
          <p>
            <b>$</b>
            {product?.price}
          </p>
          <p className=" truncate">{product.description}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => dispatch(addToCart(product))}
              className="btn btn-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <button
          onClick={() => dispatch(addToWishList(product))}
          className="  absolute  btn w-[3rem] rounded-full top-[1rem] right-[1rem]"
        >
          <i class="fa-solid fa-heart fa-xl text-slate-600"></i>
        </button>
      </div>
    </>
  );
}

export default ProductCard;
