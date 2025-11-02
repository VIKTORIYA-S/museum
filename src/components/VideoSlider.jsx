import VideoItem from "./VideoItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function VideoSlider(params) {
    const videoUrls = [
    "https://www.youtube.com/embed/aWmJ5DgyWPI?enablejsapi=1",
    "https://www.youtube.com/embed/2OR0OCr6uRE?enablejsapi=1",
    "https://www.youtube.com/embed/NOhDysLnTvY?enablejsapi=1",
    "https://www.youtube.com/embed/zp1BXPX8jcU?enablejsapi=1",
    "https://www.youtube.com/embed/2OR0OCr6uRE?enablejsapi=1",
    "https://www.youtube.com/embed/NOhDysLnTvY?enablejsapi=1"
  ];

  const settings = {
    slidesToShow: 4,         // показывать 4 видео одновременно
    slidesToScroll: 1,       // прокручивать по одному
    infinite: true,          // бесконечный слайдер
    dots: true,              // точки навигации
    arrows: true,            // стрелки навигации
    speed: 500,
    responsive: [
      {
        breakpoint: 1280, // ноутбуки и планшеты
      settings: {
        slidesToShow: 3,
      },
    },
    {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false, // убираем стрелки, если места мало
        dots: true,    // оставляем точки
        }
      }
    ]
  };

  return (
    <div className="video__slider">
      <Slider {...settings}>
        {videoUrls.map((url, index) => (
          <div key={index} className="video__iframe_wrapper">
            <VideoItem src={url} />
          </div>
        ))}
      </Slider>
    </div>
  );
}



export default VideoSlider;