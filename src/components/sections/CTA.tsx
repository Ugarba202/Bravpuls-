"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export const CTA = () => {
    return (
        <section id="join" className="py-24 md:py-40">
            <Container>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#255EFF] rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(37,94,255,0.5)]"
                >
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-10 font-display leading-[1.1]">
                            Join Us in Building Africa's Future
                        </h2>
                        <p className="text-xl md:text-3xl text-white/70 mb-16 font-medium leading-relaxed">
                            Whether you are an institution looking for a partner or a professional seeking growth, there is a place for you in the Bravpuls ecosystem.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto px-12">
                                Explore Ecosystem
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto px-12">
                                Partner With Us
                            </Button>
                        </div>
                    </div>

                    {/* High-end decorative elements */}
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-accent/20 to-transparent pointer-events-none" />
                    <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[100px]" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] mix-blend-overlay" />
                </motion.div>
            </Container>
        </section>
    );
};
