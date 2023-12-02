import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { removefromWishlist } from "../redux/slices/wishlistSlice";

function wishList() {
  const items = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch();
  const handleWishlistCart = (item) => {
    dispatch(addToCart(item));
    dispatch(removefromWishlist(item.id));
  };

  return (
    <>
      <div className="min-h-[100vh]">
        <div className="w-full grid justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full px-1 py-5 md:px-5 gap-5">
          {items.length > 0 ? (
            items.map((product, index) => (
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
                      onClick={() => handleWishlistCart(product)}
                      className="btn btn-primary"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => dispatch(removefromWishlist(product.id))}
                      className="btn"
                    >
                      {" "}
                      <i class="fa-solid fa-trash fa-xl text-red-600"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Whish list is empty continue Shopping</p>
          )}
        </div>
      </div>
    </>
  );
}

export default wishList;
