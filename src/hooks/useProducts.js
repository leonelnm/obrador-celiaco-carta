import ProductsContext from "context/ProductsContext";
import { fetchProducts } from "firebase/client";
import { useContext, useEffect } from "react";
import { CATEGORIES_FILTER } from "utils/categoriesList";

export const useProducts = () => {
  const { products, setProducts, loading, setLoading } = useContext(ProductsContext);

  useEffect(() => {
    fetchProducts().then((response) => {

      // console.log(JSON.stringify(response));

      getProductsFiltered(response).then(allProducts => {
        setProducts(allProducts)
        setLoading(false)
      })
    });
  }, [setProducts, setLoading]);

  return { products, loading };
};

const getProductsFiltered = async (products) => {

  const panaderia = products.filter( p => filterByFilter(p.categories, CATEGORIES_FILTER.PANADERIA))
  const bolleria = products.filter( p => filterByFilter(p.categories, CATEGORIES_FILTER.BOLLERIA))
  const pasteleria = products.filter( p => filterByFilter(p.categories, CATEGORIES_FILTER.PASTELERIA))
  const temporada = products.filter( p => filterByFilter(p.categories, CATEGORIES_FILTER.TEMPORADA))

  return {
    panaderia : orderByName(panaderia),
    bolleria : orderByName(bolleria),
    pasteleria : orderByName(pasteleria),
    temporada : orderByName(temporada)
  }
}

const orderByName = (list)=>{
  return list.sort((a, b) => a.name.localeCompare(b.name));
}

const filterByFilter = (categories, filterList) => {
  let response = false;

  for (const cat of categories) {
    if(filterList.includes(cat.toLowerCase())){
      response = true;
      break;
    }
  }

  return response;
}