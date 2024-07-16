import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  ShareIcon,
} from "../../assets/social-icons";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section
      id="connect"
      className="md:mx-[120px] px-[16px] md:px-0  pb-10 text-white "
    >
      <h3 className="uppercase font-oswald font-semibold  md:text-xl text-lg md:mb-5 mb-3">
        Contact me
      </h3>

      <div className="flex w-full gap-10 md:flex-nowrap flex-wrap">
        <div className="">
          <p className="font-satoshi  md:text-lg text-md  mb-3 md:mb-6">
            Feel free to reach out to me for any inquiries, collaboration
            opportunities, or just to say hello! I'm available via email and
            phone, and you can also connect with me on LinkedIn for professional
            networking. Looking forward to hearing from you!
          </p>
          <div className="flex gap-2">
            <Phone />
            <a
              href={`tel:${"+91 6304506343"}`}
              className="hover:text-primary-600"
            >
              <b className="cursor-pointer hover:underline">+91 6304506343</b>
            </a>
          </div>
          <div className="flex gap-2 mt-4">
            <Mail />
            <a
              href={`mailto:${"avulakalyan2001@gmail.com"}`}
              className="cursor-pointer hover:underline"
            >
              <b className="cursor-pointer hover:underline">
                avulakalyan2001@gmail.com
              </b>
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-4">
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/kalyan-kumar-avula-765554223/"}
        >
          <InstagramIcon />
        </Link>
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/kalyan-kumar-avula-765554223/"}
        >
          <FacebookIcon />
        </Link>
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/kalyan-kumar-avula-765554223/"}
        >
          <LinkedinIcon />
        </Link>
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/kalyan-kumar-avula-765554223/"}
        >
          <ShareIcon />
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
