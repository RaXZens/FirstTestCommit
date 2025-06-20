"use client";
import React from "react";
import { motion } from "framer-motion";
import fadeIn from "../ui/variant";
import Image from "next/image";
import { GradualSpacing } from "@/components/ui/gradual.spacing";

const Banner = () => {
  return (
    <div className="ms-20  mt-30 max-sm:ms-5 max-sm:mt-2">
      <motion.div
        variants={fadeIn("right", 0.25)}
        initial={"hidden"}
        whileInView={"show"}
        className="absolute top-40 right-100 -z-1 max-sm:right-10 max-sm:top-70"
        viewport={{ once: false, amount: 0 }}
      >
        <Image src={"/cat1.png"} alt="" width={300} height={300} />
      </motion.div>
      <div className="max-sm:mt-0 ">
        <GradualSpacing text="Hi I am New Dev." />
        <motion.p
          variants={fadeIn("right", 0.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="text-light pt-2 text-lg"
        >
          I know WP Theme developer.
        </motion.p>
        <motion.div
          variants={fadeIn("right", 0.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="mt-9 flex"
        >
          <button className="hover:bg-gray-100 cursor-pointer py-3 px-7 rounded-2 border border-lime-600 me-4 text-lime-600 max-sm:px-2">
            Show Work
          </button>
          <button className="hover:bg-lime-800 cursor-pointer py-3 px-7 rounded-2 bg-lime-600 max-sm:px-2">
            Show Work
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
