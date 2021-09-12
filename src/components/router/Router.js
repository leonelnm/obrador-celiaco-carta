import React from "react";
import { CATEGORIES, CATEGORIES_INFO } from "utils/categoriesList";
import { CATEGORY_COMPONENT } from "utils/componentList";
import { Route } from "wouter";

export const Router = () => {
  return (
    <>
      {CATEGORIES.map((name) => {
        const { path: url, component } = CATEGORIES_INFO[name];
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
