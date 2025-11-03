import triangle from "../../../assets/icon/triangle.svg";
import "./Logo.scss";

function Logo() {
  return (
    <div className="logo">
        <img className="logo__img" src={triangle} alt="logo triangle"/>
      <span className="logo__text">Louvre</span>
    </div>
  );
}

export default Logo;