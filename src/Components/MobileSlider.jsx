/* eslint-disable react/no-unescaped-entities */
import ali from "../assets/avatar-ali.png";
import anisha from "../assets/avatar-anisha.png";
import richard from "../assets/avatar-richard.png";
import shanai from "../assets/avatar-shanai.png";

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
  return (
    <div>
      <div className="block lg:hidden w-11/12 mx-auto">
        <div className="no-scrollbar flex gap-10 pb-8 overflow-x-auto  pt-10">
          {lists.map((list) => (
            <div key={list.id} className="flex-none relative w-full">
              <div className="relative bg-VeryLightGray h-[25vh] rounded-md px-8 pt-14">
                <img
                  src={list.image}
                  alt="Avatar"
                  className="w-16 h-auto absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                <div className="mt-8 text-center">
                  <h1 className="text-[18px] font-[600] text-DarkBlue">
                    {list.name}
                  </h1>
                  <p className="text-DarkGrayishBlue text-[14px]">
                    "{list.text}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
