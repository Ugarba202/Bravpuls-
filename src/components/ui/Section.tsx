"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { motion } from "framer-motion";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    title?: string;
    subtitle?: string;
    light?: boolean;
}

export const Section = ({
    children,
    className,
    id,
    title,
    subtitle,
    light = false,
}: SectionProps) => {
    return (
        <section
            id={id}
            className={cn(
                "py-20 md:py-32",
                light ? "bg-secondary" : "bg-background",
                className
            )}
        >
            <Container>
                {(title || subtitle) && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-12 md:mb-16 max-w-3xl"
                    >
                        {title && (
                            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-lg md:text-xl text-muted leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                    </motion.div>
                )}
                {children}
            </Container>
        </section>
    );
};
