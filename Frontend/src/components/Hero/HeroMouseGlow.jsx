import { motion, useMotionValue, useSpring } from "framer-motion";

const HeroMouseGlow = () => {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX - 180);
    mouseY.set(e.clientY - 180);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="
          pointer-events-none
          absolute

          h-[360px]
          w-[360px]

          rounded-full

          bg-blue-500/15

          blur-[120px]
        "
      />
    </div>
  );
};

export default HeroMouseGlow;