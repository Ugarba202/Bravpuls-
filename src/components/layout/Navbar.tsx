"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Ecosystem", href: "#ecosystem" },
    { name: "About Us", href: "#about" },
    { name: "IT Services", href: "#services" },
    { name: "Join Us", href: "#join" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "glass border-b py-3 shadow-sm"
                    : "bg-transparent py-5"
            )}
        >
            <Container className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-4 group">
                    <img
                        src="/logo-optimized.png"
                        alt="Bravpuls Technologies"
                        className="h-16 md:h-20 w-auto transition-all duration-300 group-hover:scale-105 filter drop-shadow-md"
                    />
                    {/* <span className="text-2xl md:text-4xl font-extrabold text-[#2A4DB8] tracking-tight font-display italic">
                        Technologies
                    </span> */}
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold text-muted hover:text-accent transition-colors tracking-tight"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        size="sm"
                        className="rounded-full bg-[#2A4DB8] hover:bg-[#2A4DB8]/90 shadow-lg shadow-[#2A4DB8]/20 transition-all hover:scale-105"
                    >
                        Partner With Us
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </Container>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b absolute top-full left-0 right-0 overflow-hidden"
                    >
                        <Container className="py-6 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-muted hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="w-full rounded-full bg-[#2A4DB8] hover:bg-[#2A4DB8]/90">Partner With Us</Button>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
