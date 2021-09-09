import React from "react";
import { Link } from "wouter";
import { CATEGORIES } from "utils/categoriesList";

import style from "components/navbar/Navbar.module.css";
import { useProducts } from "hooks/useProducts";

export const Navbar = () => {

  // load products on context
  useProducts()

  return (
    <nav className={style.navbar}>
      {CATEGORIES.map((c) => {
        const { path: url, label_es } = c;
        return <Link key={`nav${c.filter}`} href={url}>{label_es}</Link>;
      })}
    </nav>
  );
};
