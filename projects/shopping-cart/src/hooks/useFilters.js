import { FiltersContext } from "../context/filters";
import { products as initialProducts } from "../mocks/products.json";
import { useContext, useState } from "react";

export function useFilters() {
  const [products, setProducts] = useState(initialProducts);
  //const [filters, setFilters] = useState({ category: "all", minPrice: 0 });

  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return { filterProducts, setFilters };
}
