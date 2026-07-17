import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const FooterSocials = () => {
  return (
    <div
      className="
        flex

        justify-center

        gap-6

        text-2xl
      "
    >
      <a
        href={`https://github.com/${import.meta.env.VITE_GITHUB_USERNAME}`}
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href={`https://linkedin.com/in/${import.meta.env.VITE_LINKDIN_USERNAME}`}
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:YOUR_EMAIL@gmail.com"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default FooterSocials;