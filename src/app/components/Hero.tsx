import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { Spacing } from "./Spacing";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Code = ({className ,...props}: ComponentPropsWithoutRef<"span">) => {
    return <span className={cn("bg-accent/30 hover:bg-accent/60 transition-colors border border-accent px-1 py-0.5 rounded-sm",className)}{...props} />
}

export const Hero = () => {
    return <Section className="flex max-lg:flex-col items-start gap-4">
        <div className="flex-[2] motion-preset-blur-right-lg duration-1500">
            <h2 className="text-5xl text-indigo-500">Aymeric Bodin</h2>
            <h3 className="text-3xl text-indigo-500 dark:text-white/25 mb-4">
                Web Dev & Support Apprentice
            </h3>
            <Link href="/CV_Aymeric_Bodin.pdf" download><Code className="hover:motion-preset-blur-right-sm">Télécharger mon CV</Code></Link>
            <Spacing size="sm" />
            <p>
                Étudiant WEB Développeur chez <Link href="https://www.epitech.eu/"><Code className="hover:motion-preset-blur-right-sm">Epitech Lille</Code></Link>.
            </p>
            <p>
                En alternance chez Decathlon digital depuis Septembre 2025 en tant que Production Expert.
            </p>
        </div>
        <div className="flex-1 max-md:m-auto ml-auto">
            <img src="/assets/profilePic.png" className="w-full h-auto rounded-full outline-2 max-w-sm max-md:w-56 motion-preset-blur-left-lg duration-1500" alt="Jester's profile picture" />
        </div>
    </Section>
}   