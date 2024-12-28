"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick"

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        },
    ]
}

const integrationLogos = [
  { name: "Close", logo: "/logos/close.webp" },
  { name: "GoHighLevel", logo: "/logos/ghl.webp" },
  { name: "HubSpot", logo: "/logos/hubspot.webp" },
  { name: "Make.com", logo: "/logos/make.webp" },
  { name: "Salesforce", logo: "/logos/salesforce.webp" },
  { name: "Smart Moving", logo: "/logos/smartmoving.webp" },
  { name: "Zoho", logo: "/logos/zoho.webp" },
];

export default function Integrations() {
  return (
    <section className="py-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our AI Integrates with
          </h2>
          <p className="text-3xl text-[#8B8B8B] italic">
            6000+ Apps!
          </p>
          <p className="mt-6 text-[#8B8B8B]">
            In a world where every interaction counts, voice AI is not just a luxury, it's a 
            necessity. DialWise.ai offers you the golden opportunity to level using Voice AI to 
            your advantage. Our AI-powered solution seamlessly integrates with your existing 
            tech stack through our CRM API sync with sophisticated capabilities that let you 
            operate in the existing business landscape, solidifying your spot in the marketplace.
          </p>
        </div>

          <div className="flex justify-center items-center space-x-8 overflow-hidden">
                  {integrationLogos.map((integration, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative grayscale hover:grayscale-0 transition-all duration-300"
                    >
                      <Image
                        src={integration.logo}
                        alt={integration.name}
                        width={124}
                        height={38}
                        className="object-contain dark:fill-white fill-black"
                      />
                    </motion.div>
                  ))}
          </div>
      </motion.div>
    </section>
  );
}