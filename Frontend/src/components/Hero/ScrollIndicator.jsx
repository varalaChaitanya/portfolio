import { motion } from "framer-motion";
import { Link } from "react-scroll";

const ScrollIndicator = () => {
  return (
    <Link
      to="skills"
      smooth={true}
      duration={600}
      offset={-70}
      className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        cursor-pointer
      "
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 1,
        }}
        className="
          flex
          flex-col
          items-center
          gap-3
        "
      >
        {/* Mouse */}

        <div
          className="
            relative

            flex
            h-14
            w-8

            justify-center

            rounded-full

            border-2

            border-slate-400/60

            dark:border-slate-500/60
          "
        >
          {/* Wheel */}

          <motion.div
            animate={{
              y: [4, 18, 4],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
              ease: "easeInOut",
            }}
            className="
              mt-2

              h-3
              w-1.5

              rounded-full

              bg-blue-500
            "
          />
        </div>

        {/* Text */}

        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
            text-xs

            font-medium

            uppercase

            tracking-[0.25em]

            text-slate-500
          "
        >
          Scroll to Explore
        </motion.p>

        {/* Arrow */}

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
          }}
          className="text-blue-500"
        >
          ↓
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default ScrollIndicator;