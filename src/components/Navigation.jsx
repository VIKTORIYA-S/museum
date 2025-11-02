function Navigation({ isOpen }) {
  return (
    <nav className={`header__nav ${isOpen ? "active" : ""}`}>
      <ul className="header__list">
        <li className="header__list_item"><a className="footer__list_link" href="#visiting">Visiting</a></li>
        <li className="header__list_item"><a className="footer__list_link" href="#explore">Explore</a></li>
        <li className="header__list_item"><a className="footer__list_link" href="#video">Video</a></li>
        <li className="header__list_item"><a className="footer__list_link" href="#gallery">Gallery</a></li>
        <li className="header__list_item"><a className="footer__list_link" href="#tickets">Tickets</a></li>
        <li className="header__list_item"><a className="footer__list_link" href="#contacts">Contacts</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;


