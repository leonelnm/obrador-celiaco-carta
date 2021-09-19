import React from "react";
import Product from "components/productCard/Product";
import { ProductCardSkeleton } from "components/productCardSkeleton/ProductCardSkeleton";

import styles from "./ProductList.module.css"

export const ProductList = ({ list, loading }) => {

  const load = Array.from(Array(10).keys())

  return (
    <section className={styles.grid}>
      {loading ? (
        load.map(l => <ProductCardSkeleton key={l}/>)
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
