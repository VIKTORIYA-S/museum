import React, { useEffect } from "react";
import Galery_3_3 from '../assets/img/galery_3_3.png';
import Card_1 from '../assets/img/card_1.png';
import Card_2 from '../assets/img/card_2.png';

import DateIcon from '../assets/icon/date.png';
import TimeIcon from '../assets/icon/Time.svg';
import CheckIcon from '../assets/icon/check_circle.png';

function Modal({ onClose = () => {} }) {
  // DEBUG: покажем, что реально приходит в onClose
  // Оставьте пока для диагностики — потом можно убрать
//   console.log('Modal rendered. onClose type:', typeof onClose);
// console.trace();

 // блокировка скролла страницы при открытой модалке
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev || 'auto'; };
  }, []);

  const safeClose = () => {
    if (typeof onClose === 'function') onClose();
    else console.warn('Modal onClose is not a function:', onClose);
  };


  return (
    <div className="modal" style={{ zIndex: 999 }}>
      {/* клик по overlay закрывает модалку */}
      <div className="overlay" onClick={safeClose}>
        {/* остановим всплытие внутри белой части */}
        <div
          className="overlay__white"
          onClick={(e) => e.stopPropagation()}>
          {/* крестик закрытия */}
          <button
            type="button"
            aria-label="Close modal"
            className="overlay__close"
            onClick={safeClose}>
            <span></span>
            <span className="two"></span>
          </button>

          <div className="overlay__container">
            <div className="ticket-form">
              {/* ВНИМАНИЕ: в SVG используем camelCase атрибуты */}
              <svg
                className="ticket-form__logo"
                width="49"
                height="26"
                viewBox="0 0 49 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_1996)">
                  <path
                    className="ticket-form__logo-path"
                    d="M49 26H0L24.5 0L49 26ZM13.3075 13.1309L16.6442 16.6702L19.981 13.1309L16.6442 9.58115L13.3075 13.1309ZM16.6442 25.0052L19.981 21.466L16.6442 17.9162L13.3075 21.466L16.6442 25.0052Z"
                    fill="#9D8665"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1996">
                    <rect width="49" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <h2 className="ticket-form__title">Booking tickets</h2>
              <h5 className="ticket-form__subtitle">Tour to Louvre</h5>
              <hr className="ticket-form__line" />
              <div className="ticket-form__date">
                <input className="ticket-form__input-date" type="date" id="input-date" placeholder="Date" />
                <input className="ticket-form__input-time" name="time" type="time" id="input-time" placeholder="Time" />
              </div>
              <input className="ticket-form__input-name" type="text" id="input-name" placeholder="Name" />
              <input className="ticket-form__input-email" type="text" id="input-email" placeholder="Email" />
              <input className="ticket-form__input-phone" type="text" id="input-phone" placeholder="Phone" />
              <input className="ticket-form__input-type" type="text" id="input-type" placeholder="Ticket Type" />
              <div className="price">
                <span className="price__text">Entry ticket</span>
                <hr className="price__line" />
                <div className="price__wrapper">
                  <h4 className="price__title">Basic 18+ (20 €)</h4>
                  <div className="price__counter">
                    <div className="price__minus">-</div>
                    <div className="price__number">2</div>
                    <div className="price__place">+</div>
                  </div>
                </div>
                <div className="price__wrapper">
                  <h4 className="price__title">Senior 65+ (10 €)</h4>
                  <div className="price__counter">
                    <div className="price__minus">-</div>
                    <div className="price__number">2</div>
                    <div className="price__place">+</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ticket-card">
              <div className="ticket-card__wrapper">
                <div className="overview">
                  <h2 className="overview__title">Overview</h2>
                  <h3 className="overview__subtitle">Tour to Louvre</h3>
                  <div className="overview__date">
                    <img src={DateIcon} alt="" />
                    <h4>Friday, August 19</h4>
                  </div>
                  <div className="overview__time">
                    <img src={TimeIcon} alt="" />
                    <h4>Friday, August 19</h4>
                  </div>
                  <div className="overview__check">
                    <img src={CheckIcon} alt="" />
                    <h4>Friday, August 19</h4>
                  </div>
                </div>
                <img className="profile__foto" src={Galery_3_3} alt="" />
              </div>

              <div className="overview__wrapper">
                <span>2</span>
                <div>
                  <h4>Basic (20 €)</h4>
                  <h4>40 €</h4>
                </div>
              </div>
              <div className="overview__wrapper">
                <span>2</span>
                <div>
                  <h4>Senior (10 €)</h4>
                  <h4>20 €</h4>
                </div>
              </div>
              <hr className="overview__line" />
              <div className="overview__total">
                <h3>Total:</h3>
                <span>60 €</span>
              </div>
              <img className="card__1" src={Card_1} alt="" />
              <img className="card__2" src={Card_2} alt="" />
              <button className="ticket-card__button">Buy tickets</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;