import { Section } from "./Section";
import { buttonVariants } from "@/components/ui/button";
import  Link  from "next/link";
import { GitHubIcon } from "./icons/GitHub";
import { TwitterIcon } from "./icons/Twitter";
import { cn } from "@/lib/utils";
import { LinkedInIcon } from "./icons/LinkedIn";

export const Header = () => {
    return (
        <header className="top-0 z-50 py-4">
            <Section className="flex items-baseline">

            <div className="flex-1">
                <nav className="flex item-center justify-between gap-2">
                    <div className="mx-auto">
                        <div className="flex items-center justify-beetween h-16">
                            <div className="flex items-center ">
                                <div className="flex items-center gap-6 max-md:hidden">
                                    <a href="#about" className="hover:text-indigo-400 duration-300 ease-in">Présentation</a>
                                    <a href="#exp" className="hover:text-indigo-400 duration-300 ease-in">Compétences</a>
                                    <a href="#projets" className="hover:text-indigo-400 duration-300 ease-in">Projets</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="flex-1" />
                <ul className="flex item-center gap-2">
                    <Link href="https://github.com/JesterVII" className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}>
                        <GitHubIcon size={14} className="text-foreground" />
                    </Link>
                    <Link href="https://x.com/JxstxrVII" className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}>
                        <TwitterIcon size={14} className="text-foreground" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/aymeric-bodin-930734325/" className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}>
                        <LinkedInIcon size={14} className="text-foreground" />
                    </Link>
                </ul>
            </Section>
        </header>   
    )
}