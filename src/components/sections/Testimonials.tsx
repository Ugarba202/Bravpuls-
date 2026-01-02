"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

/* 
  Senior Engineer Note:
  Using a clean, grid-based layout for testimonials. 
  Cards are pure white with a very subtle, high-quality shadow to lift them off the page.
  Typography is set to differentiate the quote (Serif or relaxed Sans) from the bio.
*/

const testimonials = [
    {
        quote: "Bravpuls Academy transformed my career trajectory. The hands-on training gave me the confidence to secure my first role as a Frontend Engineer.",
        author: "Sarah N.",
        role: "Graduate, Web Development",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
    },
    {
        quote: "Their IT services team didn't just install a network; they architected a solution that scaled with our NGO's rapid growth across three regions.",
        author: "David O.",
        role: "Operations Director, GreenFuture NGO",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
    },
    {
        quote: "The Innovation Hub proved to be the perfect incubator for our startup. Access to mentors and a community of builders made all the difference.",
        author: "Amara K.",
        role: "Co-Founder, EdTech Solutions",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
    },
];

export const Testimonials = () => {
    return (
        <Section
            id="testimonials"
            title="Community Voices"
            subtitle="The impact of our ecosystem, told by the people we serve."
            className="bg-secondary/30"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-8 rounded-3xl relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(42,77,184,0.15)] transition-all duration-300 hover:-translate-y-1"
                    >
                        <Quote className="text-[#2A4DB8]/20 mb-6" size={40} />
                        <p className="text-lg text-foreground/80 leading-relaxed mb-8 font-medium">
                            "{t.quote}"
                        </p>
                        <div className="flex items-center gap-4">
                            <img
                                src={t.image}
                                alt={t.author}
                                className="w-12 h-12 rounded-full object-cover border-2 border-primary/10"
                            />
                            <div>
                                <h4 className="font-bold text-primary text-sm">{t.author}</h4>
                                <p className="text-xs text-[#2A4DB8] font-bold uppercase tracking-wider">{t.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
