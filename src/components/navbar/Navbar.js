import React from "react";
import { Link } from "wouter";
import { CATEGORIES, CATEGORIES_INFO } from "utils/categoriesList";

import style from "components/navbar/Navbar.module.css";
import { useProducts } from "hooks/useProducts";

function Navbar() {
  // load products on context
  useProducts();

  return (
    <nav className={style.navbar}>
      {CATEGORIES.map((name) => {
        const { path: url, label_es, filter} = CATEGORIES_INFO[name];
        return (
          <Link key={`nav${filter}`} href={url}>
            {label_es}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar
