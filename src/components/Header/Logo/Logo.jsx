import triangle from "../../../assets/icon/triangle.svg";
import "./Logo.scss";
import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <NavLink to="/" className="logo__link">
    <div className="logo">
        <img className="logo__img" src={triangle} alt="logo triangle"/>
      <span className="logo__text">Louvre</span>
    </div>
    </NavLink>
  );
}

export default Logo;