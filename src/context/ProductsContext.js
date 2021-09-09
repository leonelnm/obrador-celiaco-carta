import React, { useState } from "react";

const ProductsContext = React.createContext();

export function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, loading, setLoading }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContext;
