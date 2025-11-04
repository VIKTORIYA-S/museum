import WelcomePlase from "./WelcomePlase";
import WelcomeCardImg from "./WelcomeCardImg";
import "./WelcomeCard.scss";

function WelcomeCard({ link, imageSrc, imageAlt, title }) {
    return (
        <li className="welcome-card">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <WelcomeCardImg src={imageSrc} alt={imageAlt} />
                <WelcomePlase title={title} />
                <hr className="welcome-card__line" />
                <p className="welcome-card__text">360° Virtual Tour</p>
                <p className="welcome-card__text welcome-card__text-last">Google Street Panorama View</p>
            </a>
        </li>
    );
}

export default WelcomeCard;