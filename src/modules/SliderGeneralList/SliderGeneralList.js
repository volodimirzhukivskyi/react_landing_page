import React, { useState, useEffect } from "react";

import Button from "../Button/Button";

const img = [
  <img
    key={1}
    src="/bicycle.jpg"
    alt="велосипед "
  />,
  <img
    key={2}
    src="/bicycle2.jpg"
    alt="велосипед "
  />,
  <img
    key={3}
    src="/bicyclesShop.jpg "
    alt="Магазин велосипедов "
  />,
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const res = current === img.length - 1 ? 0 : current + 1;
        return res;
      });
    }, 5000);
    return () => clearInterval();
  }, []);
  const prevIndexEl = activeIndex ? activeIndex - 1 : img.length - 1;
  const nextImgEl = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

  return (
    <div className="slider">
      <Button
        className="buttonSliderPrev"
        backgroundColor={"black"}
        text={"<"}
        onClick={() => {
          setActiveIndex(prevIndexEl);
        }}
      />
      <div className="slider-img slider-img-prev" key={prevIndexEl}>
        {img[prevIndexEl]}
      </div>
      <div className="slider-img" key={activeIndex}>
        {img[activeIndex]}
      </div>
      <div className="slider-img slider-img-next" key={nextImgEl}>
        {img[nextImgEl]}
      </div>
      <Button
        className="buttonSliderNext"
        backgroundColor={"black"}
        text={">"}
        onClick={() => {
          setActiveIndex(nextImgEl);
        }}
      />
    </div>
  );
};
export default Slider;
