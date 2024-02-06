"use client"

import React from 'react'
import SectionHeading from './section-heading';
import { motion }  from "framer-motion";
import { useSectionInView } from '@/lib/hooks';



export default function About() {

    const { ref } = useSectionInView("About");

      return (
        <motion.section
          ref={ref}
          className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          id="about"
        >
          <SectionHeading>About me </SectionHeading>
          <p className=" mb-3">
            With over 5 years of experience,
            <span className="font-medium">
              I am confident that my technical skills, passion for innovation, and
              commitment to quality can significantly contribute to your company{" "}
            </span>
            . My experience ranges from designing and executing test cases to
            efficient automation using tools such as{" "}
            <span className="font-medium">Selenium, and Cucumber </span>
            <span className="font-medium">
              {" "}
              I have played a key role in developing and maintaining tests for
              microservices,
            </span>
            .{" "}
            <span className="italic">
              as well as successfully implementing CI/CD pipelines to ensure
              continuous and efficient delivery.
            </span>{" "}
            is the problem-solving aspect. I <span className="underline">love</span>{" "}
            the feeling of finally figuring out a solution to a problem.
          </p>
        </motion.section>
      );
}
