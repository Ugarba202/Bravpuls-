"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import {
    Monitor,
    Smartphone,
    Server,
    Shield,
    Wifi,
    Cpu,
    Headphones,
    Code
} from "lucide-react";

const services = [
    {
        title: "Web & Web Apps",
        description: "Custom websites and robust web applications tailored to your business needs.",
        icon: Monitor,
    },
    {
        title: "Mobile Development",
        description: "Native and cross-platform mobile apps for iOS and Android.",
        icon: Smartphone,
    },
    {
        title: "Cloud & Infrastructure",
        description: "Scalable cloud deployment, hosting, and infrastructure management.",
        icon: Server,
    },
    {
        title: "Cybersecurity",
        description: "Security audits and awareness initiatives to protect your digital assets.",
        icon: Shield,
    },
    {
        title: "Network Solutions",
        description: "CCTV installation, network configuration, and digital infrastructure setup.",
        icon: Wifi,
    },
    {
        title: "Business Automation",
        description: "Streamlining operations with custom digital transformation systems.",
        icon: Cpu,
    },
    {
        title: "IT Support",
        description: "Reliable technical helpdesk and ongoing maintenance support.",
        icon: Headphones,
    },
    {
        title: "Tech Consulting",
        description: "Expert project management and technical strategy advisory.",
        icon: Code,
    },
];

export const Services = () => {
    return (
        <Section
            id="services"
            title="Professional IT Services"
            subtitle="Reliable, scalable, and institutional-grade technology solutions driving business growth."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, i) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group p-8 rounded-3xl bg-white border border-transparent shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(37,94,255,0.1)] transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="w-12 h-12 bg-[#255EFF]/5 rounded-xl flex items-center justify-center mb-6 text-[#255EFF] group-hover:bg-[#255EFF] group-hover:text-white transition-colors duration-300">
                            <service.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-3 font-display">{service.title}</h3>
                        <p className="text-sm text-muted leading-relaxed font-medium">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
