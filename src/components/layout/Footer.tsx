import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Linkedin, Twitter, Mail, Facebook, Instagram } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#2A4DB8] text-white py-12 md:py-20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <img
                                src="/logo-transparent.png"
                                alt="Bravpuls Technologies"
                                className="h-10 md:h-12 w-auto brightness-0 invert filter drop-shadow-lg"
                            />
                            <span className="text-lg md:text-xl font-bold text-white tracking-tight font-display">
                                Technologies
                            </span>
                        </Link>
                        <p className="text-white text-sm leading-relaxed max-w-xs">
                            Building Africa's digital future through institutional-grade
                            innovation, education, and professional IT services.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-white">Ecosystem</h4>
                        <ul className="space-y-4 text-white text-sm">
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Training Academy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Innovation Hub
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Tech Community
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    IT Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-white">Organization</h4>
                        <ul className="space-y-4 text-white text-sm">
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Governance
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Leadership
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Partnerships
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-white">Connect</h4>
                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                                aria-label="Twitter"
                            >
                                <Twitter size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                                aria-label="Contact Us"
                            >
                                <Mail size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-white/80 text-xs">
                    <p>© {currentYear} Bravpuls Technologies. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
