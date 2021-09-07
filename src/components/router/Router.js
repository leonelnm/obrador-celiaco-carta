import React from "react";
import { CATEGORIES } from "utils/categoriesList";
import { CATEGORY_COMPONENT } from "utils/componentList";
import { Route } from "wouter";

export const Router = () => {
  return (
    <>
      {CATEGORIES.map((c) => {
        const { path: url, component } = c;
        return (
          <Route
            key={`route-${component}`}
            path={url}
            component={CATEGORY_COMPONENT[component]}
          />
        );
      })}
    </>
  );
};
