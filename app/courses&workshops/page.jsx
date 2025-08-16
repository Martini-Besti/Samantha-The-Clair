"use client";
import { useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CursorContext } from "@/components/CursorContext";

const Workshops = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const handleDiscoverMoreClick = () => {
    window.open("https://samanthatheclair.as.me", "_blank");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex flex-col items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex flex-col items-center pt-36 pb-12 xl:pt-32 xl:pb-0">
        <div className="w-full h-full flex flex-col xl:flex-row items-start justify-between gap-10">
          {/* Main Content */}
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
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none mt-6 xl:mt-0">
              Courses & Coaching
            </h2>

            <p className="lead max-w-[600px] mx-auto xl:mx-0 mb-8">
              Unlock your intuitive gifts and develop your psychic abilities in
              a personalized, supportive setting. This one-on-one course is
              designed to help you discover your strongest clairs, deepen your
              spiritual connection, and confidently use your psychic skills.
            </p>

            {/* Psychic Mediumship Coaching */}
            <div className="w-full mb-14 mx-auto xl:mx-0">
              <div className="flex flex-col items-center xl:items-start">
                <div className="flex items-start gap-[12px] mb-4">
                  <div className="min-w-[14px] h-[14px] mt-[8px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl font-semibold">
                    1:1 Psychic Mediumship Coaching
                  </h3>
                </div>

                <div className="pl-6 space-y-4">
                  <p className="text-[16px] leading-relaxed">
                    Tailored mentorship to strengthen your intuition, psychic
                    abilities, and connection to Spirit. We work together to
                    grow your skills, confidence, and personal style as a
                    reader.
                  </p>
                  <div className="flex flex-col text-[15px] font-medium mb-2 space-y-2 xl:justify-start justify-center">
                    <span>Single Sessions:</span>
                    <span>💫 60 mins — RM280 / ~AUD103</span>
                    <span>💫 90 mins — RM400 / ~AUD147</span>
                  </div>
                  <div className="flex flex-col text-[15px] font-medium mb-2 space-y-2 xl:justify-start justify-center">
                    <span>Packages:</span>
                    <span>💫 60 mins x 3 sessions: MYR650 / ~AUD239</span>
                    <span>💫 60 mins x 6 sessions: MYR 1,200 / ~AUD441</span>
                    <span>💫 90 mins x 3 sessions: MYR 950 / ~AUD349</span>
                    <span>💫 90 mins x 6 sessions: MYR 1,900 / ~AUD698</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Work With Your Clairs — Psychic Development */}
            <div className="w-full mb-10 mx-auto xl:mx-0">
              <div className="flex items-start gap-[12px] mb-4">
                <div className="min-w-[14px] h-[14px] mt-[8px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                <h3 className="text-2xl font-semibold">
                  Work With Your Clairs — Psychic Development
                </h3>
              </div>
              <p className="text-[16px] leading-relaxed mb-3">
                Private 1:1 psychic development to discover your dominant
                clairs, strengthen your intuition & confidently read energy.
              </p>
              <p className="text-[16px] leading-relaxed mb-3">
                🧘‍♀️ No group. Just YOU + ME unlocking your gifts through tailored
                guidance, practice, and spiritual tools.
              </p>
              <p className="text-[16px] leading-relaxed mb-3">
                📅 Choose your pace:
              </p>
              <ul className="list-disc list-inside mb-3">
                <li>2 Full-Day Immersion OR</li>
                <li>4–6 Weekly/Fortnightly Zoom Sessions</li>
              </ul>
              <p className="text-[16px] leading-relaxed mb-1">
                💰 RM1,500 / ~AUD550
              </p>
              <p className="text-[16px] leading-relaxed mb-1">
                🎁 Includes 1 complimentary 60-min Psychic Mediumship Coaching
                session
              </p>
              <p className="text-[14px] text-gray-500">
                *Please note daily exchange rates may change. You will be
                charged in MYR.
              </p>
            </div>
          </motion.div>

          {/* Desktop Image + Button + Oracle */}
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
              className="w-[384px] h-[534px] relative rounded-lg overflow-hidden mb-6"
            >
              <Image
                src="/assets/courses/courseSam.jpg"
                fill
                quality={100}
                alt="Samantha teaching workshops"
                className="object-cover rounded-lg"
              />
            </motion.div>

            <button className="btn mb-6" onClick={handleDiscoverMoreClick}>
              Book a Workshop
            </button>

            {/* Oracle Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 3, duration: 0.8, ease: "easeInOut" },
              }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="mt-6 w-[400px] h-[250px] relative rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/assets/courses/oracle1.jpg"
                fill
                quality={100}
                alt="Oracle cards and spiritual tools"
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>

          {/* Mobile courseSam image and button at bottom */}
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
              className="w-[300px] h-[380px] relative rounded-lg overflow-hidden mb-6"
            >
              <Image
                src="/assets/courses/courseSam.jpg"
                fill
                quality={100}
                alt="Samantha teaching workshops"
                className="object-cover rounded-lg"
              />
            </motion.div>

            <button className="btn mb-6" onClick={handleDiscoverMoreClick}>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Workshops;
