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
                    title: "UI/UX Design",
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
                personnal: "Personal projects",
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
                info: "I'll get back to you in 1-2 business days."
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
                personnal: "Projets personnels",
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
                info: "Je vous répondrai dans un délai de 1 à 2 jours ouvrables."
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
