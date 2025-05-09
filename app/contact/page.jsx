"use client";
import { motion } from "framer-motion";
import { useContext } from "react";
import Image from "next/image";
import { CursorContext } from "@/components/CursorContext";

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="flex flex-col gap-12 xl:flex-row h-full">
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex-1 flex flex-col justify-center"
          >
            <h3 className="h3 mb-8 text-center xl:text-left">Contact info</h3>

            <div className="flex flex-col items-center xl:items-start gap-12">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="relative w-[36px] h-[36px]">
                  <Image src="/assets/contact/pin.svg" fill alt="" />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Location</h4>
                  <p className="leading-relaxed">
                    Kuala Lumpur
                    <br />
                    Malaysia
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="relative w-[36px] h-[36px]">
                  <Image src="/assets/contact/phone.svg" fill alt="" />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Phone number</h4>
                  <p>Phone: +60(0) 163 401 229</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="relative w-[36px] h-[36px]">
                  <Image src="/assets/contact/email.svg" fill alt="" />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Email address</h4>
                  <p>admin@samanthatheclair.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
