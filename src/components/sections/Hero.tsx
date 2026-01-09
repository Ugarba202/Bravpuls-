"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = () => {
    const words = "Driving a Digital-First Africa".split(" ");
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 50]);
    const y2 = useTransform(scrollY, [0, 300], [0, -30]);
    const opacity = useTransform(scrollY, [0, 200], [1, 0]);

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-left"
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-primary mb-8 font-display leading-[0.95]">
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
                                    className="inline-block mr-2 lg:mr-3"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-lg font-medium"
                        >
                            We empower individuals, institutions, and communities through accessible technology, practical training, and world-class digital solutions.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                            className="flex flex-col sm:flex-row items-center gap-4"
                        >
                            <Button size="lg" className="w-full sm:w-auto px-8 rounded-full bg-[#255EFF] hover:bg-[#255EFF]/90 shadow-lg shadow-[#255EFF]/20">
                                Explore Ecosystem
                            </Button>
                            <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 rounded-full border-primary/20 hover:bg-secondary">
                                Partner With Us
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Hero Visual - Premium Floating Composition */}
                    <div className="relative z-10 hidden lg:block h-[600px] w-full">
                        {/* Main Large Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, rotate: -2 }}
                            animate={{ opacity: 1, y: 0, rotate: -2 }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            className="absolute top-10 left-0 w-[65%] h-[400px] rounded-[2rem] overflow-hidden shadow-[0_30px_90px_-20px_rgba(37,94,255,0.3)] border-4 border-white z-20"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Collaborative Tech Team"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>

                        {/* Secondary Floating Image (Top Right) */}
                        <motion.div
                            initial={{ opacity: 0, y: -40, x: 40, rotate: 3 }}
                            animate={{ opacity: 1, y: 0, x: 0, rotate: 3 }}
                            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                            className="absolute top-0 right-4 w-[45%] h-[280px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/80 z-10"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=600&q=80"
                                alt="Coding Interface"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#255EFF]/10 mix-blend-multiply" />
                        </motion.div>

                        {/* Tertiary Floating Image (Bottom Right) */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, x: 40 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                            className="absolute bottom-20 right-0 w-[50%] h-[300px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-30"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
                                alt="Community Planning"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 hover:rotate-1"
                            />
                        </motion.div>

                        {/* Animated Decorative Blob */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 90, 0],
                            }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#255EFF]/20 to-accent/10 rounded-full blur-[80px] -z-10"
                        />
                    </div>
                </div>
            </Container>

            {/* Background Ambient Gradients */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#255EFF]/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/5 rounded-full blur-[100px]" />
            </div>
        </section>
    );
};
