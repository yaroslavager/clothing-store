import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app/variables.scss";

import HomePage from "./pages/homePage/homePage";
import CatalogPage from "./pages/catalogPage/catalogPage";
import ProductPage from "./pages/productPage/productPage";

import Header from "./widgets/header/header";
import AnnouncementBar from "./widgets/announcementBar/announcementBar";
import Footer from "./widgets/footer/footer";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  return (
    <BrowserRouter>
      <AnnouncementBar />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
