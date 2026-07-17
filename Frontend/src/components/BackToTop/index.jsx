import { useEffect, useState } from "react";

import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed

        bottom-8

        right-8

        z-50

        flex

        h-14
        w-14

        items-center

        justify-center

        rounded-full

        bg-blue-600

        text-white

        shadow-xl

        transition

        hover:scale-110

        hover:bg-blue-700
      "
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;