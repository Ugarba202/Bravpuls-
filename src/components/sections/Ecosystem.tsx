"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import {
    BookOpen,
    Lightbulb,
    Users,
    Settings,
    Calendar,
    ArrowUpRight,
} from "lucide-react";

const ecosystemItems = [
    {
        title: "Training Academy",
        description: "Equipping individuals and organizations with practical, in-demand digital skills through hands-on training.",
        icon: BookOpen,
        size: "md:col-span-2",
        color: "bg-blue-500/10",
    },
    {
        title: "Research & Innovation Hub",
        description: "A collaborative space for ideation, experimentation, and transforming ideas into viable digital solutions.",
        icon: Lightbulb,
        size: "md:col-span-1",
        color: "bg-cyan-500/10",
    },
    {
        title: "Bravpuls Community",
        description: "Nurturing relationships and long-term engagement among tech enthusiasts, learners, and partners.",
        icon: Users,
        size: "md:col-span-1",
        color: "bg-indigo-500/10",
    },
    {
        title: "IT Services",
        description: "Professional, scalable, and reliable IT solutions for businesses, NGOs, and institutions.",
        icon: Settings,
        size: "md:col-span-2",
        color: "bg-purple-500/10",
    },
    {
        title: "Events & Consulting",
        description: "Impactful technology events and strategic advisory services driving digital transformation.",
        icon: Calendar,
        size: "md:col-span-1",
        color: "bg-pink-500/10",
    },
    {
        title: "Administration & Operations",
        description: "Ensuring effective governance, internal coordination, and operational efficiency.",
        icon: ArrowUpRight, // Using a generic icon for now, or Shield if available
        size: "md:col-span-2",
        color: "bg-slate-500/10",
    },
];

export const Ecosystem = () => {
    return (
        <Section
            id="ecosystem"
            title="The Bento Ecosystem"
            subtitle="A modular framework designed for radical scalability and institutional excellence."
            light
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ecosystemItems.map((item, i) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={item.size}
                    >
                        <SpotlightCard className="h-full flex flex-col justify-between group bg-white border-transparent hover:border-[#2A4DB8]/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(42,77,184,0.1)] transition-all duration-300">
                            <div>
                                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-8 border border-transparent group-hover:scale-110 transition-transform`}>
                                    <item.icon className="text-primary" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4 font-display flex items-center gap-2">
                                    {item.title}
                                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" size={20} />
                                </h3>
                                <p className="text-lg text-muted leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
