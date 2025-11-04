import { useState } from 'react';
import Burger from './Burger/Burger';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import './Header.scss';

function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<header className='header'>
			<div className='container header__container'>
				<Logo />
				<Navigation isOpen={isOpen} />
				<Burger isOpen={isOpen} onToggle={toggleMenu} />
			</div>
		</header>
	);
}

export default Header;
