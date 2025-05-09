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
              About me
            </h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">
              Hi! I’m Samantha, a Psychic Medium, Akashic Records Reader, and
              Spiritual Guide. Through intuitive readings, soul-deep guidance,
              and compassionate insight, I help you uncover your past lives,
              soul purpose, spiritual gifts, and the pathways that lead to
              clarity, healing, and empowered decision-making in this life.
              Whether we are connecting via Zoom, email, or in a workshop space,
              my mission is always the same: to help you reconnect with your
              inner knowing, trust your intuition, and align with your highest
              truth. Whether you are seeking insight into your soul's journey,
              healing from past patterns, or learning to trust your inner voice,
              I’m here to walk beside you, with clarity, compassion, and a
              little cosmic magic. Let’s see what your soul is ready to reveal.
              <br />✨ With Love,
              <br />
              <span className="ml-8 font-serif italic text-lg">Samantha</span>
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
            <button
              className="btn mx-auto xl:mx-0"
              onClick={() =>
                window.open("https://samanthatheclair.as.me", "_blank")
              }
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              Book a Reading
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
