import React from "react";
import { Helmet } from "react-helmet";
import { ProductList } from "components/productList/ProductList";
import { useGlobalProduct } from "hooks/useGlobalProduct";
import { CATEGORIES_INFO } from "utils/categoriesList";

export const Temporada = () => {
  const { title } = CATEGORIES_INFO.temporada;
  const { temporada, loading } = useGlobalProduct();
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <ProductList list={temporada} loading={loading} />
    </>
  );
};
