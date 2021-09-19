import { Footer } from "components/footer/Footer";
import { Header } from "components/header/Header";
import Navbar from "components/navbar/Navbar";
import { Router } from "components/router/Router";
import { ProductsContextProvider } from "context/ProductsContext";

function App() {
  return (
    <>
      <ProductsContextProvider>
        <Header/>
        <Navbar/>
        <main>
          <Router />
        </main>
      </ProductsContextProvider>
      <Footer/>
    </>
  );
}

export default App;
