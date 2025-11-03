// import { useState } from "react"

import Header from "./components/Header/Header";
// import Hero from "./components/Hero";




import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './styles_scss/main.scss';

import Modal from "./components/Modal";
import { RouterProvider } from "react-router-dom";
import { router } from './router';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header /> */}
        <main className="main">
          <RouterProvider router={router}/>
          {/* <Modal /> */}
          {/* <Hero /> */}
          {/* <WelcomeSection /> */}
          {/* <VisitingSection /> */}
          {/* <SectionVideo /> */}
          {/* <SectionGallery /> */}
          {/* <SectionTicket /> */}
          {/* <Parallax /> */}
          {/* <Contacts /> */}
        </main>
      
    </>
  )
}

export default App;
