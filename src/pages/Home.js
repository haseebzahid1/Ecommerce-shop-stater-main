import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  // console.log(filteredProducts)

  return <section className="py-16">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-colos-4 xl:grid-cols-5 gap-[30px]
      max-w-sm mx-auto md:max-w-none md:mx-0">
        {filteredProducts.map(product => {
         return (
          <div className="w-full h-[300px] bg-pink-200" key={product.id}>
            {product.title}
          </div>
         )
          
        })}
      </div>
    </div>
  </section>;
};

export default Home;
