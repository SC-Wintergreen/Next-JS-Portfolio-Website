"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Software Development Solutions",
    description:
      "Designing and building aesthetic and efficient web based or cross platform mobile based software solutions",
    href: "",
  },
  {
    num: "02",
    title: "Mentoring And Consultation",
    description:
      "Helping budding individuals get a strong foothold into the software industry by mentoring, grooming and guiding them with accurate and effective strategies",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.8, duration: 0.2, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-start gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold  group-hover:text-accent transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="h-[70px] w-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-3xl text-primary" />
                  </Link>
                </div>
                <h2 className="text-[25px]  xl:text-[42px] lg:text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/40 text-[16px] lg:text-[18px] xl:text-[20px] leading-8">
                  {service.description}
                </p>

                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
