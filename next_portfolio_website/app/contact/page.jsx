"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";

import { info } from "@/data/info";
import { delay, motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.8, duration: 0.2, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row,gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Lets Work Together</h3>
              <p className="text-white/60">
                For Business Inquries, Feel Free To Use The Form Below
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone Number" />
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Reason For Contacting" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Reason For Contacting</SelectLabel>
                    <SelectItem value="Job Offer">
                      Offer Me A Job Position
                    </SelectItem>
                    <SelectItem value="Need Tutoring">
                      Need Tutoring From Me
                    </SelectItem>
                    <SelectItem value="Freelance Services">
                      Freelance Work For Me
                    </SelectItem>
                    <SelectItem value="Feedback">Give Feedback</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px]"
                placeholder="Type Your Message Here"
              ></Textarea>

              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
