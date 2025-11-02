import RoyalPalace from '../assets/img/Royal_Palace.jpg';


function WelcomeCardImg({ src, alt }) {
    return (
        <img className="welcome-card__img" src={src} alt={alt} />
    );
}


export default WelcomeCardImg;