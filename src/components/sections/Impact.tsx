"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

const stats = [
    { label: "Talents Trained", value: "2,500+" },
    { label: "Innovation Projects", value: "120+" },
    { label: "Community Members", value: "10,000+" },
    { label: "Solutions Delivered", value: "450+" },
];

export const Impact = () => {
    return (
        <Section
            id="impact"
            title="Impact & Outcomes"
            subtitle="Measurable results driving continental digital transformation through technical excellence."
            light
        >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="text-center lg:text-left group"
                    >
                        <div className="text-4xl md:text-5xl font-extrabold text-primary mb-4 font-display tracking-tighter group-hover:text-accent transition-colors duration-500">
                            {stat.value}
                        </div>
                        <div className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors duration-500">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
