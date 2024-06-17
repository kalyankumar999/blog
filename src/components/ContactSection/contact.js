import React from "react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, ShareIcon } from "@/assets/social-icons";
// import { Facebook ,Instagram} from "lucide-react";
// import InstaSVG from '../../../public/social/insta.svg'

const ContactSection = () => {
  return (
    <section
      id="connect"
      className="md:mx-[120px] px-[16px] md:px-0 md:pt-[110px] pt-[62px] pb-10 flex justify-center flex-col items-center"
    >
        <h3 className="uppercase font-oswald font-semibold text-white md:text-xl text-lg md:mb-5 mb-3">
        Contact me
      </h3>
       <p className="font-satoshi text-white md:text-lg  text-md mb-3 md:mb-6 max-w-[800px] flex flex-col justify-center items-center">
        Contact me through phone calls with the contact number <b className="cursor-pointer hover:underline">+91 6304506343</b>
        <span>or</span>
         <span>Fill the form</span>
      </p>
     
      <div className=" w-full  gap-4  rounded-lg flex flex-col justify-center items-center ">
        
      
          <form className="p-1 w-full max-w-[600px] ">
            <fieldset className="flex flex-col gap-2 mb-4">
              <label className="font-oswald font-normal text-white">Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="block  px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 focus:outline-none"
              />
            </fieldset>
            <fieldset className="flex flex-col gap-2 mb-4">
              <label className="font-oswald font-normal text-white">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="block  px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 focus:outline-none"
              />
            </fieldset>
            <fieldset className="flex flex-col gap-2 mb-4">
              <label className="font-oswald font-normal text-white">Subject</label>
              <input
                type="text"
                placeholder="Enter Subject"
                className="block  px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 focus:outline-none"
              />
            </fieldset>
            <fieldset className="flex flex-col gap-2 mb-4">
              <label className="font-oswald font-normal text-white">Message</label>
              <textarea
                className="block  px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 focus:outline-none"
              ></textarea>
            </fieldset>
            <button
              className="py-2 px-5 bg-blue-400 text-white rounded-lg "
              type="submit"
            >
              Submit
            </button>
          </form>
          <div className="flex justify-start mt-4 gap-4">
           <InstagramIcon/>
        <FacebookIcon />
        <LinkedinIcon />
        <ShareIcon/>
          </div>
        </div>
    </section>
  );
};

export default ContactSection;
