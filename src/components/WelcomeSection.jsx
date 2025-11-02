import SectionHeader from './SectionHeader';
import WelcomeList from './WelcomeList';

function WelcomeSection() {
  return (
    <section className="welcome" id="visiting">
      <div className="container welcome__container">
        <SectionHeader title={"Virtual tour"}/>
        <div className="welcome__wrapper">
          <WelcomeList />
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;