"use client";

import React from "react";
import ComingSoon from "./ComingSoon";
import AboutUs from "./AboutUs";
import AboutGame from "./AboutGame";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/config/animations";

const About = () => {
  return (
    <motion.div
      className="relative w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      {/* Background image */}
      <div className="fixed top-0 left-0 inset-0 opacity-10 -z-10 w-full h-full">
        <Image
          src="/images/Texture Background.jpg"
          alt="shape"
          fill
          className="w-screen h-screen object-cover opacity-30"
        />
      </div>

      <motion.div variants={fadeInUp}>
        <AboutUs />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <ComingSoon />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <AboutGame />
      </motion.div>
    </motion.div>
  );
};

export default About;
