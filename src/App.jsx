import { useState } from "react"

import Header from "./components/Header";
import Hero from "./components/Hero";
import WelcomeSection from "./components/WelcomeSection";
import VisitingSection from "./components/VisitingSection";
import SectionVideo from "./components/SectionVideo";
import SectionGallery from "./components/SectionGallery";
import SectionTicket from "./components/SectionTicket";
import Parallax from "./components/Parallax";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './styles_scss/main.scss';

import Modal from "./components/Modal";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
        <main class="main">
          {/* <Modal /> */}
          <Hero />
          <WelcomeSection />
          <VisitingSection />
          <SectionVideo />
          <SectionGallery />
          <SectionTicket />
          <Parallax />
          <Contacts />
        </main>
      <Footer />
    </>
  )
}

export default App;
