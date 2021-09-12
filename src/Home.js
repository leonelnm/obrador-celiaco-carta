import { Header } from "components/header/Header";
import { Router } from "components/router/Router";
import { ProductsContextProvider } from "context/ProductsContext";

import styles from "./styles/Home.module.css"

function App() {
  return (
    <>
      <ProductsContextProvider>
        <Header/>
        <main className={styles.productGrid}>
          <Router />
        </main>
      </ProductsContextProvider>
      <footer style={{marginTop: '5rem'}}>
        <p style={{textAlign:'center'}}>En Desarrollo</p>
      </footer>
    </>
  );
}

export default App;
