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
        {/* image - now visible on all screens, moved further down on mobile */}
        <div className="flex flex-col items-center mb-10 mt-8 xl:hidden">
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
              src="/assets/readings/candle.jpg"
              fill
              quality={100}
              alt=""
              className="object-contain rounded-lg"
              style={{ borderRadius: "0.5rem" }}
            />
          </motion.div>

          {/* Candle Cord Cutting Ritual text for mobile */}
          <div className="mt-4 text-center px-4 max-w-[300px]">
            <div className="flex items-start gap-[12px] mb-2 justify-center">
              <div className="min-w-[14px] h-[14px] mt-[8px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
              <h3 className="text-2xl">Candle Cord Cutting Ritual</h3>
            </div>
            <p className="pl-6 text-[15px]">
              This ritual helps you release emotional ties, past relationships, and energetic attachments that no longer serve your highest good. It creates space for clarity, freedom, and healing. No need to be present — this is done remotely with deep care and intention.
              <br />
              🕯 Remote Ritual (MYR 100) – Personalised candle cord cutting + written summary with insights, photos & video
            </p>
          </div>

          {/* Button below mobile image */}
          <button
            className="btn mt-4"
            onClick={handleDiscoverMoreClick}
          >
            Book a Reading
          </button>
        </div>

        <div className="w-full h-full flex items-center justify-between">
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
            className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto"
          >
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
              Readings
            </h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">
              As a psychic medium, I offer deeply intuitive readings to help you
              find clarity, healing, and purpose. Whether you're seeking past
              life insights, spiritual connection, or guidance for the road
              ahead, I'm here to support you.
            </p>
            {/* items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-14 mx-auto xl:mx-0">
              {/* Left Column Items */}
              <div className="flex-1 flex flex-col justify-start items-center xl:items-start">
                <div className="flex items-start gap-[12px] mb-2">
                  <div className="min-w-[14px] h-[14px] mt-[8px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Akashic Record Reading</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Journey into your Akashic Records to explore two past lives
                  shaping your current path. Discover your soul's purpose,
                  spiritual gifts, key lessons, and receive guidance for your
                  life today. Includes the opportunity to connect with your
                  spirit guide or a loved one in spirit for heartfelt insight.
                  <br />
                  🌀 Zoom (MYR 300) – 1-hour live session
                  <br />
                  📩 Email (MYR 250) – Written reading, up to 5 questions
                  <br />
                  🔮 Zoom + Email (MYR 400) – Live session + written summary
                </p>
              </div>

              {/* Right Column Items - Moved up to align with Akashic Record Readings */}
              <div className="flex-1 flex flex-col justify-start items-center xl:items-start">
                <div className="flex items-start gap-[12px] mb-2">
                  <div className="min-w-[14px] h-[14px] mt-[8px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Psychic Mediumship Reading</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Receive intuitive insights and loving messages from spirit.
                  This reading supports your path forward with clarity,
                  connection, and reassurance. Includes the opportunity to
                  connect with your spirit guide or a loved one in spirit for
                  heartfelt insight. This reading does not include past life
                  insights.
                  <br />
                  🌀 Zoom (MYR 250) – 1-hour live session
                  <br />
                  📩 Email (MYR 150) – Written reading, up to 5 questions
                  <br />
                  🔮 Zoom + Email (MYR 350) – Live session + email summary
                </p>
              </div>

              {/* Left Column Items */}
              <div className="flex-1 flex flex-col justify-start items-center xl:items-start">
                <div className="flex items-start gap-[12px] mb-2">
                  <div className="min-w-[14px] h-[14px] mt-[8px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Short Readings</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Send in 1 or 3 specific questions and receive a detailed,
                  intuitive response straight to your inbox. With your
                  permission, I can access your Akashic Records for deeper
                  soul-level guidance.
                  <br />✨ 1 Question – MYR 40
                  <br />✨ 3 Questions – MYR 100
                </p>
              </div>

              {/* Right Column Items - Moved down to align with Short Readings */}
              <div className="flex-1 flex flex-col justify-start items-center xl:items-start">
                <div className="flex items-start gap-[12px] mb-2">
                  <div className="min-w-[14px] h-[14px] mt-[8px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Psychic Parties</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Add a magical touch to your special event—perfect for
                  birthdays, bridal showers, or soulful girls' nights in!
                  Options include Tarot and/or Oracle Card Readings, Group
                  Energy Readings, and Mini 1-on-1 Readings for Guests.
                  <br />✨ Available virtually or in person (location dependent)
                  <br />✨ Custom pricing based on group size & format
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* image with button below - desktop version */}
          <div className="hidden xl:flex flex-col items-center">
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
                src="/assets/readings/candle.jpg"
                fill
                quality={100}
                alt=""
                className="object-contain rounded-lg"
                style={{ borderRadius: "0.5rem" }}
              />
            </motion.div>
            
            {/* Candle Cord Cutting Ritual text for desktop */}
            <div className="mt-4 text-center px-4 max-w-[384px]">
              <div className="flex items-start gap-[12px] mb-2 justify-center">
                <div className="min-w-[14px] h-[14px] mt-[8px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                <h3 className="text-2xl">Candle Cord Cutting Ritual</h3>
              </div>
              <p className="pl-6 text-[15px]">
                This ritual helps you release emotional ties, past relationships, and energetic attachments that no longer serve your highest good. It creates space for clarity, freedom, and healing. No need to be present — this is done remotely with deep care and intention.
                <br />
                🕯 Remote Ritual (MYR 100) – Personalised candle cord cutting + written summary with insights, photos & video
              </p>
            </div>
            
            {/* Button below desktop image */}
            <button
              className="btn mt-4"
              onClick={handleDiscoverMoreClick}
            >
              Book a Reading
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Readings;