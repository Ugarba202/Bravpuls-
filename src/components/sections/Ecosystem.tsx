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
        description: "World-class digital skills training for the next generation of African tech leaders.",
        icon: BookOpen,
        size: "md:col-span-2",
        color: "bg-blue-500/10",
    },
    {
        title: "Innovation Hub",
        description: "Collaborative research and prototyping space.",
        icon: Lightbulb,
        size: "md:col-span-1",
        color: "bg-cyan-500/10",
    },
    {
        title: "Tech Community",
        description: "Vibrant network of young professionals and mentors.",
        icon: Users,
        size: "md:col-span-1",
        color: "bg-indigo-500/10",
    },
    {
        title: "IT Services",
        description: "Institutional-grade software development and infrastructure solutions.",
        icon: Settings,
        size: "md:col-span-2",
        color: "bg-purple-500/10",
    },
    {
        title: "Events & Strategy",
        description: "Advisory services for digital transformation.",
        icon: Calendar,
        size: "md:col-span-3",
        color: "bg-accent/10",
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
                        <SpotlightCard className="h-full flex flex-col justify-between group">
                            <div>
                                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform`}>
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
