import Loading from 'components/loader/Loading';
import Product from 'components/productCard/Product';
import { useGlobalProduct } from 'hooks/useGlobalProduct';
import React from 'react'

export const Pasteleria = ({filter}) => {
    const { pasteleria, loading } = useGlobalProduct();

  return (
    <section>
      {loading ? (
        <Loading />
      ) : (
        pasteleria.map((p) => {
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
  )
}
