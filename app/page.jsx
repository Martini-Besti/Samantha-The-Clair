"use client";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import Image from "next/image";
import ModalVideo from "@/components/ModalVideo";

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  
  // Add this handler function for the booking button
  const handleBookingClick = () => {
    window.open("https://samanthatheclair.as.me", "_blank");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center h-full">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 2, duration: 1, ease: "easeInOut" },
            }}
            className="w-full text-center xl:text-left xl:w-[500px] pt-[120px]"
          >
            <motion.h1
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="h1 mb-6"
            >
              your journey <br /> starts here
            </motion.h1>
            <motion.p
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="lead max-w-xl mx-auto"
            >
               Offering Psychic Mediumship and Akashic<br />
               readings to provide clarity and guidance. 
            </motion.p>
            <div className="flex flex-col xl:flex-row items-center gap-6 max-w-max mx-auto xl:mx-0">
              <motion.button
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                onClick={handleBookingClick}
                className="btn btn-lg"
              >
                Book a Consultation
              </motion.button>
              <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                <ModalVideo />
              </motion.div>
            </div>
          </motion.div>
          {/* image */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, bottom: "-100%" }}
              animate={{
                opacity: 1,
                bottom: 0,
                transition: { delay: 2.4, duration: 1.2, ease: "easeInOut" },
              }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="hidden xl:flex fixed bottom-0"
            >
              <Image
                src="/assets/home/logo.png"
                width={1064}
                height={850}
                quality={100}
                alt=""
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;