import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Body = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const prod = await fetch("https://dummyjson.com/products");
    const json = await prod.json();
    console.log(json);
    setProduct(json.products);
  };
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {product.map((item) => (
        <ProductCard
        key={item.id}
        product={item}/>
      ))}
    </div>
  );
};

export default Body;
