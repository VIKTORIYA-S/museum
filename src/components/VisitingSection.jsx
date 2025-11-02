import { useRef, useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import Rectangle_1 from "../assets/img/Rectangle_1.png";
import before from "../assets/img/5cc7d498f99f3f8156f80a72bfb6eae885813085.jpg";


function VisitingSection() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    const slider = sliderRef.current;

    if (!container || !wrapper || !slider) return;

    const moveSlider = (x) => {
      const rect = container.getBoundingClientRect();
      let offset = x - rect.left;
      offset = Math.max(0, Math.min(offset, rect.width));
      const percent = (offset / rect.width) * 100;

      wrapper.style.width = `${percent}%`;
      slider.style.left = `${percent}%`;
    };

    const handleMouseMove = (e) => {
      if (isDragging) moveSlider(e.clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchMove = (e) => {
      if (isDragging && e.touches.length > 0) {
        moveSlider(e.touches[0].clientX);
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <section className="visiting" id="explore">
      <div className="container visiting__container">
        <div className="visiting__wrapper">
          <SectionHeader
            title="PICTURE EXPLORE"
            lineColor="#fff"
            lineWidth="100%"
          />
          <p className="visiting__text">
            Las Meninas is a 1656 painting by Diego Velázquez, the leading
            artist of the Spanish Golden Age.
          </p>
          <p className="visiting__text">
            It was cleaned in 1984 to remove a{" "}
            <span className="yellow_veil">"yellow veil"</span> of dust that had
            gathered since the previous restoration in the 19th century.
          </p>
          <p className="visiting__text">
            The cleaning provoked furious protests, not because the picture had
            been damaged in any way, but because it looked different.
          </p>
        </div>

        <div className="visiting__img" ref={containerRef}>
          <img
            className="visiting__img-1"
            src={Rectangle_1}
            alt="Rectangle before"
          />
          <div className="visiting__img-2-wrapper" ref={wrapperRef}>
            <img className="visiting__img-2" src={before} alt="Rectangle after" />
          </div>
          <div
            className="visiting__slider"
            ref={sliderRef}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default VisitingSection;