import React, { useRef } from "react";
import { Link, useLocation } from "wouter";
import { CATEGORIES, CATEGORIES_INFO } from "utils/categoriesList";

import style from "components/navbar/Navbar.module.css";
import { useProducts } from "hooks/useProducts";

function Navbar() {
  // load products on context
  useProducts();

  const navbar = useRef(null)

  if(navbar !== null && navbar.current != null){
    console.log(navbar.current.getBoundingClientRect())
  }
  const name = style.navbar;
  console.log({name});

  const [currentLocation] = useLocation();
  console.log("ruta", currentLocation);

  return (
    <nav className={style.navbar} ref={navbar}>
      {CATEGORIES.map((name) => {
        const { path: url, label_es, filter} = CATEGORIES_INFO[name];
        const isActive = currentLocation === url ? style.activeLink : '';
        return (
          <Link key={`nav${filter}`} href={url} className={isActive}>
            {label_es}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar
