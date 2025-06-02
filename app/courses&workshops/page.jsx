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
        {/* Mobile Layout */}
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
            className="w-[300px] h-[380px] relative rounded-lg overflow-hidden mb-6"
            style={{ borderRadius: "0.5rem" }}
          >
            <Image
              src="/assets/courses/courseSam.jpg"
              fill
              quality={100}
              alt="Samantha teaching workshops"
              className="object-cover rounded-lg"
              style={{ borderRadius: "0.5rem" }}
            />
          </motion.div>

          {/* Mobile Button */}
          <button className="btn mb-6" onClick={handleDiscoverMoreClick}>
            Book a Workshop
          </button>

          {/* Oracle Image below Button (Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 3, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="mt-4 mb-8"
          >
            <div className="w-[300px] h-[200px] relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/courses/oracle1.jpg"
                fill
                quality={100}
                alt="Oracle cards and spiritual tools"
                className="object-cover rounded-lg"
                style={{ borderRadius: "0.5rem" }}
              />
            </div>
          </motion.div>
        </div>

        <div className="w-full h-full flex items-start justify-between">
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
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
              Courses & Workshops
            </h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0 mb-8">
              Unlock your intuitive gifts and develop your psychic abilities in a supportive, 
              sacred space. Whether you're just beginning your spiritual journey or looking 
              to deepen your existing practice, these transformative experiences will guide 
              you toward greater self-awareness and connection.
            </p>

            {/* Course Content */}
            <div className="w-full mb-14 mx-auto xl:mx-0">
              <div className="flex flex-col items-center xl:items-start">
                <div className="flex items-start gap-[12px] mb-4">
                  <div className="min-w-[14px] h-[14px] mt-[8px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl font-semibold">
                    Work With Your Clairs: Psychic Development Course
                  </h3>
                </div>
                
                <div className="pl-6 space-y-4">
                  <p className="text-[16px] leading-relaxed">
                    A comprehensive 7-week journey designed to unlock and strengthen your natural psychic abilities. 
                    This intimate group experience provides you with the tools, techniques, and confidence to trust 
                    your intuition and develop your unique spiritual gifts.
                  </p>
                  
                  <div className="flex items-center text-[15px] font-medium mb-2 space-x-4">
  <span>2 hours each week</span>
  <span>|</span>
  <span>MYR 1,200</span>
</div>


                  <div className="space-y-3">
                    <h4 className="text-lg font-medium text-accent">What You'll Experience:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[15px]">
                      <div className="flex items-start gap-2">
                        <span className="text-accent">🌟</span>
                        <span>Discover your strongest intuitive gifts and learn about all the clairs</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-accent">🌿</span>
                        <span>Master grounding techniques and spiritual hygiene for energy protection</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-accent">🔮</span>
                        <span>Develop confidence to read for others and trust your psychic insights</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-accent">🧘‍♀️</span>
                        <span>Explore oracle cards, pendulums, photo reading, and other modalities</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-accent">🪄</span>
                        <span>Practice powerful psychic and mediumship tools in a safe, supportive environment</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-accent">✨</span>
                        <span>Connect with like minded souls on similar spiritual journeys</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/10 p-4 rounded-lg mt-6">
                    <p className="text-[15px] italic">
                      This course is perfect for beginners and those looking to deepen their practice. 
                      You'll leave feeling empowered, connected, and ready to embrace your psychic gifts 
                      with confidence and clarity.
                    </p>
                  </div>
                </div>
              </div>
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
              className="w-[384px] h-[534px] relative rounded-lg overflow-hidden"
              style={{ borderRadius: "0.5rem" }}
            >
              <Image
                src="/assets/courses/courseSam.jpg"
                fill
                quality={100}
                alt="Samantha teaching workshops"
                className="object-cover rounded-lg"
                style={{ borderRadius: "0.5rem" }}
              />
            </motion.div>

            <button className="btn mt-6" onClick={handleDiscoverMoreClick}>
              Book a Workshop
            </button>

            {/* Oracle Image below Button (Desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 3, duration: 0.8, ease: "easeInOut" },
              }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="mt-6"
            >
              <div className="w-[400px] h-[250px] relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/assets/courses/oracle1.jpg"
                  fill
                  quality={100}
                  alt="Oracle cards and spiritual tools"
                  className="object-cover rounded-lg"
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Workshops;
