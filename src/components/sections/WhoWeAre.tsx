"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

export const WhoWeAre = () => {
    return (
        <Section
            id="about"
            title="Institutional Architecture"
            subtitle="Bravpuls Technologies is more than a tech organization; we are a professionally governed ecosystem dedicated to the digital transformation of Africa."
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8 text-lg md:text-xl text-muted leading-relaxed font-medium"
                >
                    <p>
                        Bravpuls Technologies is a leading African tech-driven organization dedicated to empowering individuals, institutions, and communities through digital education, innovation, and modern IT solutions.
                    </p>
                    <p>
                        Established to bridge the digital divide, we combine training, consulting, innovation support, and IT services into one unified ecosystem.
                    </p>
                    <p>
                        Our governance framework ensures accountability and excellence in
                        every project we undertake, from individual training programs to
                        large-scale institutional IT consulting.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass p-10 md:p-14 rounded-[2.5rem] border-primary/5 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                    <h3 className="text-2xl font-bold text-primary mb-8 font-display">Our Core Strategy</h3>
                    <ul className="space-y-6">
                        {[
                            "Integrated Ecosystem",
                            "Practical & Real-World Training",
                            "Community-Driven Growth",
                            "Flexible Service Delivery",
                        ].map((item) => (
                            <li key={item} className="flex items-center space-x-4">
                                <div className="w-2.5 h-2.5 bg-accent rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                <span className="font-bold text-primary/80 tracking-tight">{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </Section>
    );
};
