import Galery_1_1 from '../../assets/img/galery_1_1.png';
import Galery_1_2 from '../../assets/img/galery_1_2.png';
import Galery_1_3 from '../../assets/img/galery_1_3.png';
import Galery_1_4 from '../../assets/img/galery_1_4.png';
import Galery_2_1 from '../../assets/img/galery_2_1.png';
import Galery_2_2 from '../../assets/img/galery_2_2.png';
import Galery_2_3 from '../../assets/img/galery_2_3.png';
import Galery_2_4 from '../../assets/img/galery_2_4.png';
import Galery_3_1 from '../../assets/img/galery_3_1.png';
import Galery_3_2 from '../../assets/img/galery_3_2.png';
import Galery_3_3 from '../../assets/img/galery_3_3.png';
import Galery_3_4 from '../../assets/img/galery_3_4.png';
import SectionHeader from "../../components/SectionHeader";
import { useEffect } from "react";


import "./SectionGallery.scss";

function SectionGallery() {
  useEffect(() => {
    const images = document.querySelectorAll(".gallery__item img");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    images.forEach((img) => observer.observe(img));

    // Очистка при размонтировании
    return () => {
      images.forEach((img) => observer.unobserve(img));
    };
  }, []);

  return (
    <section className="gallery" id="gallery">
      <div className="container gallery__container">
        <SectionHeader title="Gallery" lineColor="#fff" lineWidth="100%" />
        <ul className="gallery__wrapper gallery__wrapper-laptop">
          <li className="gallery__item gallery__item_1">
            <img src={Galery_1_1} alt="painting" />
            <img src={Galery_1_2} alt="painting" />
            <img src={Galery_1_3} alt="painting" />
            <img src={Galery_1_4} alt="painting" />
          </li>
          <li className="gallery__item gallery__item_2">
            <img src={Galery_2_1} alt="painting" />
            <img src={Galery_2_2} alt="painting" />
            <img src={Galery_2_3} alt="painting" />
            <img src={Galery_2_4} alt="painting" />
          </li>
          <li className="gallery__item gallery__item_3">
            <img src={Galery_3_1} alt="painting" />
            <img src={Galery_3_2} alt="painting" />
            <img src={Galery_3_3} alt="painting" />
            <img src={Galery_3_4} alt="painting" />
            <div className="gallery__item_shadow"></div>
          </li>
        </ul>
      </div>
    </section>
  );
}



export default SectionGallery;
