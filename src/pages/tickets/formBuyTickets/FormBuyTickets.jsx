import Galery_3_3 from '../../../assets/img/galery_3_3.png';
import Card_1 from '../../../assets/img/card_1.png';
import Card_2 from '../../../assets/img/card_2.png';

import DateIcon from '../../../assets/icon/date.png';
import TimeIcon from '../../../assets/icon/Time.svg';
import CheckIcon from '../../../assets/icon/check_circle.png';

import './FormBuyTickets.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';

function FormBuyTickets() {
	const { state } = useLocation();
	const navigate = useNavigate();

	const { ticketType, basicCount, seniorCount, totalPrice } =
		state || {};

	const [basic, setBasic] = useState(basicCount);
	const [senior, setSenior] = useState(seniorCount);
  const prices = {
		radio_1: { basic: 40, senior: 20 },
		radio_2: { basic: 30, senior: 15 },
		radio_3: { basic: 20, senior: 10 },
	};
  const current = prices[ticketType];

    const totalAmount = useMemo(
     () => basic * current.basic + senior * current.senior,
     [basic, senior, current]
   );

	const ticketLabels = {
		radio_1: 'Permanent exhibition',
		radio_2: 'Temporary exhibition',
		radio_3: 'Combined ticket',
	};

	

	if (!state) {
		// если пользователь попал на /buy без выбора билета
		navigate('/', { replace: true });
		return null;
	}


	

	const handleBasicChange = (delta) => {
		setBasic((prev) => Math.max(0, prev + delta));
	};

	const handleSeniorChange = (delta) => {
		setSenior((prev) => Math.max(0, prev + delta));
	};

  const handleBuyTickets = () => {
  alert('Thank you for your purchase!');
  setTimeout(() => {
    navigate('/');
  }, 2000);
};

const closeForm = () => {
  navigate('/');
};

	return (
		<div className='modal'>
			<button
				type='button'
				aria-label='Close modal'
				className='overlay__close'
        onClick={closeForm}
			>
				<span></span>
				<span className='two'></span>
			</button>

			<div className='overlay__container'>
				<div className='ticket-form'>
					{/* ВНИМАНИЕ: в SVG используем camelCase атрибуты */}
					<svg
						className='ticket-form__logo'
						width='49'
						height='26'
						viewBox='0 0 49 26'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g clipPath='url(#clip0_1_1996)'>
							<path
								className='ticket-form__logo-path'
								d='M49 26H0L24.5 0L49 26ZM13.3075 13.1309L16.6442 16.6702L19.981 13.1309L16.6442 9.58115L13.3075 13.1309ZM16.6442 25.0052L19.981 21.466L16.6442 17.9162L13.3075 21.466L16.6442 25.0052Z'
								fill='#9D8665'
							/>
						</g>
						<defs>
							<clipPath id='clip0_1_1996'>
								<rect width='49' height='26' fill='white' />
							</clipPath>
						</defs>
					</svg>

					<h2 className='ticket-form__title'>Booking tickets</h2>
					<h5 className='ticket-form__subtitle'>Tour to Louvre</h5>
					<hr className='ticket-form__line' />
					<div className='ticket-form__date'>
						<input
							className='ticket-form__input-date'
							type='date'
							id='input-date'
							placeholder='Date'
						/>
						<input
							className='ticket-form__input-time'
							name='time'
							type='time'
							id='input-time'
							placeholder='Time'
						/>
					</div>
					<input
						className='ticket-form__input-name'
						type='text'
						id='input-name'
						placeholder='Name'
					/>
					<input
						className='ticket-form__input-email'
						type='text'
						id='input-email'
						placeholder='Email'
					/>
					<input
						className='ticket-form__input-phone'
						type='text'
						id='input-phone'
						placeholder='Phone'
					/>
					<input
						className='ticket-form__input-type'
						type='text'
						id='input-type'
						placeholder='Ticket Type'
						value={ticketLabels[ticketType] || ticketType}
            readOnly
					/>
					<div className='price'>
						<span className='price__text'>Entry ticket</span>
						<hr className='price__line' />
						<div className='price__wrapper'>
							<h4 className='price__title'>
								Basic 18+ ({prices.basic} €)
							</h4>
							<div className='price__counter'>
								<div
									className='price__minus'
									onClick={() => handleBasicChange(-1)}
								>
									-
								</div>
								<div className='price__number'>{basic}</div>
								<div
									className='price__place'
									onClick={() => handleBasicChange(1)}
								>
									+
								</div>
							</div>
						</div>
						<div className='price__wrapper'>
							<h4 className='price__title'>
								Senior 65+ ({prices.senior} €)
							</h4>
							<div className='price__counter'>
								<div
									className='price__minus'
									onClick={() => handleSeniorChange(-1)}
								>
									-
								</div>
								<div className='price__number'>{senior}</div>
								<div
									className='price__place'
									onClick={() => handleSeniorChange(1)}
								>
									+
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='ticket-card'>
					<div className='ticket-card__wrapper'>
						<div className='overview'>
							<h2 className='overview__title'>Overview</h2>
							<h3 className='overview__subtitle'>Tour to Louvre</h3>
							<div className='overview__date'>
								<img src={DateIcon} alt='' />
								<h4>Friday, August 19</h4>
							</div>
							<div className='overview__time'>
								<img src={TimeIcon} alt='' />
								<h4>Friday, August 19</h4>
							</div>
							<div className='overview__check'>
								<img src={CheckIcon} alt='' />
								<h4>Friday, August 19</h4>
							</div>
						</div>
						<img className='profile__foto' src={Galery_3_3} alt='' />
					</div>

					<div className='overview__wrapper'>
						<span>{basic}</span>
						<div>
							<h4>Basic ({prices.basic} €)</h4>
							<h4>{basic * current.basic} €</h4>
						</div>
					</div>
					<div className='overview__wrapper'>
						<span>{senior}</span>
						<div>
							<h4>Senior ({prices.senior} €)</h4>
							<h4>{senior * current.senior} €</h4>
						</div>
					</div>
					<hr className='overview__line' />
					<div className='overview__total'>
						<h3>Total:</h3>
						<span>{totalAmount !== totalPrice ? totalAmount : totalPrice} €</span>
					</div>
					<img className='card__1' src={Card_1} alt='' />
					<img className='card__2' src={Card_2} alt='' />
					<button className='ticket-card__button' onClick={handleBuyTickets}>Buy tickets</button>
				</div>
			</div>
		</div>
	);
}

export default FormBuyTickets;
