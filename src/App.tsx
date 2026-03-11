import { useState } from "react";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import "./app/variables.scss";
import Header from "./widgets/header/header";
import AnnouncementBar from "./widgets/announcementBar/announcementBar";
import Hero from "./widgets/hero/hero";
import BrandsBanner from "./shared/ui/brandsBanner/brandsBanner";
import Footer from "./widgets/footer/footer";

function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <Hero />
      <BrandsBanner />
<Footer/>
    </>
  );
}

export default App;
