import WelcomeCard from "./WelcomeCard"
import Royal_Palace from '../assets/img/Royal_Palace.jpg';
import Denon_Wing from '../assets/img/Denon_Wing.jpg';
import Colonnade_Perrault from '../assets/img/Colonnade_Perrault.jpg';
import Greek_hall from '../assets/img/Greek_hall.jpg';
import Mona_Lisa from '../assets/img/Mona_Lisa.jpg';
import Night_Palace from '../assets/img/Night_Palace.jpg';



function WelcomeList() {
    return (
        <ul className="welcome__list">
            <WelcomeCard
            link="https://www.google.com/maps/@48.8606882,2.3356791,3a,90y,328.36h,87.55t/data=!3m7!1e1!3m5!1sAF1QipMZ9YgnArbwEIbTDANeSQYFu9gNqpW_2Sv8FBvY!2e10!3e12!7i4352!8i1815"
            imageSrc={Royal_Palace}
            imageAlt="Royal Palace"
            title="Royal Palace"
            />
            <WelcomeCard
            link="https://www.google.com/maps/@48.8563254,2.3352706,3a,75y,90t/data=!3m7!1e1!3m5!1sAF1QipNRj_CwP4coDMYdCHj6qHeBeJpI2VxU5BUsOX4F!2e10!3e12!7i11000!8i5500"
            imageSrc={Denon_Wing}
            imageAlt="Denon Wing"
            title="Denon Wing"
             />
            <WelcomeCard
            link="https://www.google.com/maps/@48.8601723,2.3395439,3a,88.4y,322.04h,84.25t/data=!3m7!1e1!3m5!1sAF1QipNMZGQuEA-pAUvIG_eP_2f3gWTKZEJ6XLVJ-Pgb!2e10!3e12!7i10240!8i5120"
            imageSrc={Colonnade_Perrault}
            imageAlt="Colonnade Perrault"
            title="Colonnade Perrault"
             />
            <WelcomeCard
            link="https://www.google.com/maps/@48.860183,2.3356156,3a,90y,177.69h,95.61t/data=!3m7!1e1!3m5!1sAF1QipP7uFZnTITRe-7AEVAgHAfqiCL-03gvBHcYWgF3!2e10!3e12!7i5472!8i2736"
            imageSrc={Greek_hall}
            imageAlt="Greek hall"
            title="Greek hall"
             />
            <WelcomeCard
            link="https://www.google.com/maps/@48.8598788,2.3355157,3a,82.2y,7.53h,94t/data=!3m7!1e1!3m5!1sAF1QipO1wkUUbyzpPjj-OR0mR5etZJT-xl-40XK8rDQ3!2e10!3e12!7i10240!8i5120"
            imageSrc={Mona_Lisa}
            imageAlt="Mona Lisa"
            title="Mona Lisa"
             />
            <WelcomeCard
            link="https://www.google.com/maps/@48.8563254,2.3352706,3a,90y,21.26h,79.91t/data=!3m7!1e1!3m5!1sAF1QipPpGAowYatVyk3MMGnZAaQkYm2EUk-Dlca06SS5!2e10!3e12!7i11304!8i5652"
            imageSrc={Night_Palace}
            imageAlt="Night Palace"
            title="Night Palace"
             />
        </ul>
    );
}

export default WelcomeList;