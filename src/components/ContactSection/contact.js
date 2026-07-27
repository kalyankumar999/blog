"use client";

import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  ShareIcon,
} from "../../assets/social-icons";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function ContactSection() {
  const handleShare = async () => {
    const shareUrl = "https://kalyanblog.vercel.app/";

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out my blog",
          url: shareUrl,
        });
        toast.success("Thanks for sharing!");
      } catch (error) {
        toast.error("Error sharing");
      }
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(shareUrl).then(
        () => {
          toast({
            description: "Link copied to clipboard!",
          });
        },
        (err) => {
          console.error("Could not copy text: ", err);
        }
      );
    }
  };

  return (
    <section
      id="connect"
      className="md:mx-[120px] px-[16px] md:px-0 pb-10 animate-slide-in-up"
    >
      <h3 className="uppercase font-oswald font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 md:text-xl text-lg md:mb-5 mb-3 md:text-3xl">
        Contact me
      </h3>

      <div className="flex w-full gap-10 md:flex-nowrap flex-wrap">
        <div className="glass-morphism rounded-2xl p-6 md:p-8 hover-lift flex-1">
          <p className="font-satoshi md:text-lg text-md mb-6 text-gray-200 leading-relaxed">
            Feel free to reach out to me for any inquiries, collaboration
            opportunities, or just to say hello! I'm available via email and
            phone, and you can also connect with me on LinkedIn for professional
            networking. Looking forward to hearing from you!
          </p>
          <div className="space-y-4">
            <div className="flex gap-3 items-center">
              <Phone className="text-cyan-400" size={24} />
              <a
                href={`tel:${"+91 6304506343"}`}
                className="text-cyan-300 hover:text-purple-300 transition-colors font-medium cursor-pointer hover:underline"
              >
                +91 6304506343
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <Mail className="text-pink-400" size={24} />
              <a
                href={`mailto:${"avulakalyan2001@gmail.com"}`}
                className="text-pink-300 hover:text-cyan-300 transition-colors font-medium cursor-pointer hover:underline"
              >
                avulakalyan2001@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 gap-6">
        <Link
          target="_blank"
          href="https://www.instagram.com/crazy_guy_kalyan?utm_source=qr&igsh=MXRucnV4NmN3NHdrbg=="
        >
          <div className="glass-morphism-vibrant p-3 rounded-full hover-lift hover:animate-glow">
            <InstagramIcon />
          </div>
        </Link>
        <Link target="_blank" href="https://www.facebook.com">
          <div className="glass-morphism-vibrant p-3 rounded-full hover-lift hover:animate-glow">
            <FacebookIcon />
          </div>
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/kalyan-kumar-avula-765554223/"
        >
          <div className="glass-morphism-vibrant p-3 rounded-full hover-lift hover:animate-glow">
            <LinkedinIcon />
          </div>
        </Link>
        <button onClick={handleShare} aria-label="Share">
          <div className="glass-morphism-vibrant p-3 rounded-full hover-lift hover:animate-glow">
            <ShareIcon />
          </div>
        </button>
      </div>
    </section>
  );
}
