import Navbar from "components/navbar/Navbar";
import { Router } from "components/router/Router";
import { ProductsContextProvider } from "context/ProductsContext";

import styles from "./styles/Home.module.css"

function App() {
  return (
    <>
      <ProductsContextProvider>
        <Navbar />
        <main className={styles.productGrid}>
          <Router />
        </main>
      </ProductsContextProvider>
    </>
  );
}

export default App;
