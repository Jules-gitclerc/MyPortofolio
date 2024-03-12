import i18n from "i18next";
import {initReactI18next} from "react-i18next";

const resources = {
    en: {
        translation: {
            nav: {
                services: "Services",
                skills: "Skills",
                portfolio: "Portfolio",
                resume: "Resume",
            },
            hero: {
                title: "Freelance React Front-End Developer",
                description: "Join me below and let's start your project!",
                button: "Contact me",
                network: "My social networks"
            },
            feature: {
                title: "Need a Front-End Developer?",
                description: "I design web solutions for all types of projects, from simple landing pages to SaaS applications, mainly for SMEs. Innovative entrepreneurial initiatives particularly inspire me."
            },
            services: {
                title: "My services",
                section_1: {
                    title: "Web Development",
                    description: "I develop websites and web applications with the latest technologies. I can also help you create a website from scratch or update your existing website.",
                },
                section_2: {
                    title: "UI / UX Design",
                    description: "Design of intuitive and modern interfaces for an optimal user experience.",
                },
                section_3: {
                    title: "Web Optimization & Performance",
                    description: "Improvement of the speed and responsiveness of websites for a seamless user experience.",
                }
            },
            skills: {
                react: "Ensures modularity, speed and smooth integration for the web",
                typescript: "Strict typing, security and increased readability to JavaScript code",
                tailwind: "Customizable design and rapid development with utility classes",
                nextjs: "Optimized performance for modern web applications",
            },
            portfolio: {
                personal: "Personal projects",
                professional: "Professional projects",
                admin_dashboard: "Responsive Admin Dashboard",
                hotel_dashboard: "Responsive Hotel Dashboard",
                demo: "View demo",
                source: "View source code",
            },
            form: {
                title: "Ready to contact me?",
                subtitle: "Let's discuss how I can help elevate your project.",
                lastname: "Last Name",
                firstname: "First Name",
                email: "Email",
                message: "Message",
                details: "Details",
                company: "Company",
                send: "Send",
                info: "I'll get back to you soon.",
                confirm: "Your message has been sent.",
                description: "I will get back to you as soon as possible. Thank you for your interest in my work."
            },
            work: {
                title: "My Projects",
                section_1: {
                    title: "Deferred Social Commitments Calculation Solution for Companies.",
                    description: "As a front-end developer, I developed a sophisticated web solution for Vinci Group, aimed at streamlining and optimizing the management of their deferred social commitments. This platform, designed according to the best industrial practices, is positioned as an essential tool for Vinci Group in their quest to combine operational efficiency with analytical precision.",
                    details: {
                        point_1: {
                            title: "Smooth user experience",
                            description: "Designed to offer an exceptional user experience, the interface ensures smooth interaction and optimized data entry processes.",
                        },
                        point_2: {
                            title: "Clear data visualization",
                            description: "Advanced visualization tools are integrated to provide a clear and in-depth understanding of commitments, thus facilitating informed decision-making.",
                        },
                        point_3: {
                            title: "Interactivity and responsiveness",
                            description: "The interface responds quickly to user interactions, ensuring an optimal experience and increased efficiency in commitment management.",
                        }
                    }
                },
                section_2: {
                    title: "Booking.com Partner Website",
                    description: "As the lead developer, I orchestrated the design of a dedicated website for a partner affiliated with Booking.com, implementing modern technologies such as React.",
                    details: {
                        point_1: {
                            title: "Technology",
                            description: "Use of React to ensure a responsive and modern user interface design and development.",
                        },
                        point_2: {
                            title: "Rigorous user analysis",
                            description: "In-depth understanding of the specific needs of users to offer a tailored experience.",
                        },
                        point_3: {
                            title: "Detailed specifications",
                            description: "Development of a precise technical document, ensuring that all project requirements and specifications are clearly defined and met.",
                        }
                    }
                }
            }
        }
    },
    fr: {
        translation: {
            nav: {
                services: "Mes services",
                skills: "Mes compétences",
                portfolio: "Portfolio",
                resume: "CV",
            },
            hero: {
                title: "Développeur Front-End React Freelance",
                description: "Rejoignez-moi ci-dessous et commençons votre projet !",
                button: "Contactez-moi",
                network: "Mes réseaux sociaux"
            },
            feature: {
                title: "Besoin d'un développeur Front-End ?",
                description: "Je conçois des solutions web pour tous types de projets, de la simple landing page aux applications SaaS, principalement pour les PME. Les initiatives entrepreneuriales innovantes m'inspirent particulièrement."
            },
            services: {
                title: "Mes services",
                section_1: {
                    title: "Développement Web",
                    description: "Je développe des sites web et des applications web avec les dernières technologies. Je peux également vous aider à créer un site web à partir de zéro ou à mettre à jour votre site web existant."
                },
                section_2: {
                    title: "Conception UI/UX",
                    description: "Design d'interfaces intuitives et modernes pour une expérience utilisateur optimale."
                },
                section_3: {
                    title: "Optimisation & Performance Web",
                    description: "Amélioration de la vitesse et de la réactivité des sites pour une expérience utilisateur sans faille."
                }
            },
            skills: {
                react: "Assure modularité, rapidité et intégration fluide pour le web",
                typescript: "Apporte typage strict, sécurité et lisibilité accrue au code JavaScript",
                tailwind: "Design personnalisable et développement rapide avec des classes utilitaires",
                nextjs: "Performance optimisée pour des applications web modernes",
            },
            portfolio: {
                personal: "Projets personnels",
                professional: "Projets professionnels",
                admin_dashboard: "Tableau de bord administrateur responsive",
                hotel_dashboard: "Tableau de bord hôtel responsive",
                demo: "Voir la démo",
                source: "Voir le code source",
            },
            form: {
                title: "Prêt à me contacter ?",
                subtitle: "Discutons de la façon dont je peux vous aider à élever votre projet.",
                lastname: "Nom",
                firstname: "Prénom",
                email: "Email",
                message: "Message",
                details: "Détails",
                company: "Entreprise",
                send: "Envoyer",
                info: "Je vous répondrai bientôt.",
                confirm: "Votre message a été envoyé.",
                description: "Je vous répondrai dans les plus brefs délais. Merci pour votre intérêt pour mon travail."
            },
            work: {
                title: "Mes Missions",
                section_1: {
                    title: "Solution de calcul des engagements sociaux différés des entreprises.",
                    description: "En tant que développeur front-end, j'ai élaboré une solution web sophistiquée pour Vinci Group, visant à rationaliser et optimiser la gestion de leurs engagements sociaux différés. Cette plateforme, conçue selon les meilleures pratiques industrielles, se positionne comme un outil essentiel pour Vinci Group dans leur quête d'allier efficacité opérationnelle à précision analytique.",
                    details: {
                        point_1: {
                            title: "Expérience utilisateur fluide",
                            description: "Pensée pour offrir une expérience utilisateur exceptionnelle, l'interface garantit une interaction fluide et des processus de saisie de données optimisés.",
                        },
                        point_2: {
                            title: "Visualisation claire des données",
                            description: "Des outils de visualisation avancés sont intégrés pour offrir une compréhension claire et approfondie des engagements, facilitant ainsi une prise de décision éclairée.",
                        },
                        point_3: {
                            title: "Interactivité et réactivité",
                            description: "L'interface répond rapidement aux interactions des utilisateurs, assurant une expérience optimale et une efficacité accrue dans la gestion des engagements.",
                        }
                    }
                },
                section_2: {
                    title: "Site Web Partenaire Booking.com",
                    description: "En tant que principal développeur, j'ai orchestré la conception d'un site web dédié pour un partenaire affilié à Booking.com, en mettant en œuvre des technologies modernes telles que React.",
                    details: {
                        point_1: {
                            title: "Technologie",
                            description: "Utilisation de React pour assurer une interface utilisateur réactive et moderne.",
                        },
                        point_2: {
                            title: "Analyse utilisateur rigoureuse",
                            description: "Compréhension approfondie des besoins spécifiques des utilisateurs pour offrir une expérience adaptée.",
                        },
                        point_3: {
                            title: "Cahier des charges détaillé",
                            description: "Élaboration d'un document technique précis, garantissant que toutes les exigences et spécifications du projet soient clairement définies et respectées.",
                        }
                    }
                }
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lngs: "en", // langue par défaut
        fallbackLng: "en", // Si les traductions ne sont pas disponibles, revenir à l'anglais
        whitelist: ["en", "fr"], // Les langues disponibles
        // autres options
    });

export default i18n;
