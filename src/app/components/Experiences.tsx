'use client';
//icons
import {FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaPhp, FaNodeJs, FaNpm, FaBookmark, FaGraduationCap, FaLinux} from "react-icons/fa";
import {DiMysql} from "react-icons/di";
import {SiNextdotjs, SiGnubash, SiGo, SiNuxtdotjs, SiMongodb, SiMacos} from "react-icons/si";
//components
import { Section } from "./Section";
//components/ui
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
//animations

//À propos de moi
const about = {
    title: "Renseignements",
    description:
    "En alternance chez Decathlon Digital depuis Septembre 2025 en tant que Production Expert.",
    info: [
        {
            fieldName: "Nom complet",
            fieldValue: "Aymeric BODIN"
        },
        {
            fieldName: "Téléphone",
            fieldValue: "(+33) 6 15 29 63 26"
        },
        {
            fieldName: "Discord",
            fieldValue: "gothamplaya"
        },
        {
            fieldName: "Nationalité",
            fieldValue: "Français"
        },
        {
            fieldName: "Email",
            fieldValue: "bodin.aymeric1@gmail.com"
        },
        {
            fieldName: "Languages",
            fieldValue: "Français (native), English (fluent), Spanish (fluent), German (Beginner)"
        },
    ]
};

//Expériences
const experience = {
    icon: <FaBookmark />,
    title: "Mes Expériences",
    description: "Professionnelles et personnelles.",
    items: [
        {
            company: "Decathlon Digital",
            position: "Apprentice Support Engineer",
            duration: "Septembre 2025 - Novembre 2026"
        },
        {
            company: "Intérimaire",
            position: "Facteur, Chauffeur/Livreur, Manutentionaire.",
            duration: "2021 - 2024",
        },
        {
            company: "ECOCUP France & Angleterre",
            position: "Animateur Commercial",
            duration: "Juin - Septembre 2018",
        },
        {
            company: "Production de musique indépendante",
            position: "Prises audios, Production, Mix/Mastering.",
            duration: "Juin 2017 - Actuel",
        },
    ]
};

//Éducation
const education = {
    icon: <FaGraduationCap />,
    title: "Mon Éducation",
    description: "Niveau d'études.",
    items: [
        {
            school: "Epitech Lille",
            degree: "Étudiant promo WEB ACADEMY 2027",
            duration: "Octobre 2024 - Actuel",
        },
        {
            school: "Institut Polytechnique UNILASALLE Beauvais",
            degree: "Spécialité Sciences de la Terre et Environnement en 1ère année de prépa Ingénieur",
            duration: "2017 - 2018",
        },
        {
            school: "Institut de Genech",
            degree: "Baccalauréat S spécialité Physique-Chimie mention Assez-Bien",
            duration: "2015 - 2017",
        },
    ]
};

//Compétences
const skills = {
    title: "Mes Compétences",
    description: "Techniques.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "Html 5",
        },
        {
            icon: <FaCss3Alt />,
            name: "Css 3",
        },
        {
            icon: <FaJsSquare />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <FaGitAlt />,
            name: "Git",
        },
        {
            icon: <FaPhp />,
            name: "PHP",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <FaNpm />,
            name: "NPM",
        },
        {
            icon: <DiMysql />,
            name: "MySQL",
        },
        {
            icon: <SiGnubash />,
            name: "bash",
        },
        {
            icon: <SiNuxtdotjs />,
            name: "nuxt.js",
        },
        {
            icon: <SiMongodb />,
            name: "mongodb",
        },
        {
            icon: <SiGo />,
            name: "go",
        },
        {
            icon: <SiMacos />,
            name: "Mac OS",
        },
        {
            icon: <FaLinux />,
            name: "Linux",
        },
    ]
};

export const Experiences = () => {
    return (
        <Section className="min-h-[30vh] flex items-center justify-center xl:py-0">
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="grid grid-cols-2 xl:flex xl:flex-col w-full xl:max-w-[150px] lg:w-full mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience" className="cursor-pointer">Expériences</TabsTrigger>
                        <TabsTrigger value="education" className="cursor-pointer">Éducation</TabsTrigger>
                        <TabsTrigger value="skills" className="cursor-pointer">Compétences</TabsTrigger>
                        <TabsTrigger value="about" className="cursor-pointer">À propos</TabsTrigger>
                    </TabsList>
                    {/*content*/}
                    <div className="w-full min-h-[500px]">
                        {/*experience*/}
                        <TabsContent value="experience" className="w-full">
                                <div className={`flex flex-col gap-6 text-center xl:text-left motion-preset-blur-left-lg`}>
                                    <div>
                                        <h2 className="text-4xl">{experience.title}</h2>
                                        <p className="dark:text-white/25 mx-auto xl:mx-0">{experience.description}</p>
                                    </div>
                                    <ScrollArea className="h-[400px] overflow-y-auto">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            {experience.items.map((item, index) => {
                                                return( 
                                                <li key={index} className="bg-slate-800 p-2 rounded-sm flex flex-col gap-2">
                                                    <span className="dark:text-white/75">{item.duration}</span>
                                                    <h3 className="text-xl">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-indigo-400"></span>
                                                        <p className="text-indigo-400">{item.company}</p>
                                                    </div>
                                                </li>
                                                )   
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                        </TabsContent>
                        {/*education*/}
                        <TabsContent value="education" className="w-full">
                        <div className={`flex flex-col gap-6 text-center xl:text-left motion-preset-blur-left-lg`}>
                            <div>
                                <h2 className="text-4xl">{education.title}</h2>
                                <p className="dark:text-white/25 mx-auto xl:mx-0">{education.description}</p>
                            </div>
                                <ScrollArea className="h-[400px] overflow-y-auto">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        {education.items.map((item, index) => {
                                            return( 
                                            <li key={index} className="bg-slate-800 p-2 rounded-sm flex flex-col gap-2">
                                                <span className="dark:text-white/75">{item.duration}</span>
                                                <h3>{item.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-indigo-400"></span>
                                                    <p className="text-indigo-400">{item.school}</p>
                                                </div>
                                            </li>
                                            )   
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/*skills*/}
                        <TabsContent value="skills" className="w-full">
                            <div className={`flex flex-col gap-6 text-center xl:text-left motion-preset-blur-left-lg`}>
                                <div>
                                    <h2 className="text-4xl">{skills.title}</h2>
                                    <p className="dark:text-white/25 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-6 gap-4">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-20 bg-slate-800 rounded-sm flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-indigo-400 transition-all duration-300 cursor-pointer">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/*about*/}
                        <TabsContent value="about" className="w-full">
                            <div className={`flex flex-col text-center xl:text-left gap-6 motion-preset-blur-left-lg`}>
                                <div>
                                    <h2 className="text-4xl">{about.title}</h2>
                                    <p className="dark:text-white/25 mx-auto xl:mx-0">{about.description}</p>
                                </div>
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="gap-2">
                                                <span className="text-slate-400">{item.fieldName}</span>
                                                <p>{item.fieldValue}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </Section>
    )
} 