import React from "react";
import Loading from "components/loader/Loading";
import Product from "components/productCard/Product";

export const ProductList = ({ list, loading }) => {
    console.log("render");
  return (
    <section>
      {loading ? (
        <Loading />
      ) : (
        list.map((p) => {
          return (
            <Product
              key={p.id}
              id={p.id}
              imgUrl={p.url}
              name={p.name}
              price={p.price}
              content={p.content}
              categories={p.categories}
            />
          );
        })
      )}
    </section>
  );
};
