"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = () => {
    const words = "Architecting Africa's Digital Future".split(" ");
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 50]);
    const y2 = useTransform(scrollY, [0, 300], [0, -30]);
    const opacity = useTransform(scrollY, [0, 200], [1, 0]);

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
            <Container className="relative z-10">
                <motion.div
                    style={{ opacity }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-primary mb-8 font-display leading-[0.9]">
                            {words.map((word, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.1 + 0.5,
                                        ease: "easeOut",
                                    }}
                                    className="inline-block mr-2 md:mr-4"
                                >
                                    {word === "Africa's" ? (
                                        <span className="text-accent underline decoration-accent/20 decoration-8 underline-offset-8">
                                            {word}
                                        </span>
                                    ) : (
                                        word
                                    )}
                                </motion.span>
                            ))}
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="text-lg md:text-2xl text-muted leading-relaxed mb-12 max-w-2xl mx-auto font-medium"
                        >
                            Bravpuls Technologies is a state-of-the-art ecosystem bridging the gap between talent and industry through institutional excellence.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6"
                        >
                            <Button size="lg" className="w-full sm:w-auto px-10">
                                Explore Ecosystem
                            </Button>
                            <Button size="lg" variant="outline" className="w-full sm:w-auto px-10">
                                Partner With Us
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </Container>

            {/* Cinematic Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none overflow-hidden">
                <motion.div
                    style={{ y: y1 }}
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-accent/10 rounded-full blur-[120px]"
                />
                <motion.div
                    style={{ y: y2 }}
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-primary/5 rounded-full blur-[150px]"
                />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay" />
            </div>
        </section>
    );
};
