"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Shield, Target, Award } from "lucide-react";
import { motion } from "framer-motion";

export const Vision = () => {
    const values = [
        {
            title: "Excellence",
            desc: "Setting world-class standards in everything we build and teach.",
            icon: Award,
        },
        {
            title: "Integrity",
            desc: "Governed by professional ethics and radical transparency.",
            icon: Shield,
        },
        {
            title: "Impact",
            desc: "Measuring success by the scalable growth of our community.",
            icon: Target,
        },
    ];

    return (
        <Section
            id="vision"
            title="Vision, Mission & Values"
            subtitle="Guided by a commitment to institutional-grade technology governance."
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((v, i) => (
                    <motion.div
                        key={v.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <SpotlightCard className="h-full">
                            <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mb-8 text-white shadow-xl shadow-accent/20">
                                <v.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4 font-display">{v.title}</h3>
                            <p className="text-lg text-muted leading-relaxed font-medium">{v.desc}</p>
                        </SpotlightCard>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-24 p-12 md:p-24 bg-[#2A4DB8] text-white rounded-[3rem] relative overflow-hidden shadow-2xl shadow-[#2A4DB8]/30"
            >
                <div className="relative z-10 max-w-3xl">
                    <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-8">Executive Mission</h3>
                    <p className="text-3xl md:text-5xl font-extrabold leading-[1.1] font-display text-white tracking-tight">
                        To architect a resilient digital ecosystem where African talent and organizations thrive at global standards.
                    </p>
                </div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full -mr-32 -mt-32 blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-20 -mb-20 blur-[80px]" />
            </motion.div>
        </Section>
    );
};
