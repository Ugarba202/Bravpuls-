"use client";

import React, { useEffect, useRef } from "react";
import { Section } from "@/components/ui/Section";
import { motion, useMotionValue, animate } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Bravpuls Academy transformed my career trajectory. The hands-on training gave me the confidence to secure my first role as a Frontend Engineer.",
    author: "Abdullahi Salmat",
    role: "Graduate, Web Development",
    image: "/sal_mat.jpeg",
  },
  {
    quote:
      "Their IT services team didn't just install a network; they architected a solution that scaled with our NGO's rapid growth across three regions.",
    author: "Usman Umar Garba",
    role: "Operations Director, GreenFuture NGO",
    image: "/Garba.jpeg",
  },
  {
    quote:
      "The Innovation Hub proved to be the perfect incubator for our startup. Access to mentors and a community of builders made all the difference.",
    author: "Abdullahi Salmat U.",
    role: "Co-Founder, EdTech Solutions",
    image: "/sal_mat.jpeg",
  },
  {
    quote:
      "Being part of a community that pushes you to innovate every single day shaped my professional growth in ways I never imagined.",
    author: "Usman Umar Garba",
    role: "Alumni",
    image: "/Garba.jpeg",
  },
  {
    quote:
      "Building real-world projects during the program gave me the confidence to handle complex engineering tasks professionally.",
    author: "Abdullahi Salmat",
    role: "Alumni",
    image: "/sal_mat.jpeg",
  },
  {
    quote:
      "The balance between theory and practice prepared me for the real world far beyond expectations.",
    author: "Usman Umar Garba",
    role: "Alumni",
    image: "/Garba.jpeg",
  },
];

// Duplicate for seamless loop
const marqueeItems = [...testimonials, ...testimonials];

export const Testimonials = () => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const totalWidth = containerRef.current.scrollWidth / 2;

    const controls = animate(x, [-0, -totalWidth], {
      duration: 25, // faster, demo-friendly
      ease: "linear",
      repeat: Infinity,
    });

    return controls.stop;
  }, [x]);

  return (
    <Section
      id="testimonials"
      title="Community Voices"
      subtitle="The impact of our ecosystem, told by the people we serve."
      className="bg-secondary/30"
    >
      <div className="overflow-hidden">
        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex gap-8"
        >
          {marqueeItems.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: -5,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="
                bg-white rounded-3xl p-8
                shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]
                hover:shadow-[0_25px_70px_-15px_rgba(42,77,184,0.25)]
                flex flex-col
                min-h-[380px]
                min-w-[300px] sm:min-w-[360px]
              "
            >
              <Quote className="text-[#2A4DB8]/20 mb-6" size={40} />

              <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                “{t.quote}”
              </p>

              {/* Author pinned to bottom */}
              <div className="flex items-center gap-4 mt-auto pt-8">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/10"
                />
                <div>
                  <h4 className="font-bold text-primary text-sm">
                    {t.author}
                  </h4>
                  <p className="text-xs text-[#2A4DB8] font-bold uppercase tracking-wider">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
