/* eslint-disable react/no-unescaped-entities */
import Button from "./Button";
export default function Manage() {
  const lists = [
    {
      number: "01",
      title: "Track company-wide progress",
      text: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
      id: 1,
    },
    {
      number: "02",
      title: "Advanced built-in reports",
      text: "Set interval delivery estimates and track progress toward company goals.Our customisable dashboard helps you build out the reports you need key stakeholders informed.",
      id: 2,
    },
    {
      number: "03",
      title: "Everything you need in one place",
      text: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
      id: 3,
    },
  ];
  return (
    <div className="lg:w-10/12 mx-auto lg:mt-20 mt-28 mb-14">
      <div className="grid lg:grid-cols-2 justify-items-start">
        <div>
          <h1 className="lg:font-[600] font-[700] lg:text-[44px] text-[36px] leading-none text-DarkBlue lg:text-left text-center lg:w-full w-10/12 mx-auto lg:mx-0">
            What's different about Manage?
          </h1>
          <p className="text-DarkGrayishBlue text-[18px] lg:w-8/12 lg:text-left text-center mt-7 w-10/12 mx-auto lg:mx-0 mb-8 lg:mb-0">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <div className="grid gap-8">
          {lists.map((list) => (
            <div key={list.id}>
              <div className="lg:flex items-start gap-7">
                <Button
                  className="px-5 py-2 text-white font-[600] hidden lg:block "
                  text={list.number}
                />

                <div className="lg:hidden flex items-center gap-2 bg-VeryPaleRed rounded-l-full w-11/12 ml-auto mb-3">
                  <Button
                    text={list.number}
                    className="px-7 py-1 text-white font-[600] flex-shrink-0 flex-nowrap"
                  />
                  <h1 className="text-[18px] font-[600] text-DarkBlue">
                    {list.title}
                  </h1>
                </div>

                <div className="grid gap-4">
                  <h1 className="text-[18px] font-[600] text-DarkBlue hidden lg:block">
                    {list.title}
                  </h1>
                  <p className="text-DarkGrayishBlue w-10/12 mx-auto lg:mx-0 text-[15px]">
                    {list.text}
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
