import { useState, useRef, useEffect } from "react";
import ali from "../assets/avatar-ali.png";
import anisha from "../assets/avatar-anisha.png";
import richard from "../assets/avatar-richard.png";
import shanai from "../assets/avatar-shanai.png";
import Rounded from "./Rounded";

export default function MobileSlider() {
  const lists = [
    {
      image: anisha,
      name: "Anisha Li",
      text: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
      id: 1,
    },
    {
      image: ali,
      name: "Ali Bravo",
      text: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
      id: 2,
    },
    {
      image: richard,
      name: "Richard Watts",
      text: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
      id: 3,
    },
    {
      image: shanai,
      name: "Shanai Gough",
      text: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
      id: 4,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      {
        root: sliderRef.current,
        threshold: 0.5,
      }
    );

    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => observer.observe(slide));

    return () => {
      slides.forEach((slide) => observer.unobserve(slide));
    };
  }, []);

  return (
    <div>
      <div className="block w-11/12 mx-auto lg:hidden">
        <div
          ref={sliderRef}
          className="flex gap-10 pt-10 pb-8 overflow-x-auto no-scrollbar"
        >
          {lists.map((list, index) => (
            <div
              key={list.id}
              className="relative flex-none w-full slide"
              data-index={index}
            >
              <div className="relative bg-VeryLightGray h-[30vh] rounded-md px-8 pt-10">
                <img
                  src={list.image}
                  alt={list.name}
                  className="absolute top-0 w-16 h-auto transform -translate-x-1/2 -translate-y-1/2 left-1/2"
                />
                <div className="mt-8 text-center">
                  <h1 className="text-[18px] font-[600] text-DarkBlue">
                    {list.name}
                  </h1>
                  <p className="text-DarkGrayishBlue text-[14px]">
                    {list.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mb-8">
          {lists.map((_, index) => (
            <Rounded key={index} isActive={activeIndex === index} />
          ))}
        </div>
      </div>
    </div>
  );
}
