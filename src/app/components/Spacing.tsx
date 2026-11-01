import { cn } from "@/lib/utils";

export type SpacingProps = {
    size?: "sm" | "md" | "lg"; 
}

export const Spacing = ({size = "md"}: SpacingProps) => {
    return <div className={cn({
        "h-8 lg:h-16": size === "sm",
        "h-8 lg:h-32": size === "md",
        "h-8 lg:h-64": size === "lg",
    })}></div>;
} 