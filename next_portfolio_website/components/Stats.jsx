"use client";

import CountUp from "react-countup";

const stats = [
  { num: 2, text: "years of experience" },
  { num: 13, text: "technologies mastered" },
  { num: 250, text: "DSA questions solved" },
  { num: 180, text: "code commits on github" },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={1.5}
                  suffix="+"
                  className="text-3xl xl:text-6xl  text-white font-extrabold"
                />

                <p
                  className={` leading-5 ${
                    stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  }`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
