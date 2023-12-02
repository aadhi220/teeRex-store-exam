import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { emptyCart, removeFromCart } from "../redux/slices/cartSlice";

function Cart() {
  const [total, setTotal] = useState(0);
  const cartArray = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getCartTotal = () => {
    if (cartArray.length) {
      setTotal(cartArray.map((item) => item.price).reduce((p1, p2) => p1 + p2));
    } else {
      setTotal(0);
    }
  };

  const handleCart = () => {
    dispatch(emptyCart());
    alert("Order Successfully Placed...Thank you for Shopping with us!!");
    navigate("/");
  };

  useEffect(() => {
    getCartTotal();
  }, [cartArray]);

  return (
    <div className="text-black py-10 px-5">
      <div className="grid md:grid-cols-2  ">
        <div >
          {cartArray?.length > 0 ? (
            <table className="table">
              <thead>
                <th>Product Name</th>
                <th>Image</th>

                <th>Price</th>
                <th>Delete</th>
              </thead>
              <tbody>
                {cartArray.map((product, index) => (
                  <tr key={index}>
                    <td className="text-body">{product?.title}</td>
                    <td>
                      <img
                        style={{ width: "100px", height: "100px" }}
                        src={product?.image}
                        alt=""
                      />
                    </td>
                    <td className="text-body">{product?.price}</td>
                    <td>
                      <button
                        onClick={() => dispatch(removeFromCart(product.id))}
                        className="btn btn-light"
                      >
                        <i class="fa-solid fa-trash fa-xl text-red-600"></i>
                      </button>
                    </td>
                  </tr>
                ))}{" "}
              </tbody>
            </table>
          ) : (
            <div
              style={{ height: "60vh", width: "100%" }}
              className="w-full flex content-center flex-col items-center"
            >
              <img
                style={{ width: "300px", height: "300px" }}
                src="https://live-mmb-public.s3.ap-south-1.amazonaws.com/assets/img/empty-cart.png"
                alt=""
              />
              <h4 className="">Your Cart is Empty !</h4>
              <Link
                to={"/"}
                className="btn btn-primary mt-3"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
            </div>
          )}
        </div>
        <div >
          <div className="p-3 border rounded-xl ">
            <h4 className="text-center mb-3 font-semibold ">Cart Summary</h4>
            <hr />
            <h5 className="mt-3 mb-3">Total Products:{cartArray.length}</h5>
            <h5 className="mb-3">Total Amount: ${total}</h5>
            <div className="flex justify-center w-full">
              <button className="btn  btn-success" onClick={handleCart}>
                CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
