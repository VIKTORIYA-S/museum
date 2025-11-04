import React, { useState } from 'react';

import Ticket_1 from '../../assets/img/ticket_1.png';
import SectionHeader from '../../components/SectionHeader';
import './SectionTicket.scss';
import { useNavigate } from 'react-router-dom';

import { TicketContext } from './TicketContext';

function SectionTicket() {
	const [ticketType, setTicketType] = useState('radio_1');
	const [basicCount, setBasicCount] = useState(1);
	const [seniorCount, setSeniorCount] = useState(1);
	// const [isModalOpen, setIsModalOpen] = useState(false);

	const navigate = useNavigate();

	// Цены для каждого типа билета
	const prices = {
		radio_1: { basic: 40, senior: 20 },
		radio_2: { basic: 30, senior: 15 },
		radio_3: { basic: 20, senior: 10 },
	};

	const handleBasicChange = (delta) => {
		setBasicCount((prev) => Math.max(0, prev + delta));
	};

	const handleSeniorChange = (delta) => {
		setSeniorCount((prev) => Math.max(0, prev + delta));
	};

	const currentPrices = prices[ticketType];

	const totalPrice =
		basicCount * currentPrices.basic +
		seniorCount * currentPrices.senior;

	const handleTicketTypeChange = (id) => {
		setTicketType(id);
	};

	const handleBuyClick = () => {
		navigate('/buy', {
			state: {
				ticketType,
				basicCount,
				seniorCount,
				totalPrice,
			},
		});
	};

	return (
		<section className='tickets' id='tickets'>
			<div className='container tickets__container'>
				<SectionHeader title='BUY TICKETS' />
				<div className='tickets__wrapper'>
					<img
						className='tickets__img'
						src={Ticket_1}
						alt='painting'
					/>
					<div className='tickets__info'>
						<div className='form'>
							<div className='form__left'>
								<h4 className='form__title'>Ticket Type</h4>
								<div className='form__radio'>
									{[
										'Permanent exhibition',
										'Temporary exhibition',
										'Combined Admission',
									].map((label, index) => {
										const id = `radio_${index + 1}`;
										return (
											<label
												className='radio__wrapper'
												htmlFor={id}
												key={id}
											>
												<input
													className='radio__wrapper_input'
													type='radio'
													id={id}
													name='radio'
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

							<div className='form__right'>
								<h4 className='form__title'>Amount</h4>

								<div className='form__number form__number_1'>
									<label htmlFor='input_1'>Basic 18+</label>
									<input
										type='number'
										id='input_1'
										value={basicCount}
										onChange={(e) =>
											handleBasicChange(Number(e.target.value))
										}
									/>
									<button
										type='button'
										className='button__number button__minus'
										onClick={() => handleBasicChange(-1)}
									>
										-
									</button>
									<button
										type='button'
										className='button__number button__plus'
										onClick={() => handleBasicChange(1)}
									>
										+
									</button>
								</div>

								<div className='form__number form__number_2'>
									<label htmlFor='input_2'>Senior 65+</label>
									<input
										type='number'
										id='input_2'
										value={seniorCount}
										onChange={(e) =>
											handleSeniorChange(Number(e.target.value))
										}
									/>
									<button
										type='button'
										className='button__number button__minus'
										onClick={() => handleSeniorChange(-1)}
									>
										-
									</button>
									<button
										type='button'
										className='button__number button__plus'
										onClick={() => handleSeniorChange(1)}
									>
										+
									</button>
								</div>

								<h5 className='form__total'>Total € {totalPrice}</h5>
							</div>
						</div>
						<button className='form__button' onClick={handleBuyClick}>
							Buy Now
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionTicket;
