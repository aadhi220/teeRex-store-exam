import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function Header({ searchQuery, setSearchQuery }) {
  const wishlist = useSelector((state) => state.wishlistReducer);
  const cart = useSelector((state) => state.cartReducer);
  const location = useLocation();

  return (
    <>
      <div className="navbar sticky top-0 bg-base-300 px-10 z-50">
        <Link to={"/"} className="flex-1">
          <span className="btn btn-ghost text-xl">TeeRex</span>
        </Link>
        <div className="flex-none gap-2">
          {location.pathname === "/" && (
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery || ""}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
          )}
          <Link
            to={"/cart"}
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {cart?.length}
              </span>
            </div>
          </Link>
          <div>
            {" "}
            <Link
              to={"/wishlist"}
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle scale-110"
            >
              <div className="indicator">
                <i className="fa-solid fa-heart "></i>
                <span className="badge badge-sm  indicator-item">
                  {wishlist?.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
