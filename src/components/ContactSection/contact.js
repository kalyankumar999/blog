import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  ShareIcon,
} from "@/assets/social-icons";
import { Phone, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import Image from "next/image";

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
            I'm Kalyan Kumar Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed euismod, nunc ac bibendum ullamcorper, sapien diam cursus
            nibh, nec fermentum velit erat vel nisi. Mauris vitae semper lacus.
          </p>
          <div className="flex gap-2">
            <Phone />
            <b className="cursor-pointer hover:underline">+91 6304506343</b>
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
        <InstagramIcon />
        <FacebookIcon />
        <LinkedinIcon />
        <ShareIcon />
      </div>
    </section>
  );
};

export default ContactSection;
