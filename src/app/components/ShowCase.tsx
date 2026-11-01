//icons
import {FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaNodeJs, FaBootstrap} from "react-icons/fa";
import {DiMysql} from "react-icons/di";
import {SiTailwindcss, SiNextdotjs, SiGnubash, SiShadcnui, SiHtml5, SiGo, SiNuxtdotjs, SiMongodb, SiVuedotjs, SiJavascript, SiCss3} from "react-icons/si";
//components/ui
import { Section } from "./Section";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

//projets
const projects = {
    items: [
        {
            title: "Portfolio",
            description: "Ce portfolio est bien évidemment l'un de mes projets.",
            icons: [
                    <SiNextdotjs key="next" />, <SiTailwindcss key="tailwind" />, <SiShadcnui key="shadcn" />
            ],
            detailed_description: [
                {
                    header_title: '🚀 Mon Portfolio - Next.js & TailwindCSS',
                    header_description: 'Ce portfolio est un projet personnel visant à présenter mon parcours, mes compétences et mes projets.',
                    features: [
                        '✅ Présentation avec téléchargement du CV et lien vers Epitech Lille',
                        '✅ Tabs interactifs : Expériences, Compétences, Éducation & Infos',
                        '✅ Affichage des projets avec description détaillée',
                        "✅ Formulaire de contact avec envoi d'email"
                    ],
                    techs: [
                        '- ⚛️ Next.js - Framework React performant',
                        '- 🎨 TailwindCSS - Design moderne & responsive',
                        '- 🧩 ShadCN/UI - Composants interactifs'
                    ],
                    titres: [
                        "- 🎓 RNCP38436BC01 - Cadrer un projet et conceptualiser une solution web",
                        "- 🎓 RNCP31114BC01 - Développer la partie front-end d'une application web ou web mobile en intégrant les recommandations de sécurité",
                        "- 🎓 RNCP34650BC02 – Développer un site ou une application web",
                        "- 🎓 RNCP34650BC04 – Assurer la mise en service sécurisée",
                        "- 🎓 RNCP34650BC05 – Référencement et accessibilité",
                        "- 🎓 RNCP34779BC01 – Développer un site Web",
                        "- 🎓 RNCP31114BC01 – Développer la partie front-end d'une application web ou web mobile",
                        "- 🎓 RNCP38436 – Développeur web",
                    ],
                    images: [
                        '/assets/portfolio/portfolioScreen.png',
                        '/assets/portfolio/portfolioScreen2.png',
                        '/assets/portfolio/portfolioScreen3.png',
                        '/assets/portfolio/portfolioScreen4.png',
                        '/assets/portfolio/portfolioScreen5.png',
                    ],
                }
            ]
        },
        {
            title: "cssGenerator",
            description: "Script PHP générant deux fichiers sprite.png et sprite.css compilant plusieurs images.",
            icons: [
                    <SiGnubash key="bash" />, <FaPhp key="php" />, <FaCss3Alt key="css" />
            ],
            detailed_description: [
                {
                    header_title: '🌅 cssGenerator - PHP & Bash',
                    header_description: "Ce projet est un programme PHP permettant de concaténer toutes les images PNG présentes dans un dossier (et ses éventuels sous-dossier) afin de générer un fichier CSS qui permet d'utiliser cette concaténation sous forme de sprite",
                    features: [
                        '✅ Concaténation des images : tout les fichiers png du dossier et ses éventuels sous-dossiers',
                        '✅ Génération du fichier CSS : à partir du sprite généré',
                        '✅ -r, --recursive : cette option permet de chercher les fichiers png de manière récursive',
                        "✅ -i, --output-image=IMAGE : cette option permet d'appliquer un nom pour le fichier sprite (sprite.png par défault)",
                        "✅ -s, --output-style=IMAGE : cette option permet d'appliquer un nom pour le fichier css (style.css par défault)",
                    ],
                    techs: [
                        '- 🧩 PHP ',
                        '- 💻 Bash',
                    ],
                    titres: [
                        "- 🎓 RNCP35959BC01 – Formaliser un besoin numérique",
                    ],
                    images: [
                        '/assets/cssGenerator/cssGeneratorScreen.png',
                        '/assets/cssGenerator/cssGeneratorScreen2.png',
                    ],
                }
            ]
        },
        {
            title: "MyMeetic",
            description: "Simulation d'un site de rencontre avec back-end en PHP MVC OOP",
            icons: [
                    <FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJsSquare key="js" />, <FaPhp key="php" />, <DiMysql key="mysql" />
            ],
                        detailed_description: [
                {
                    header_title: '♟️ My Meetic - PHP MVC OOP',
                    header_description: "Simulation d'un site de rencontre sur le modèle de Meetic. Ici il s'agit d'un site dédié aux amateurs de jeux de sociétés / jeux de plateau.",
                    features: [
                        "✅ Formulaire d'inscription et de connexion",
                        '✅ Page de compte avec gestionnaire de compte (éditer ou supprimer le compte)',
                        '✅ Recherche de membres via formulaire',
                        '✅ Back-End orienté objet avec structure MVC',
                    ],
                    techs: [
                        '- 💻 PHP - En MVC OOP côté Back-End',
                        '- 🐬 MySql - Pour la gestion des données',
                    ],
                    titres: [
                        "- 🎓 RNCP31114BC01 - Développer la partie front-end d'une application web ou web mobile en intégrant les recommandations de sécurité",
                    ],
                    images: [
                        '/assets/myMeetic/myMeeticScreen.png',
                        '/assets/myMeetic/myMeeticScreen2.png',
                        '/assets/myMeetic/myMeeticScreen3.png',
                        '/assets/myMeetic/myMeeticScreen4.png',
                        '/assets/myMeetic/myMeeticScreen5.png',
                    ],
                }
            ]
        },
        {
            title: "Tweet Academy",
            description: "Reproduction du site X avec back-end en node.js express",
            icons: [
                    <FaHtml5 key="html" />, <FaBootstrap key="bootstrap" />, <FaJsSquare key="js" />, <FaNodeJs key="node" />, <DiMysql key="mysql" />
            ],
                        detailed_description: [
                {
                    header_title: '🆇 Tweet Academy - Node.js Express & bootstrap.css',
                    header_description: "Reproduction du site 'X' avec Node.js Express (Back-End) et le framework bootstrap.css (Front-End)",
                    features: [
                        '✅ Inscription nouveaux membres et connexion',
                        '✅ Authentification cryptée au format ripemd160',
                        '✅ Tweets de 140 charactères max avec ajouts de hashtags(#), mentions(@) et retweets',
                        '✅ Section de recherche de tags(#) et utilisateurs',
                        "✅ Système de follow et unfollow",
                        "✅ Affichage des followers et followings",
                        "✅ Gestionnaire du compte membre (éditer son profil)",
                    ],
                    techs: [
                        '- 💻 Next.js express - En MVC OOP côté Back-End',
                        '- 🐬 MySql - Pour la gestion des données',
                        '- 🎨 BootsrapCSS - Design moderne & responsive',
                    ],
                    titres: [
                        "- 🎓 RNCP38436BC01 - Cadrer un projet et conceptualiser une solution web",
                        "- 🎓 RNCP31114BC01 - Développer la partie front-end d'une application web ou web mobile en intégrant les recommandations de sécurité",
                        "- 🎓 RNCP34650BC03 – Programmer et gérer les bases de données",
                        "- 🎓 RNCP34779BC01 – Développer un site Web",
                        "- 🎓 RNCP34779BC02 – Développer une application Web spécifique",
                        "- 🎓 RNCP35687BC01 – Participer au projet web",
                        "- 🎓 RNCP35687BC02 – Développer des interfaces frontend",
                        "- 🎓 RNCP35687BC03 – Développer des fonctionnalités backend",
                        "- 🎓 RNCP35959BC03 – Créer et gérer un site web dynamique",
                        "- 🎓 RNCP36076BC01 – Contribuer au cadrage d’un site web",
                        "- 🎓 RNCP36076BC02 – Développer l’interface",
                        "- 🎓 RNCP37273BC01 – Préparer un projet web",
                        "- 🎓 RNCP37273BC02 – Développer le frontend",
                        "- 🎓 RNCP37273BC03 – Développer le backend",
                        "- 🎓 RNCP31114BC02 – Développer la partie back-end d'une application web ou web mobile",
                        "- 🎓 RNCP37273 – Développeur web full stack",
                        "- 🎓 RNCP36076 – Développeur intégrateur web",
                        "- 🎓 RNCP35959 – Développeur web",
                        "- 🎓 RNCP35687 – Développeur Intégrateur Web",
                        "- 🎓 RNCP34650 – Développeur intégrateur web",
                    ],
                    images: [
                        '/assets/tweetAcademy/tweetScreen.png',
                        '/assets/tweetAcademy/tweetScreen2.png',
                        '/assets/tweetAcademy/tweetScreen3.png',
                        '/assets/tweetAcademy/tweetScreen4.png',
                        '/assets/tweetAcademy/tweetScreen5.png',
                        '/assets/tweetAcademy/tweetScreen6.png',
                        '/assets/tweetAcademy/tweetScreen7.png',
                        '/assets/tweetAcademy/tweetScreen8.png',
                        '/assets/tweetAcademy/tweetScreen9.png',
                    ],
                }
            ]
        },
        {
            "title": "GuessWhat",
            "description": "Un jeu multijoueur inspiré de Pictionary, développé en Go et Nextjs.",
            "icons": [
                <SiGo key="go" />, <SiNextdotjs key="nextjs" />, <SiHtml5 key="html" />, <SiShadcnui key="shadcn" />
            ],
            "detailed_description": [
                {
                    "header_title": '🎨 GuessWhat - Jeu Multijoueur en Temps Réel (Go & WebSockets)',
                    "header_description": 'GuessWhat est une application web interactive de type Pictionary multijoueur, développée dans le cadre d\'Epitech. Elle permet à plusieurs utilisateurs de dessiner, chatter et deviner des mots en direct via un serveur Go hautement concurrentiel.',
                    "features": [
                        '✅ Architecture client-serveur avec communication en temps réel par WebSockets',
                        '✅ Gestion de la concurrence en Go via des Goroutines et des Mutex pour sécuriser l\'état partagé',
                        '✅ Système d\'échange de données structuré en JSON avec typage dynamique des messages',
                        '✅ Salon de discussion (Chat) interactif avec historique et gestion des pseudos',
                        '✅ Canevas de dessin dynamique synchronisé en direct entre tous les participants',
                        '✅ Système de gestion des rooms (création, rejoindre, démarrage de partie)'
                    ],
                    "techs": [
                        '- 🐹 Go (Golang) - Backend performant',
                        '- 🔌 WebSockets - Communication bidirectionnelle en temps réel',
                        '- 🌐 ShadcnUI - Interface front-end interactive et Canvas de dessin',
                    ],
                    "titres": [
                        "- 🎓 RNCP38436BC01 - Cadrer un projet et conceptualiser une solution web",
                        "- 🎓 RNCP31114BC01 - Développer la partie front-end d'une application web ou web mobile en intégrant les recommandations de sécurité",
                        "- 🎓 RNCP34650BC02 – Développer un site ou une application web",
                        "- 🎓 RNCP34650BC04 – Assurer la mise en service sécurisée",
                        "- 🎓 RNCP34650BC05 – Référencement et accessibilité",
                        "- 🎓 RNCP34779BC01 – Développer un site Web",
                        "- 🎓 RNCP31114BC01 – Développer la partie front-end d'une application web ou web mobile",
                        "- 🎓 RNCP38436 – Développeur web"
                    ],
                    "images": [
                        '/assets/guessWhat/guesswhatScreen.png',
                        '/assets/guessWhat/guesswhatScreen2.png',
                        '/assets/guessWhat/guesswhatScreen3.png',
                        '/assets/guessWhat/guesswhatScreen4.png',
                        '/assets/guessWhat/guesswhatScreen5.png',
                        '/assets/guessWhat/guesswhatScreen6.png',
                        '/assets/guessWhat/guesswhatScreen7.png'
                    ]
                }
            ]
        },
        {
            "title": "PokéCard Store",
            "description": "Site e-ecommerce & refonte éco-responsable / accessibilité",
            "icons": [
                <SiNuxtdotjs key="nuxt" />, <SiMongodb key="mongodb" />, <SiVuedotjs key="vue" />
            ],
            "detailed_description": [
                {
                    "header_title": '🌱 PokéCard Store - V2 Éco-conception & Accessibilité',
                    "header_description": 'Évolution d’une V1 e-commerce collaborative de vente de cartes Pokémon vers une V2 optimisée (Nuxt.js & MongoDB). Ce projet met l’accent sur la réduction de l’empreinte carbone, l’amélioration des performances, l’accessibilité numérique (RGAA/WCAG) et la démonstration du ROI.',
                    "features": [
                        '✅ Diagnostic environnemental initial et mesure des performances (Lighthouse, GreenIT)',
                        '✅ Optimisation drastique du poids des pages (compression des images, formats WebP, lazy-loading)',
                        '✅ Audit et mise en conformité accessibilité (respect des contrastes, balisage sémantique, navigation au clavier, attributs ARIA)',
                        '✅ Amélioration conjointe du SEO, des performances et de l’expérience utilisateur (UX)',
                        '✅ Analyse comparative (delta chiffré) entre la V1 et la V2 pour prouver le ROI écologique et financier'
                    ],
                    "techs": [
                        '- 💚 Nuxt.js - Framework Vue.js performant (SSR/Optimisations front)',
                        '- 🍃 MongoDB - Base de données NoSQL flexible et performante',
                        '- 📊 Lighthouse & GreenIT - Outils d’audit et de mesure d’impact environnemental',
                        '- ♿ RGAA / WCAG - Référentiel général d’amélioration de l’accessibilité'
                    ],
                    "titres": [
                        "- 🎓 RNCP38436BC01 - Cadrer un projet et conceptualiser une solution web",
                        "- 🎓 RNCP31114BC01 - Développer la partie front-end d'une application web ou web mobile en intégrant les recommandations de sécurité",
                        "- 🎓 RNCP34650BC02 – Développer un site ou une application web",
                        "- 🎓 RNCP34650BC04 – Assurer la mise en service sécurisée",
                        "- 🎓 RNCP34650BC05 – Référencement et accessibilité",
                        "- 🎓 RNCP34779BC01 – Développer un site Web",
                        "- 🎓 RNCP31114BC01 – Développer la partie front-end d'une application web ou web mobile",
                        "- 🎓 RNCP38436 – Développeur web"
                    ],
                    "images": [
                        '/assets/pokecard/pokecardScreen.png',
                        '/assets/pokecard/pokecardScreen2.png',
                        '/assets/pokecard/pokecardScreen3.png',
                    ]
                }
            ]
        },
        {
            "title": "Bataille Navale - Jeu de Stratégie (Battleship)",
            "description": "Application web interactive de Bataille Navale.",
            "icons": [
                <SiJavascript key="javascript" />, <SiHtml5 key="html5" />, <SiCss3 key="css3" />
            ],
            "detailed_description": [
                {
                    "header_title": "⚓ Bataille Navale (Battleship) - Jeu Stratégique Modulaire",
                    "header_description": "Jeu de plateau interactif classique opposant un joueur humain à une intelligence artificielle. Le projet repose sur une architecture JavaScript modulaire et propre, gérant une machine à états séquentielle pour le déroulement des tours de jeu.",
                    "features": [
                        "✅ Phase d’initialisation interactive pour le placement manuel et la rotation des navires du joueur",
                        "✅ Positionnement aléatoire de la flotte adverse généré automatiquement par l'ordinateur",
                        "✅ Machine à états séquentielle gérant l'ordre des phases (init joueur, init adversaire, tours de jeu, game over)",
                        "✅ Intelligence artificielle adaptative avec stratégies de tir (modes facile et ciblage intelligent)",
                        "✅ Utilisation du pattern Fabrique (Factory) pour l'instanciation dynamique des différents types de navires"
                    ],
                    "techs": [
                        "- 💛 JavaScript (ES6+) - Logique applicative, gestion des événements et design patterns",
                        "- 🌐 HTML5 / CSS3 - Intégration et mise en page dynamique des grilles de combat",
                        "- 🧩 Architecture Modulaire - Séparation claire des responsabilités (game.js, player.js, computer.js, shipFactory.js, utils.js)"
                    ],
                    "titres": [
                        "- 🎓 RNCP38436BC01 - Cadrer un projet et conceptualiser une solution web",
                        "- 🎓 RNCP31114BC01 - Développer la partie front-end d'une application web ou web mobile en intégrant les recommandations de sécurité",
                        "- 🎓 RNCP34650BC02 – Développer un site ou une application web",
                        "- 🎓 RNCP34650BC04 – Assurer la mise en service sécurisée",
                        "- 🎓 RNCP34779BC01 – Développer un site Web",
                        "- 🎓 RNCP38436 – Développeur web"
                    ],
                    "images": [
                        "/assets/battleship/battleshipScreen.png",
                        "/assets/battleship/battleshipScreen2.png",
                        "/assets/battleship/battleshipScreen3.png",
                    ]
                }
            ]
        }
    ]
}

