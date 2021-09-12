import React from "react";
import style from "./ProductCard.module.css";

function Product({ id, imgUrl, name, price, content, categories }) {
  return (
    <article className={style.product}>
      <div className={style.image}>
        <img className={style.productImg} 
            alt={name} height={100}
            src={imgUrl} loading="lazy" />
      </div>
      <div className={style.info}>
        <h1 className={style.title}>{name}</h1>
        {price && <p className={style.price}>{price.replace(".", ",")}€</p>}
        <div className={style.content}>
          <p>{content[0]}</p>
          {/* <p>{categories.join(" - ")}</p> */}
        </div>
      </div>
    </article>
  );
}

export default React.memo(Product, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
