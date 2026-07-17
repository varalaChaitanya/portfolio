import { motion } from "framer-motion";

import { FaPaperPlane } from "react-icons/fa";

import ContactInfo from "./ContactInfo";

const ContactCard = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        mx-auto

        max-w-4xl

        rounded-[32px]

        border

        border-slate-200
        dark:border-slate-700

        bg-white/80
        dark:bg-slate-900/80

        p-10

        shadow-2xl

        backdrop-blur-xl
      "
    >
      <div
        className="
          grid

          gap-10

          md:grid-cols-2
        "
      >
        <div>
          <h2
            className="
              text-3xl

              font-black
            "
          >
            Let's Connect 👋
          </h2>

          <p
            className="
              mt-5

              leading-8

              text-slate-600
              dark:text-slate-400
            "
          >
            I'm currently looking for Software
            Developer opportunities. Whether you
            have an internship, full-time role,
            freelance project, or simply want to
            connect, I'd be happy to hear from
            you.
          </p>

          <a
            href="mailto:yourmail@gmail.com"
            className="
              mt-8

              inline-flex

              items-center

              gap-3

              rounded-full

              bg-blue-600

              px-8

              py-4

              font-semibold

              text-white

              transition

              hover:bg-blue-700
            "
          >
            <FaPaperPlane />

            Send Email
          </a>
        </div>

        <ContactInfo />
      </div>
    </motion.div>
  );
};

export default ContactCard;