import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { PERSONAL_INFO } from "../../utils/constants";

const ContactInfo = () => {
  return (
    <div
      className="
        space-y-6
      "
    >
      <div
        className="
          flex
          items-center
          gap-4
        "
      >
        <div
          className="
            rounded-full
            bg-blue-500/10
            p-4
          "
        >
          <FaEnvelope
            className="text-blue-500"
            size={22}
          />
        </div>

        <div>
          <h3 className="font-bold">
            Email
          </h3>

          <p className="text-slate-500 dark:text-slate-400">
            {PERSONAL_INFO.email}
          </p>
        </div>
      </div>

      <div
        className="
          flex
          items-center
          gap-4
        "
      >
        <div
          className="
            rounded-full
            bg-green-500/10
            p-4
          "
        >
          <FaPhoneAlt
            className="text-green-500"
            size={20}
          />
        </div>

        <div>
          <h3 className="font-bold">
            Phone
          </h3>

          <p className="text-slate-500 dark:text-slate-400">
            {PERSONAL_INFO.phone}
          </p>
        </div>
      </div>

      <div
        className="
          flex
          items-center
          gap-4
        "
      >
        <div
          className="
            rounded-full
            bg-red-500/10
            p-4
          "
        >
          <FaMapMarkerAlt
            className="text-red-500"
            size={22}
          />
        </div>

        <div>
          <h3 className="font-bold">
            Location
          </h3>

          <p className="text-slate-500 dark:text-slate-400">
            Hyderabad, Telangana, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;