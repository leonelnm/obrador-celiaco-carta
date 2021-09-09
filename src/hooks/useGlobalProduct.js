import { useContext } from "react";
import ProductsContext from "context/ProductsContext";

export const useGlobalProduct = () => {
  const { products, loading } = useContext(ProductsContext);
  return {
    panaderia: products.panaderia,
    bolleria: products.bolleria,
    pasteleria: products.pasteleria,
    temporada: products.temporada,
    loading,
  };
};
