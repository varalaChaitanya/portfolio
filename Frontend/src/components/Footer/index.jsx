import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return (
    <footer
      className="
        mt-24

        border-t

        border-slate-200
        dark:border-slate-700

        bg-slate-100
        dark:bg-slate-950
      "
    >
      <div
        className="
          mx-auto

          flex

          max-w-7xl

          flex-col

          items-center

          gap-10

          px-6

          py-14
        "
      >
        <div className="text-center">
          <h2
            className="
              text-3xl

              font-black
            "
          >
            Chaitanya Reddy
          </h2>

          <p
            className="
              mt-2

              text-slate-500
            "
          >
            Full Stack Developer | MERN | Python
          </p>
        </div>

        <FooterLinks />

        <FooterSocials />

        <div
          className="
            text-center

            text-sm

            text-slate-500
          "
        >
          © {new Date().getFullYear()} Chaitanya Reddy.

          <br />

          Built with React, Node.js, Express, and MongoDB.
        </div>
      </div>
    </footer>
  );
};

export default Footer;