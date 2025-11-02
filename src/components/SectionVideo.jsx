import SectionHeader from "./SectionHeader";
import VideoMain from "./VideoMain";
import VideoSlider from "./VideoSlider";


function SectionVideo() {
    return (
<section className="video" id="video">
            <div className="container video__container">
                <SectionHeader title="Video JOURNEY" />
                <p className="video__text">Enter and visit one of the most famous museums in the world and enjoy masterpieces such as Mona Lisa or Hammurabi's Code</p>
                <VideoMain />
                <div className="video__small_wrapper swiper video-slider">
                <VideoSlider />
                </div>
            </div>
        </section>
    );
}

export default SectionVideo;