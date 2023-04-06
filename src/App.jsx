import { Navigation, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import PersonCard from "./PersonCard";
import { people } from "./data";
import { gsap } from "gsap";
import "./App.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  const [slide, setSlide] = useState(false);
  useEffect(() => {
    anim();
  }, []);

  function anim(e) {
    const tl = gsap.timeline({
      repeat: -1,
      delay: 2,
      repeatDelay: 0,
    });
    gsap.fromTo(
      ".swiper-slide-active .person-photo",
      { translateY: "50%", rotateY: "-270deg", rotateX: 0, scale: 0 },
      {
        duration: 2,
        y: "-50%",
        rotateY: "-35deg",
        rotateX: "15deg",
        scale: "1.1",
        boxShadow: "rgba(100, 100, 111, 0.5) 0px 7px 29px 0px",
      }
    );
    tl.to(".swiper-slide-active .person-photo", {
      duration: 2,
      ease: easeInOut,
      y: "-53%",
    });
    tl.to(".swiper-slide-active .person-photo", {
      duration: 2,
      y: "-50%",
    });
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        prevEl: ".triangle-left",
        nextEl: ".triangle-right",
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={(e) =>
        console.log(`Current slide is ${e.activeIndex + 1}`)
      }
    >
      <button className="triangle-left" onClick={anim} />
      <button className="triangle-right" onClick={anim} />
      {people.map((person) => (
        <SwiperSlide key={person.id}>
          <PersonCard personId={person.id} person={person.attributes} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default App;
