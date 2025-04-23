"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import StatsItem from "@/components/StatsItem";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="w-full h-full flex flex-col xl:flex-row items-center justify-between">
          {/* image */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            className="relative w-[304px] h-[423px] xl:w-[384px] xl:h-[534px] mb-8 xl:mx-0"
          >
            <Image
              src="/assets/about/sam.png"
              fill
              quality={100}
              priority
              alt=""
              className="object-contain"
            />
          </motion.div>
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0"
          >
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
              Committed to providing a compassionate and personalised
              experience honoring your journey.
            </h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">
              Mediumship thoughtfully tailored to align with your comfort in
              mind. Ensuring a supportive and respectful experience in a safe
              environment. Whether you prefer a quiet, reflective setting or a
              more conversational approach, my process will guide you with
              sensitivity to your emotion and spiritual needs. This personalised
              approach allows for a more meaningful connection and fosters a
              sense of ease and trust during your session.
            </p>
            {/* items */}
            <div className="grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0">
              <div>
                <StatsItem countNum={2} text="Years communicating" />
              </div>
              <div>
                <StatsItem
                  countNum={150}
                  countText="+"
                  text="Healing clients"
                />
              </div>
              <div>
                <StatsItem countNum={100} countText="%" text="Your journey" />
              </div>
            </div>
            {/* btn */}
            <Link href="/contact" passHref>
              <button 
                className="btn mx-auto xl:mx-0"
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                Contact me
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;