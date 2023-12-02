import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getAllProductsApi } from "../Services/AllApi";
import { useDispatch } from "react-redux";

function Home({ searchQuery }) {
  const [allProducts, setAllProducts] = useState([]);
  const dispatch = useDispatch();

  const getAllProducts = async () => {
    try {
      const result = await getAllProductsApi();
      if (result.status === 200) {
        setAllProducts(result.data);
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, [searchQuery]);

  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="min-h-[100vh]">
        <div className="w-full grid justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full px-1 py-5 md:px-5 gap-5">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} dispatch={dispatch} />
            ))
          ) : (
            <p>No products found for the search query: {searchQuery}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
