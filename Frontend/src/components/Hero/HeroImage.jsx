import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import { SiMongodb } from "react-icons/si";

import ProfileImage from "../../assets/images/profile-placeholder1.png";

const techBadges = [
  {
    id: 1,
    icon: <FaReact size={26} className="text-sky-400" />,
    className: "-left-6 top-10",
  },
  {
    id: 2,
    icon: <FaNodeJs size={26} className="text-green-500" />,
    className: "-right-6 top-16",
  },
  {
    id: 3,
    icon: <FaPython size={26} className="text-yellow-400" />,
    className: "-left-8 bottom-20",
  },
  {
    id: 4,
    icon: <SiMongodb size={24} className="text-green-600" />,
    className: "-right-6 bottom-16",
  },
];

const HeroImage = () => {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        relative
        flex
        items-center
        justify-center
      "
    >
      {/* Outer Glow */}

      <div
      className="
  absolute
  h-[360px]
  w-[360px]
  rounded-full

  bg-blue-400/10
  dark:bg-blue-500/20

  blur-[120px]
"
      />

      {/* Rotating Gradient Ring */}

    

<motion.div
  animate={{
    rotate: 360,
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "linear",
  }}
  className="
    absolute

    h-[330px]
    w-[330px]

    rounded-full

    bg-gradient-to-r
    from-sky-400
    via-blue-600
    to-indigo-700

    p-[3px]
  "
>
  <div
    className="
      h-full
      w-full

      rounded-full

      bg-gradient-to-br
      from-slate-100
      via-white
      to-slate-200

      dark:from-slate-950
      dark:via-slate-900
      dark:to-slate-800
    "
  />
</motion.div>

      {/* Glass Ring */}

      <div
      className="
  absolute

  h-[300px]
  w-[300px]

  rounded-full

  border

  border-slate-200/60
  dark:border-white/20

  bg-white/40
  dark:bg-white/5

  backdrop-blur-xl
"
      />

      {/* Profile Image */}

      <motion.img
        whileHover={{
          scale: 1.04,
        }}
        transition={{
          duration: 0.3,
        }}
        src={ProfileImage}
        alt="Chaitanya Reddy"
        className="
  relative
  z-10

  h-72
  w-72

  rounded-full

  object-cover

  border-4

  border-white
  dark:border-blue-500

  shadow-2xl
  dark:shadow-[0_0_70px_rgba(59,130,246,.45)]
"
      />

      {/* Floating Tech Badges */}

      {techBadges.map((badge) => (
        <motion.div
          key={badge.id}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2 + badge.id,
            repeat: Infinity,
          }}
          className={`
            absolute
            ${badge.className}

            z-20

            flex
            h-14
            w-14

            items-center
            justify-center

            rounded-full

            border

            border-white/20

            bg-white/90

            shadow-xl

            backdrop-blur-xl

            dark:bg-slate-900/80

           

 
            dark:shadow-black/30


       dark:shadow-black/30
          `}
        >
          {badge.icon}
        </motion.div>
      ))}

      {/* Open To Work */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute

          -bottom-2

          z-20

          rounded-full
 
          border

          bg-green-50
dark:bg-green-500/10

     

          px-5

          py-2

          backdrop-blur-xl
          border-green-300
dark:border-green-500/20
        "
      >
        <span className="font-semibold text-green-500">
          🟢 Open to Work
        </span>
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;