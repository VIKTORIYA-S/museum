import SectionHeader from '../../components/SectionHeader';
import './Contacts.scss';

function Contacts() {
	return (
		<section className='contacts contacts__section' id='contacts'>
			<div className='container contacts__container'>
				<SectionHeader title='Contacts' />
				<div className='contacts__wrapper'>
					<div className='contacts__info'>
						<h6 className='contacts__title'>
							Palais Royal <br /> Musee du Louvre
						</h6>
						<p className='contacts__text'>
							address: 75001 Paris, France
						</p>
						<p className='contacts__text contacts__text_link'>
							<a href='tel:+1234567890'>
								phone: +33(0) 1 40 20 50 50
							</a>
						</p>
						<p className='contacts__text contacts__text_link'>
							<a href='mailto:example@email.com'>
								mail: info@louvre.fr
							</a>
						</p>
					</div>
					<div className='contacts__map-wrap'>
						<iframe
							className='contacts__map'
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.877808316813!2d2.337220195147208!3d48.860540413315334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0xb975fcfa192f84d4!2z0JvRg9Cy0YA!5e0!3m2!1sru!2sua!4v1753004612339!5m2!1sru!2sua'
							title='Louvre map'
							style={{ border: 0 }}
							allowFullScreen
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contacts;