export const ShowCase = () => {
    return(
        <Section className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start">
                <h3 className="text-4xl">Mes Projets</h3>
                <p className="dark:text-white/25 mx-auto xl:mx-0">Professionnels et Personnels</p>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                    {projects.items.map((items, index) => {
                        return(
                            <Card key={index} className="relative rounded-sm pb-0 pt-5.5" style={{ clipPath: 'polygon(0% 0%, 15% 0%, 18% 8%, 100% 8%, 100% 100%, 0% 100%)', border:"1px solid oklch(1 0 0 / 10%)" }}>
                                <Card key={index} className="flex justify-center items-start rounded-sm p-4 hover:cursor-pointer hover:border-indigo-400 duration-300 min-h-65">
                                    <CardTitle className="text-xl">{items.title}</CardTitle>
                                    <CardDescription>{items.description}</CardDescription>
                                    <div className="flex justify-center items-center gap-4">
                                        <p className="dark:text-white/25 mx-auto xl:mx-0">Technologies :</p>
                                        {items.icons.map((icon,i) => {
                                            return (
                                                <div className="align-middle text-xl" key={i}>{icon}</div>
                                            )
                                        })}
                                    </div>
                                    <Sheet>
                                        <SheetTrigger asChild>
                                            <Button className="hover:cursor-pointer" variant="outline">Details</Button>
                                        </SheetTrigger>
                                        <SheetContent side="right" className="!w-screen !max-w-screen !h-full">
                                            <SheetHeader>
                                                <SheetTitle className="text-3xl p-4 flex items-center justify-center motion-preset-blur-left-lg duration-1000 max-md:duration-1000">{items.title}</SheetTitle>
                                            </SheetHeader>
                                                <div className="mt-4 overflow-auto p-4 max-md:p-2 m-10 max-md:m-2 max-h-[80vh] whitespace-pre-wrap text-sm font-mono bg-gray-900 text-white rounded-lg px-10 motion-preset-blur-right-lg duration-1000 max-md:duration-1000">
                                                    {items.detailed_description.map((sheet, i) => {
                                                        return (
                                                            <div key={i}>
                                                                <h4 className="text-2xl font-bold">{sheet.header_title}</h4>
                                                                <p className="p-4">{sheet.header_description}</p>
                                                                <h4 className="text-xl font-bold">📌 Fonctionnalités</h4>
                                                                <ul className="p-4">{sheet.features.map((feat, j) => {
                                                                    return <li key={j} className="p-1">{feat}</li>
                                                                })}</ul>
                                                                <h4 className="text-xl font-bold">🏗️ Technologies Utilisées</h4>
                                                                <ul className="p-4">{sheet.techs.map((tech, j) => {
                                                                    return <li key={j} className="p-1">{tech}</li>
                                                                })}</ul>
                                                                <h4 className="text-xl font-bold">🛠️ Titres RNCP</h4>
                                                                <ul className="p-4">{sheet.titres.map((titre, j) => {
                                                                    return <li key={j} className="p-1">{titre}</li>
                                                                })}</ul>
                                                                <h4 className="text-xl font-bold">📸 Aperçu</h4>
                                                                <ul className="p-4 grid grid-cols-3 max-md:grid-cols-1">{sheet.images.map((image, k) => {
                                                                    return <li key={k} className="p-1">
                                                                            <a href={image} target="_blank"><img src={image} alt="project screen" className="rounded-sm"/></a>
                                                                        </li>
                                                                })}</ul>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                        </SheetContent>
                                    </Sheet>
                                </Card>
                            </Card>
                        )
                    })}
            </div>
        </Section>
    )
}