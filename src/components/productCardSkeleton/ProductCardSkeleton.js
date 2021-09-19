import React from "react";
import style from "./Skeleton.module.css";

export const ProductCardSkeleton = () => {
  return (
    <article className={style.product}>
      <div className={style.image}></div>
      <div className={style.info}>
        <div className={style.title}></div>
        <div className={style.content}></div>
      </div>
    </article>
  );
};
