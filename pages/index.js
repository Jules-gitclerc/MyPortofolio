import {ValidationError, useForm} from "@formspree/react";
import {useTranslation} from "next-i18next";
import Image from "next/image";
import {useEffect, useState} from "react";
import adminDashboard from "../public/admin-dashboard.png";
import hotelDashboard from "../public/hotel-dashboard.png";
import nextjsDarkLogo from "../public/nextjs-dark-logo.png";
import nextjsWhiteLogo from "../public/nextjs-white-logo.png";
import reactLogo from "../public/react-logo.png";
import tailwindLogo from "../public/tailwind-logo.png";
import typescriptLogo from "../public/typescript-logo.png";
import NavBar from "./components/navBar";
import HeroSection from "./components/heroSection";
import ProfileSection from "./components/profileSection";
import ServiceSection from "./components/serviceSection";
import SkillSection from "./components/skillSection";
import PortfolioSection from "./components/portfolioSection";
import ProjectSection from "./components/projectSection";
import StackSection from "./components/stackSection";
import FormSection from "./components/formSection";
import Footer from "./components/footer";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const {t, i18n} = useTranslation();

    return (
        <div className={darkMode ? "dark bg-gray-900" : ""}>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} t={t} i18n={i18n}/>
            <main className="bg-white dark:bg-gray-900">
                <HeroSection t={t} darkMode={darkMode}/>
                <ProfileSection t={t}/>
                <ServiceSection t={t}/>
                <SkillSection t={t} darkMode={darkMode}/>
                <div className="border-t border-gray-200 dark:border-gray-700"></div>
                <PortfolioSection t={t}/>x
                <ProjectSection t={t}/>
                <StackSection t={t}/>
                <FormSection t={t}/>
            </main>
            <Footer t={t}/>
        </div>
    );
}
