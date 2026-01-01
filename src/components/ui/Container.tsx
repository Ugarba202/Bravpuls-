import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
}

export const Container = ({
    children,
    className,
    as: Component = "div",
}: ContainerProps) => {
    return (
        <Component
            className={cn("container mx-auto px-4 md:px-6 max-w-7xl", className)}
        >
            {children}
        </Component>
    );
};
