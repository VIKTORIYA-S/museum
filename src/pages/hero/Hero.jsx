import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import hero from '../../assets/img/hero.png';
import galery141 from '../../assets/img/galery141.png';
import galery111 from '../../assets/img/galery111.png';
import galery_1_4 from '../../assets/img/galery_1_4.png';
import galery_2_4 from '../../assets/img/galery_2_4.png';

import './hero.scss';
import SectionHeader from '../../components/SectionHeader';

function Hero() {
  const swiperRef = useRef(null);
  const swiperInstance = useRef(null);

  useEffect(() => {
    const nextBtn = document.querySelector('.swiper-button-next');
    const prevBtn = document.querySelector('.swiper-button-prev');

    if (swiperRef.current && nextBtn && prevBtn) {
      swiperInstance.current = new Swiper(swiperRef.current, {
        loop: false,
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
        on: {
          init: function () {
            const total = document.querySelector('.hero__footer_number-2');
            if (total) {
              total.textContent = String(this.slides.length).padStart(2, '0');
            }
          },
          slideChange: function () {
            const current = document.querySelector('.hero__footer_number-1');
            if (current) {
              current.textContent = String(this.activeIndex + 1).padStart(2, '0');
            }

            document.querySelectorAll('.square').forEach((el, index) => {
              el.classList.toggle('square--active', index === this.activeIndex);
            });
          },
        },
      });

      document.querySelectorAll('.square').forEach((el, index) => {
        el.addEventListener('click', () => {
          swiperInstance.current.slideTo(index);
        });
      });
    }
  }, []);

  return (
    <section className="hero">
      <div className="container hero__container">
        <SectionHeader />
        <div className="swiper image-slider" ref={swiperRef}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img className="hero__img swiper-slide" src={hero} alt="Mona Lisa" />
            </div>
            <div className="swiper-slide">
              <img className="hero__img swiper-slide" src={galery141} alt="Venus de Milo" />
            </div>
            <div className="swiper-slide">
              <img className="hero__img swiper-slide" src={galery111} alt="Winged Victory of Samothrace" />
            </div>
            <div className="swiper-slide">
              <img className="hero__img swiper-slide" src={galery_1_4} alt="The Coronation of Napoleon" />
            </div>
            <div className="swiper-slide">
              <img className="hero__img swiper-slide" src={galery_2_4} alt="Liberty Leading the People" />
            </div>
          </div>
        </div>

        <div className="hero__wrapper">
          <h1 className="hero__title">Welcome <br /> to the Louvre</h1>
          <h4 className="hero__subtitle">From the castle to the museum</h4>
          <div className="hero__button">
            <a
              className="hero__button"
              href="https://www.google.com/maps/@48.8618159,2.3366818,3a,75y,81.55h,73.4t/data=!3m8!1e1!3m6!1sAF1QipOVxZQuSy3Bx9T_HpH_7FtBHDTXvI6SF-A10ocT!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipOVxZQuSy3Bx9T_HpH_7FtBHDTXvI6SF-A10ocT%3Dw900-h600-k-no-pi16.599999999999994-ya322.8300064086914-ro0-fo100!7i5472!8i2736?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discover the Louvre
            </a>
          </div>
        </div>

        <div className="hero__footer">
          <div className="hero__footer_number">
            <span className="hero__footer_number-1">01</span>
            <span className="hero__footer_number-2">05</span>
          </div>
          <ul className="hero__footer_list">
            <li className="square square--active" data-slide="0"></li>
            <li className="square" data-slide="1"></li>
            <li className="square" data-slide="2"></li>
            <li className="square" data-slide="3"></li>
            <li className="square" data-slide="4"></li>
          </ul>
          <div className="hero__footer_arrow">
            <div className="swiper-button-prev"><i className="fas fa-chevron-left"></i></div>
            <div className="swiper-button-next"><i className="fas fa-chevron-right"></i></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
