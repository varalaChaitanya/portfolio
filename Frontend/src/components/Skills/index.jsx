import { Element } from "react-scroll";
import { motion } from "framer-motion";

import SkillHeader from "./SkillHeader";
import SkillGrid from "./SkillGrid";

const Skills = () => {
  return (
    <Element name="skills">
      <section
        className="
          relative
          overflow-hidden

          px-6
          py-24

          lg:py-32
        "
      >
        {/* Background Glow */}

        <div
          className="
            absolute
            top-20
            left-1/2

            h-96
            w-96

            -translate-x-1/2

            rounded-full

            bg-blue-500/10

            blur-[140px]
          "
        />

        {/* Content */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative
            z-10

            mx-auto

            max-w-7xl
          "
        >
          <SkillHeader />

          <SkillGrid />
        </motion.div>
      </section>
    </Element>
  );
};

export default Skills;