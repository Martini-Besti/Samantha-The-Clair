"use client";
import { useContext } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "@/components/CursorContext";

const Testimonials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const handleBookReadingClick = () => {
    window.open("https://samanthatheclair.as.me", "_blank");
  };

  // Combine all testimonials into a single array
  const allTestimonials = [
    {
      text: `"Thank you so much Sam for my reading you delved into a past life that resonated so much to this life and inturn I was able to pin point some trauma that I had hidden. You were spot on! Not only did you clarify my own psychic gifts to work on you gave me so much motivation to keep going at my pace and confirmation I'm on the right path!"`,
      name: "Shannon",
    },
    {
      text: `"Sam accessed my records and she was spot on. Everything she said resonated with me and gave me goosebumps (confirmation). I had wondered where certain fears and challenges had come from during this lifetime and Sam was able to pinpoint where these originated. I feel like I have a better understanding of my soul and life purpose."`,
      name: "Lana",
    },
    {
      text: `"It was my first time ever with the Akashic Records, I had no expectations but everything that came up resonated so much. I got reassured that I am on my authentic path and I am doing the right things for me and my family. Samantha is highly intuitive and she is here to share her light."`,
      name: "Lyuba",
    },
    {
      text: `"My readings from Samantha have been relevant and provided me with much needed guidance. Samantha delivers messages sensitively and positively. I have recommended her to many friends who have also then had readings which were accurate and timely. Samantha is lovely to speak to and has helped me through some uncertain times. I will definitely be going back!"`,
      name: "Cait",
    },
    {
      text: `"It was my first time hearing about the Akashic Records. I've been feeling lost and overwhelmed for about a month. After I had a session with Samantha I feel lighter and I now feel I have a sense of direction. She also gave me the courage to make a decision regarding a challenging situation. I feel like I know more about who I am and I deserve so much more. Thank you so much Samantha."`,
      name: "Hongyee",
    },
    {
      text: `"Holy sh*t! Samantha was spot on when describing my future (now current) partner! I had been single for a while at the time and was feeling discouraged when I did a reading with her. I was at the verge of giving up dating when she told me to not give up and she can sense that he is really close by. She then proceeded to tell me details about his age, height, hair & eye color, etc. It didnt make sense at the time, but after a month or so, I actually met him! If you're having doubts, don't, because she is the real deal!!"`,
      name: "Ashley H",
    },
    {
      text: `"Thank you Sam for the akashic reading. It resonates with what has been currently happening in my life. Getting to know my past lives has given me the clarity. This provides me on how to move forward as well. I would recommend this experience for anyone who wanted to tap into their records and gain further clarity."`,
      name: "Shelley",
    },
    {
      text: `"Samantha is truly one of the most gifted, compassionate souls I have ever encountered. After my major breakup left me shattered and lost, she became my anchor. Her readings were incredibly accurate, detailed, and so thoughtfully organized that even in my confusion, her words brought me clarity and hope. Her psychic abilities are nothing short of extraordinary. It felt as though she could see into my heart and soul, guiding me through pain I thought I would never survive."`,
      name: "Anonymous",
    },
    {
      text: `"I had the pleasure of receiving an Akashic record reading from Samantha. It was mind-blowing how themes from my past lives related scenarios in this life. I love this about the Akashie records, you can look into patterns from past lives to discover the why behind repeating cycles and then work towards changing them. Her accuracy and ability to bring up things I've never verbally expressed to someone was so magical and healing."`,
      name: "Charlene",
    },
    {
      text: `"Thank you for the enlightening session today! It was informative and empowering! I love how patient you are in helping me seek clarity. Your profound sharing has given me courage to move forward with hope and faith! Thank you very much for all that you do and I look forward to having a session with you again!"`,
      name: "Amber",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto pt-32 pb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
          }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="text-center mb-12"
        >
          <h2 className="h2 mb-6">Testimonials</h2>
          <p className="lead max-w-[600px] mx-auto">
            Kind words from those I've had the privilege to guide on their spiritual journey.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.2, duration: 0.8, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {allTestimonials.map((item, index) => (
            <div
              key={index}
              className="bg-black/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              <p className="text-[15px] mb-4 italic">
                {item.text}
              </p>
              <p className="text-right font-medium">— {item.name}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
          }}
          className="flex justify-center"
        >
          <button
            className="btn"
            onClick={handleBookReadingClick}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            Book a Reading
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;