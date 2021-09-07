import React from "react";
import { Link } from "wouter";
import { CATEGORIES } from "utils/categoriesList";

import style from "components/navbar/Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      {CATEGORIES.map((c) => {
        const { path: url, label_es } = c;
        return <Link key={`nav${c.filter}`} href={url}>{label_es}</Link>;
      })}
    </nav>
  );
};
