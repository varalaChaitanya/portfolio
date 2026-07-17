

import { Element } from "react-scroll";

import SectionTitle from "../Common/SectionTitle";

import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <Element name="contact">
      <section
        className="
          mx-auto

          max-w-7xl

          px-6

          py-28
        "
      >
        <SectionTitle
          title="Let's Connect"
          subtitle="I'm always open to discussing software development opportunities, collaborations, or simply connecting with fellow developers."
        />

        <ContactCard />
      </section>
    </Element>
  );
};

export default Contact;