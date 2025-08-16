"use client";
import { useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CursorContext } from "@/components/CursorContext";

const Readings = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  // Add the redirect function
  const handleDiscoverMoreClick = () => {
    window.open("https://samanthatheclair.as.me", "_blank");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex flex-col items-center pt-36 pb-12 xl:pt-32 xl:pb-0">
        {/* Mobile: Title, description, and button at the top */}
        <div className="xl:hidden w-full text-center mb-10">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex flex-col items-center"
          >
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none mt-6 xl:mt-0">
              Readings
            </h2>
            <p className="lead max-w-[600px] mx-auto mb-12">
              As a psychic medium, I offer deeply intuitive readings to help you
              find clarity, healing, and purpose. Whether you're seeking past
              life insights, spiritual connection, or guidance for the road
              ahead, I'm here to support you.
            </p>
            <button className="btn mb-8" onClick={handleDiscoverMoreClick}>
              Book a Reading
            </button>
          </motion.div>
        </div>

        {/* Mobile: Reading items grid */}
        <div className="xl:hidden w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-14 mx-auto">
            {/* Left Column Items */}
            <div className="flex-1 flex flex-col justify-start items-center">
              <div className="flex items-start gap-[12px] mb-2">
                <div className="min-w-[14px] h-[14px] mt-[8px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                <h3 className="text-2xl">
                  ✨ Psychic Mediumship & Akashic Records Reading
                </h3>
              </div>
              <p className="pl-6 text-[15px]">
                A personalised, in-depth session where we explore your energy,
                messages from Spirit, and guidance from the Akashic Records.
                Ideal for clarity on life direction, relationships, soul
                purpose, and spiritual growth.
                <br />
                💫 1 hour via Zoom – MYR350 / ~AUD130
                <br />
                ➕ Extra 30 mins – MYR175 / ~AUD65
                <br />
                ➕ Extra 1 hour – MYR350 / ~AUD130
                <br />
                📝 Email Write-Up Add-On – MYR200 / ~AUD75
              </p>
            </div>

            {/* Right Column Items */}
            <div className="flex-1 flex flex-col justify-start items-center">
              <div className="flex items-start gap-[12px] mb-2">
                <div className="min-w-[14px] h-[14px] mt-[8px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                <h3 className="text-2xl">
                  ✨ 1 Question Reading – MYR60 / ~AUD22
                </h3>
              </div>
              <p className="pl-6 text-[15px]">
                A focused reading for when you have one specific question.
                Delivered directly to your email so you can revisit it anytime.
                <br />
                *Please note daily exchange rates may change. You will be
                charged in MYR.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: Image and cord cutting ceremony at bottom */}
        <div className="flex flex-col items-center mb-10 xl:hidden">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="w-[300px] h-[380px] relative rounded-lg overflow-hidden"
            style={{ borderRadius: "0.5rem" }}
          >
            <Image
              src="/assets/readings/candle1.jpg"
              fill
              quality={100}
              alt=""
              className="object-contain rounded-lg"
              style={{ borderRadius: "0.5rem" }}
            />
          </motion.div>
        </div>

        {/* Mobile: Second Book a Reading button at the bottom */}
        <div className="xl:hidden mb-8">
          <button className="btn" onClick={handleDiscoverMoreClick}>
            Book a Reading
          </button>
        </div>

        {/* Desktop layout */}
        <div className="hidden xl:flex w-full h-full items-center justify-between">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex flex-col items-start xl:max-w-[650px] text-left"
          >
            <h2 className="h2 mb-6">Readings</h2>
            <p className="lead max-w-[600px] mb-6">
              As a psychic medium, I offer deeply intuitive readings to help you
              find clarity, healing, and purpose. Whether you're seeking past
              life insights, spiritual connection, or guidance for the road
              ahead, I'm here to support you.
            </p>
            {/* items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-14">
              {/* Left Column Items */}
              <div className="flex-1 flex flex-col justify-start items-start">
                <div className="flex items-start gap-[12px] mb-2">
                  <div className="min-w-[14px] h-[14px] mt-[8px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">
                    ✨ Psychic Mediumship & Akashic Records Reading
                  </h3>
                </div>
                <p className="pl-6 text-[15px]">
                  A personalised, in-depth session where we explore your energy,
                  messages from Spirit, and guidance from the Akashic Records.
                  Ideal for clarity on life direction, relationships, soul
                  purpose, and spiritual growth.
                  <br />
                  💫 1 hour via Zoom – MYR350 / ~AUD130
                  <br />
                  ➕ Extra 30 mins – MYR175 / ~AUD65
                  <br />
                  ➕ Extra 1 hour – MYR350 / ~AUD130
                  <br />
                  📝 Email Write-Up Add-On – MYR200 / ~AUD75
                </p>
              </div>

              {/* Right Column Items - Moved up to align with Akashic Record Readings */}
              <div className="flex-1 flex flex-col justify-start items-start">
                <div className="flex items-start gap-[12px] mb-2">
                  <div className="min-w-[14px] h-[14px] mt-[8px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">
                    ✨ 1 Question Reading – MYR60 / ~AUD22
                  </h3>
                </div>
                <p className="pl-6 text-[15px]">
                  A focused reading for when you have one specific question.
                  Delivered directly to your email so you can revisit it
                  anytime.
                  <br />
                  A focused reading for when you have one specific question.
                  Delivered directly to your email so you can revisit it
                  anytime.
                  <br />
                  *Please note daily exchange rates may change. You will be
                  charged in MYR.
                </p>
              </div>
            </div>
          </motion.div>

          {/* image with button below - desktop version */}
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
              }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="w-[384px] h-[534px] relative rounded-lg overflow-hidden"
              style={{ borderRadius: "0.5rem" }}
            >
              <Image
                src="/assets/readings/candle1.jpg"
                fill
                quality={100}
                alt=""
                className="object-contain rounded-lg"
                style={{ borderRadius: "0.5rem" }}
              />
            </motion.div>

            {/* Button below desktop image */}
            <button className="btn mt-4" onClick={handleDiscoverMoreClick}>
              Book a Reading
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Readings;
