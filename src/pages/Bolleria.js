import React from "react";
import { Helmet } from "react-helmet";
import { ProductList } from "components/productList/ProductList";
import { useGlobalProduct } from "hooks/useGlobalProduct";
import { CATEGORIES_INFO } from "utils/categoriesList";

function Bolleria() {
  const { title, description } = CATEGORIES_INFO.bolleria;
  const { bolleria, loading } = useGlobalProduct();

  window.scrollTo(0, 0 );

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
      </Helmet>
      <ProductList list={bolleria} loading={loading} />
    </>
  );
}

export default Bolleria;
