"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const Leadership = () => {
    return (
        <Section
            id="governance"
            title="Governance & Accountability"
            subtitle="Excellence through professional accountability and strategic oversight at the institutional level."
        >
            <div className="max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-extrabold text-primary font-display tracking-tight">Institutional Governance</h3>
                        <p className="text-xl text-muted leading-relaxed font-medium">
                            Bravpuls operates under a structured governance model that ensures all operations are aligned with our mission and transparent to our partners. Our board consists of industry veterans and academic leaders.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-extrabold text-primary font-display tracking-tight">Strategic Oversight</h3>
                        <p className="text-xl text-muted leading-relaxed font-medium">
                            Every initiative within the Bravpuls ecosystem undergoes rigorous strategic review to ensure technical feasibility, community impact, and long-term viability.
                        </p>
                    </motion.div>
                </div>

            </div>
        </Section>
    );
};
