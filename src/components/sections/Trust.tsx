"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const partners = [
    "IpayBTC",
    "TeenGirlsInBlockchain",
    "KeroLab",
    "pipys solution",
    "TwelveHundred",
];

export const Trust = () => {
    return (
        <section className="py-12 border-y border-primary/5 bg-secondary/30 overflow-hidden">
            <Container>
                <p className="text-center text-xs font-extrabold uppercase tracking-[0.4em] text-muted-foreground mb-10">
                    Our Partners
                </p>
                <div className="relative flex overflow-hidden">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="flex space-x-20 whitespace-nowrap"
                    >
                        {[...partners, ...partners].map((partner, i) => (
                            <span
                                key={i}
                                className="text-2xl md:text-3xl font-extrabold text-primary/20 hover:text-primary/40 transition-colors font-display tracking-tighter"
                            >
                                {partner}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};
