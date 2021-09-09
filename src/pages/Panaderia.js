import React from "react";
import { useGlobalProduct } from "hooks/useGlobalProduct";
import Product from "components/productCard/Product";
import Loading from "components/loader/Loading";

export const Panaderia = () => {
  const { panaderia, loading } = useGlobalProduct();

  return (
    <section>
      {loading ? (
        <Loading />
      ) : (
        panaderia.map((p) => {
          return (
            <Product
              key={p.id}
              imgUrl={p.url}
              name={p.name}
              price={p.price}
              content={p.content}
            />
          );
        })
      )}
    </section>
  );
};
