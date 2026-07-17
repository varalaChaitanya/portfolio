import { Link } from "react-scroll";

import { navLinks } from "../Navbar/NavLinks";

const FooterLinks = () => {
  return (
    <div
      className="
        flex

        flex-wrap

        justify-center

        gap-8
      "
    >
      {navLinks.map((item) => (
        <Link
          key={item.id}
          to={item.to}
          smooth
          duration={500}
          className="
            cursor-pointer

            text-slate-500

            transition

            hover:text-blue-500
          "
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;