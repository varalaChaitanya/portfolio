import { Element } from "react-scroll";
import { motion } from "framer-motion";

import HeroBackground from "./HeroBackground";
import HeroMouseGlow from "./HeroMouseGlow";
import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import TechStack from "./TechStack";
import HeroButtons from "./HeroButtons";
import HeroSocialLinks from "./HeroSocialLinks";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  return (
    <Element name="home">
      <section
        className="
          relative
          flex
          min-h-screen
          items-center
          justify-center
          overflow-hidden
          px-6
          pt-28
          pb-20
        "
      >
        {/* Background Effects */}

        <HeroMouseGlow />
        <HeroBackground />

        {/* Main Content */}

        <div
          className="
            relative
            z-10
            mx-auto

            flex
            max-w-7xl

            flex-col-reverse
            items-center
            justify-between

            gap-14

            lg:flex-row
            lg:gap-16
          "
        >
          {/* Left Side */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              flex-1

              flex
              flex-col

              items-center
              lg:items-start

              text-center
              lg:text-left
            "
          >
            <HeroHeading />

            <HeroDescription />

            <TechStack />

            <HeroButtons />

            <HeroSocialLinks />
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              flex
              flex-1
              justify-center

              lg:-mt-12
              xl:-mt-16
            "
          >
            <HeroImage />
          </motion.div>
        </div>

        {/* Scroll Indicator */}

        <ScrollIndicator />
      </section>
    </Element>
  );
};

export default Hero;