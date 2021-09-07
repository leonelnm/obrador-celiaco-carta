import { useEffect, useState } from "react";
import { fetchProducts } from "firebase/client";
import { Navbar } from "components/navbar/Navbar";

import styles from "styles/Home.module.css"
import { Router } from "components/router/Router";

function App() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts().then(response => {
      console.log({response});
      setProducts(response)
    });
  }, []);

  //load listProducts on context


  return (
    <>
      <Navbar/>
      <Router/>
      {/* <main>
        <section className={styles.productGrid}>
          {
          products.map(p => {
            return <Product
                imgUrl = {p.url}
                name = {p.name}
                price = {p.price}
                content = {p.content}
              />
          })
        }
        </section>
      </main> */}
      
    </>
  );
}

export default App;
