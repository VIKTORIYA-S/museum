import { NavLink } from "react-router-dom";
import "./Navigation.scss";

function Navigation({ isOpen }) {
	return (
		<nav className={`header__nav ${isOpen ? 'active' : ''}`}>
			<ul className='header__list'>
				<li className='header__list_item'>
					<NavLink to='/visiting' className='footer__list_link'>
						Visiting
					</NavLink>
				</li>
				<li className='header__list_item'>
					<NavLink to='/explore' className='footer__list_link'>
						Explore
					</NavLink>
				</li>
				<li className='header__list_item'>
					<NavLink to='/explore' className='footer__list_link' >
						Video
					</NavLink>
				</li>
				<li className='header__list_item'>
					<NavLink to='/gallery' className='footer__list_link'>
						Gallery
					</NavLink>
				</li>
				<li className='header__list_item'>
					<NavLink to='/tickets' className='footer__list_link' >
						Tickets
					</NavLink>
				</li>
				<li className='header__list_item'>
					<NavLink to='/contacts' className='footer__list_link'>
						Contacts
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
