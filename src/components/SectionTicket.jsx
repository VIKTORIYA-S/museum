
import React, { useState } from 'react';
import Modal from './Modal';
import Ticket_1 from '../assets/img/ticket_1.png';
import SectionHeader from './SectionHeader';

function SectionTicket() {
  const [ticketType, setTicketType] = useState('radio_1');
  const [basicCount, setBasicCount] = useState(1);
  const [seniorCount, setSeniorCount] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    console.log("open modal");
    setIsModalOpen(true);
  }

  function closeModal() {
    console.log("close modal");
    setIsModalOpen(false);
  }

  // Цены для каждого типа билета
  const prices = {
    radio_1: { basic: 40, senior: 20 },
    radio_2: { basic: 30, senior: 15 },
    radio_3: { basic: 20, senior: 10 },
  };

  const handleBasicChange = (delta) => {
    setBasicCount(prev => Math.max(0, prev + delta));
  };

  const handleSeniorChange = (delta) => {
    setSeniorCount(prev => Math.max(0, prev + delta));
  };

   const currentPrices = prices[ticketType];

     const totalPrice = basicCount * currentPrices.basic + seniorCount * currentPrices.senior;

     const handleTicketTypeChange = (id) => {
    setTicketType(id);
  };

  // Безопасное обновление с ограничением по минимуму 0
  // const handleBasicChange = (newCount) => {
  //   setBasicCount(Math.max(0, newCount));
  // };

  // const handleSeniorChange = (newCount) => {
  //   setSeniorCount(Math.max(0, newCount));
  // };


  // const totalPrice = (basicCount * 20 + seniorCount * 15); // пример расчёта

  // const handleRadioChange = (value) => {
  //   switch (value) {
  //     case "radio_1":
  //       setBasicCount(40);
  //       setSeniorCount(20);
  //       break;
  //     case "radio_2":
  //       setBasicCount(30);
  //       setSeniorCount(15);
  //       break;
  //     case "radio_3":
  //       setBasicCount(20);
  //       setSeniorCount(10);
  //       break;
  //     default:
  //       setBasicCount(0);
  //       setSeniorCount(0);
  //   }
  // };


  // const handleTicketTypeChange = (id) => {
  //   setTicketType(id);

  //   if (id === "radio_1") {
  //     setBasicCount(40);
  //     setSeniorCount(20);
  //   } else if (id === "radio_2") {
  //     setBasicCount(30);
  //     setSeniorCount(15);
  //   } else if (id === "radio_3") {
  //     setBasicCount(20);
  //     setSeniorCount(10);
  //   }
  // };


  return (
    <section className="tickets" id="tickets">
      <div className="container tickets__container">
        <SectionHeader title="BUY TICKETS" />
        <div className="tickets__wrapper">
          <img className="tickets__img" src={Ticket_1} alt="painting" />
          <div className="tickets__info">
            <div className="form">
              <div className="form__left">
                <h4 className="form__title">Ticket Type</h4>
                <div className="form__radio">
                  {['Permanent exhibition', 'Temporary exhibition', 'Combined Admission'].map((label, index) => {
                    const id = `radio_${index + 1}`;
                    return (
                      <label className="radio__wrapper" htmlFor={id} key={id}>
                        <input
                          className="radio__wrapper_input"
                          type="radio"
                          id={id}
                          name="radio"
                          value={id}
                          checked={ticketType === id}
                          // onChange={() => setTicketType(id)}
                          onChange={() => handleTicketTypeChange(id)}
                        />
                        <span>{label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="form__right">
                <h4 className="form__title">Amount</h4>

                <div className="form__number form__number_1">
                  <label htmlFor="input_1">Basic 18+</label>
                  <input
                    type="number"
                    id="input_1"
                    value={basicCount}
                    onChange={(e) => handleBasicChange(Number(e.target.value))}
                  />
                  <button type="button" className="button__number button__minus" onClick={() => handleBasicChange(-1)}>-</button>
                  <button type="button" className="button__number button__plus" onClick={() => handleBasicChange(1)}>+</button>
                </div>

                <div className="form__number form__number_2">
                  <label htmlFor="input_2">Senior 65+</label>
                  <input
                    type="number"
                    id="input_2"
                    value={seniorCount}
                    onChange={(e) => handleSeniorChange(Number(e.target.value))}
                  />
                  <button type="button" className="button__number button__minus" onClick={() => handleSeniorChange(-1)}>-</button>
                  <button type="button" className="button__number button__plus" onClick={() => handleSeniorChange(1)}>+</button>
                </div>

                <h5 className="form__total">Total € {totalPrice}</h5>
              </div>
            </div>
            <button className="form__button" onClick={openModal}>Buy Now</button>
          </div>
        </div>
      </div>
      {isModalOpen && <Modal onClose={closeModal} prices={currentPrices} />}
    </section>
  );
}

export default SectionTicket;

