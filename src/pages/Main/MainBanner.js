import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  mainBanner01,
  mainBanner02,
  mainBanner03,
  mainBanner04,
  mainBanner05,
  mainBanner06
} from "../../assets/images";

// 메인페이지의 메인배너 슬라이더 세팅
const sliderSettings = {
  dots: true,
  arrows: true,
  prevArrow: <button className="banner_button left_button">Previous</button>,
  nextArrow: <button className="banner_button right_button">Next</button>,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  fade: false,
  speed: 1000,
  infinite: true,
  centerMode: false,
  centerPadding: "0%",
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: true,
  focusOnSelect: false,
  draggable: true,
  vertical: false,
  verticalSwiping: false,
  initialSlide: 0,
  cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  variableWidth: false
};

const MainBanner = () => {
  return (
    <section className="mb-20">
      <h2 className="sr-only">메인 이벤트</h2>
      <div className="relative">
        <Slider {...sliderSettings}>
          <div>
            <img
              src={mainBanner01}
              alt="컬리 이 주의 특가 한 눈에 보기"
              className="w-full h-[350px] object-cover"
            />
          </div>
          <div>
            <img
              src={mainBanner02}
              alt="컬리 이 주의 특가 한 눈에 보기"
              className="w-full h-[350px] object-cover"
            />
          </div>
          <div>
            <img
              src={mainBanner03}
              alt="컬리 이 주의 특가 한 눈에 보기"
              className="w-full h-[350px] object-cover"
            />
          </div>
          <div>
            <img
              src={mainBanner04}
              alt="컬리 이 주의 특가 한 눈에 보기"
              className="w-full h-[350px] object-cover"
            />
          </div>
          <div>
            <img
              src={mainBanner05}
              alt="컬리 이 주의 특가 한 눈에 보기"
              className="w-full h-[350px] object-cover"
            />
          </div>
          <div>
            <img
              src={mainBanner06}
              alt="컬리 이 주의 특가 한 눈에 보기"
              className="w-full h-[350px] object-cover"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default MainBanner;
