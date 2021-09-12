import React from "react";
import { Helmet } from "react-helmet";
import { useGlobalProduct } from "hooks/useGlobalProduct";
import { ProductList } from "components/productList/ProductList";
import { CATEGORIES_INFO } from "utils/categoriesList";

export const Panaderia = () => {
  const { title } = CATEGORIES_INFO.panaderia;
  const { panaderia, loading } = useGlobalProduct();
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <ProductList list={panaderia} loading={loading} />
    </>
  );
};
