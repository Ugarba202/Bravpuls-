"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}

export const SpotlightCard = ({
    children,
    className,
    containerClassName,
}: SpotlightCardProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        setMouseX(clientX - left);
        setMouseY(clientY - top);
    }

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className={cn(
                "group relative rounded-3xl border border-white/10 bg-white/5 p-8 transition-shadow hover:shadow-xl",
                containerClassName
            )}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
                }}
            />
            <div className={cn("relative z-10", className)}>{children}</div>
        </div>
    );
};
