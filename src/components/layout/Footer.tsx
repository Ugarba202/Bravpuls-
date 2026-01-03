"use client"
import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-react"; // 1. Added ArrowUpRight
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#2A4DB8] text-white py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Grid: 4 Columns on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
                    
                    {/* Column 1: Logo & Summary */}
                    <div className="flex flex-col">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <img
                                src="/logo-transparent.png"
                                alt="Bravpuls Technologies"
                                className="h-10 w-auto brightness-0 invert"
                            />
                            <span className="text-xl font-bold tracking-tight">
                                Technologies
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-white/90">
                            Equipping individuals and organizations to solve real-world problems through practical training and world-class digital solutions.
                        </p>
                    </div>

                    {/* Column 2: Ecosystem */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Ecosystem</h3>
                        <ul className="space-y-4">
                            {["Training Academy", "Research & Innovation Hub", "Bravpuls Community", "IT Services", "Events & Consulting"].map((item) => (
                                <li key={item}>
                                    {/* Added 'group' and 'flex items-center' */}
                                    <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors flex items-center group">
                                        {item}
                                        {/* Tiny arrow that appears on hover */}
                                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-0 group-hover:-translate-y-1" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Organization */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Organization</h3>
                        <ul className="space-y-4">
                            {["About Us", "Governance", "Leadership", "Partnerships"].map((item) => (
                                <li key={item}>
                                    {/* Added 'group' and 'flex items-center' */}
                                    <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors flex items-center group">
                                        {item}
                                        {/* Tiny arrow that appears on hover */}
                                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-0 group-hover:-translate-y-1" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Connect */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Connect</h3>
                        <div className="flex gap-4">
                            {[Linkedin, Twitter, Facebook, Instagram, Mail].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    whileHover={{ scale: 1.1 }}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all border border-white/20"
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-white/70 text-sm">
                    <p>© {currentYear} Bravpuls Technologies. All rights reserved.</p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}