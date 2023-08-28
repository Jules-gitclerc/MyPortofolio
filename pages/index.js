import pictureProfile from "../public/picture-profile.png";
import maltIcon from "../public/malt-icon.png";
import linkedinIcon from "../public/linkedin-icon.png";
import githubIcon from "../public/github-icon.png";
import githubDarkIcon from "../public/icons8-github-100.png";
import codepenIcon from "../public/codepen-icon.png";
import reactLogo from "../public/react-logo.png";
import typescriptLogo from "../public/typescript-logo.png";
import tailwindLogo from "../public/tailwind-logo.png";
import nextjsDarkLogo from "../public/nextjs-dark-logo.png";
import nextjsWhiteLogo from "../public/nextjs-white-logo.png";
import adminDashboard from "../public/admin-dashboard.png";
import hotelDashboard from "../public/hotel-dashboard.png";
import Image from "next/image";
import {useTranslation} from 'next-i18next'
import {useState} from 'react'

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const {t, i18n} = useTranslation()
    const [activeTab, setActiveTab] = useState('tabs-with-card-1');
    const [isOpen, setIsOpen] = useState(false);

    const handleChangeEn = () => {
        i18n.changeLanguage('en')
        setIsOpen(false)
    }

    const handleChangeFr = () => {
        i18n.changeLanguage('fr')
        setIsOpen(false)
    }

    return (
        <div className={darkMode ? "dark bg-gray-900" : ""}>
            <header
                className="sticky top-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
                <nav
                    className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
                    aria-label="Global">
                    <div className="flex items-center justify-between">
                        <a className="flex-none text-xl font-semibold dark:text-white" href="#"
                           aria-label="Brand">Jules Clerc</a>
                        <div className="sm:hidden">
                            <button type="button"
                                    className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                    data-hs-collapse="#navbar-collapse-with-animation"
                                    aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                                <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16"
                                     fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                                <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16"
                                     fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="navbar-collapse-with-animation"
                         className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                        <div
                            className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
                            <a className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#services"
                               aria-current="page">
                                {t('nav.services')}
                            </a>
                            <a className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                               href="#skills">
                                {t('nav.skills')}
                            </a>
                            <a className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                               href="#portfolio">
                                {t('nav.portfolio')}
                            </a>
                            <button onClick={() => window.open("https://linkedin.com/in/jules-clerc")}
                                    className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800">
                                <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </button>

                            <button
                                className="py-2 px-3 inline-flex justify-end items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-600 hover:bg-blue-50 hover:border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:hover:bg-blue-600/[.3] dark:border-slate-700 dark:hover:border-blue-500 dark:hover:text-blue-500"
                            >
                                {t('resume')}
                            </button>

                            <button onClick={() => setDarkMode(!darkMode)}
                                    className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-l sm:border-gray-300 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500">
                                {darkMode ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
                                    </svg>

                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
                                    </svg>
                                }
                            </button>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex justify-center items-center gap-2 font-medium text-slate-600 hover:text-slate-500 text-sm dark:text-slate-400 dark:hover:text-slate-300"
                            >
                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                     fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                                </svg>
                                {i18n.language === 'fr' ? "Français (FR)" : "English (US)"}
                            </button>

                            {isOpen && (
                                <div
                                    className="absolute top-full right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800">
                                    <div className="py-1 rounded-md bg-white shadow-xs" role="menu"
                                         aria-orientation="vertical">
                                        <button onClick={handleChangeEn}
                                                className="block w-full px-4 py-2 text-center text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                                                role="menuitem">English (US)
                                        </button>
                                        <button onClick={handleChangeFr}
                                                className="block w-full px-4 py-2 text-center text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                                                role="menuitem">Français (FR)
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
            <main className="bg-white dark:bg-gray-900">
                <section
                    className={"min-h-screen flex items-center justify-center md:mt-0 mt-5 px-10 md:px-20 lg:px-40"}>
                    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                            <div className="lg:col-span-3">
                                <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
                                    {t('hero.title')}
                                </h1>
                                <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
                                    {t('hero.description')}
                                </p>

                                <div className="mt-5 lg:mt-8 flex items-center">
                                    <a href={"#Form"} className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
                                        {t('hero.button')}
                                    </a>
                                </div>

                                <div className="mt-6 lg:mt-12">
                                    <span className="text-xs font-medium text-gray-800 uppercase dark:text-gray-200">
                                        {t('hero.network')}
                                    </span>
                                    <div className="flex gap-16 py-3 text-gray-600 dark:text-gray-400">
                                        <div
                                            className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transform transition-transform duration-500 ease-in-out hover:scale-110"
                                            onClick={() => window.open("https://linkedin.com/in/jules-clerc")}>
                                            <Image src={linkedinIcon} alt="LinkedIn"/>
                                        </div>
                                        <div
                                            className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transform transition-transform duration-500 ease-in-out hover:scale-110"
                                            onClick={() => window.open("https://github.com/Jules-gitclerc")}>
                                            {darkMode ?
                                                <Image src={githubDarkIcon} alt="GitHubDark"/>
                                                :
                                                <Image src={githubIcon} alt="GitHubWhite"/>
                                            }
                                        </div>
                                        <div
                                            className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transform transition-transform duration-500 ease-in-out hover:scale-110"
                                            onClick={() => window.open("https://codepen.io/Surfy971")}>
                                            <Image src={codepenIcon} alt="CodePen"/>
                                        </div>
                                        <div
                                            className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transform transition-transform duration-500 ease-in-out hover:scale-110"
                                            onClick={() => window.open("https://www.malt.fr/profile/julesclerc1")}>
                                            <Image src={maltIcon} alt="Malt"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-4 mt-10 lg:mt-0">
                                <img className="w-full rounded-xl max-h-[700px] object-cover"
                                     src={"https://images.unsplash.com/photo-1618477371303-b2a56f422d9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3164&q=80"}
                                     alt="Image Description"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                            <div>
                                <Image className="rounded-xl"
                                       src={pictureProfile}
                                       alt="Image Description"/>
                            </div>
                            <div className="mt-5 sm:mt-10 lg:mt-0">
                                <div className="space-y-6 sm:space-y-8">
                                    <div className="space-y-2 md:space-y-4">
                                        <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                                            {t('feature.title')}
                                        </h2>
                                        <p className="text-gray-500">
                                            {t('feature.description')}
                                        </p>
                                    </div>
                                    <ul role="list" className="grid grid-cols-2 md:grid-cols-4 gap-5">
                                        <li className="flex space-x-3">
                                            <svg className="flex-shrink-0 h-6 w-6 text-green-600 dark:text-green-500"
                                                 width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                                                    fill="currentColor" fillOpacity="0.1"/>
                                                <path
                                                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                                                    fill="currentColor"/>
                                            </svg>
                                            <span className="text-sm sm:text-base text-gray-500">
                                                <span className="font-bold">React</span>
                                            </span>
                                        </li>
                                        <li className="flex space-x-3">
                                            <svg className="flex-shrink-0 h-6 w-6 text-green-600 dark:text-green-500"
                                                 width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                                                    fill="currentColor" fillOpacity="0.1"/>
                                                <path
                                                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                                                    fill="currentColor"/>
                                            </svg>

                                            <span className="text-sm sm:text-base text-gray-500">
                                                <span className="font-bold">Tailwind</span>
                                            </span>
                                        </li>
                                        <li className="flex space-x-3">
                                            <svg className="flex-shrink-0 h-6 w-6 text-green-600 dark:text-green-500"
                                                 width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                                                    fill="currentColor" fillOpacity="0.1"/>
                                                <path
                                                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                                                    fill="currentColor"/>
                                            </svg>

                                            <span className="text-sm sm:text-base text-gray-500">
                                                <span className="font-bold">Material UI</span>
                                            </span>
                                        </li>
                                        <li className="flex space-x-3">
                                            <svg className="flex-shrink-0 h-6 w-6 text-green-600 dark:text-green-500"
                                                 width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                                                    fill="currentColor" fillOpacity="0.1"/>
                                                <path
                                                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                                                    fill="currentColor"/>
                                            </svg>
                                            <span className="text-sm sm:text-base text-gray-500">
                                                <span className={"font-bold"}>Next.js</span>
                                            </span>
                                        </li>
                                        <li className="flex space-x-3">
                                            <svg className="flex-shrink-0 h-6 w-6 text-green-600 dark:text-green-500"
                                                 width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                                                    fill="currentColor" fillOpacity="0.1"/>
                                                <path
                                                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                                                    fill="currentColor"/>
                                            </svg>
                                            <span className="text-sm sm:text-base text-gray-500">
                                                <span className={"font-bold"}>Typescript</span>
                                            </span>
                                        </li>
                                        <li className="flex space-x-3">
                                            <svg className="flex-shrink-0 h-6 w-6 text-green-600 dark:text-green-500"
                                                 width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                                                    fill="currentColor" fillOpacity="0.1"/>
                                                <path
                                                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                                                    fill="currentColor"/>
                                            </svg>
                                            <span className="text-sm sm:text-base text-gray-500">
                                                <span className={"font-bold"}>Flutter</span>
                                            </span>
                                        </li>
                                        <li className="col-span-2 flex space-x-3">
                                            <svg className="flex-shrink-0 h-6 w-6 text-green-600 dark:text-green-500"
                                                 width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                                                    fill="currentColor" fillOpacity="0.1"/>
                                                <path
                                                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                                                    fill="currentColor"/>
                                            </svg>
                                            <span className="text-sm sm:text-base text-gray-500">
                                                <span className={"font-bold"}>Clean Architecture</span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={"services"} className={"bg-gray-100 dark:bg-gray-800 px-10 md:px-20 lg:px-40"}>
                    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        <div className="relative p-6 md:p-16">
                            <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                                <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                                    <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
                                        {t('services.title')}
                                    </h2>
                                    <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
                                        {/*Button 1*/}
                                        <button type="button" onClick={() => setActiveTab('tabs-with-card-1')}
                                                className={`${activeTab === 'tabs-with-card-1' ? 'bg-white shadow-md hover:border-transparent dark:bg-slate-900' : ''} text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hover:bg-gray-700 active`}
                                                id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1"
                                                aria-controls="tabs-with-card-1" role="tab">
                                                <span className="flex">
                                                    <svg
                                                        className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
                                                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                                </svg>
                                                 <span className="grow ml-6">
                                                    <span
                                                        className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">{t('services.section_1.title')}</span>
                                                    <span
                                                        className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">{t('services.section_1.description')}</span>
                                                </span>
                                            </span>
                                        </button>
                                        {/*Button 2*/}
                                        <button type="button" onClick={() => setActiveTab('tabs-with-card-2')}
                                                className={`${activeTab === 'tabs-with-card-2' ? 'bg-white shadow-md hover:border-transparent dark:bg-slate-900' : ''} text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hover:bg-gray-700 active`}
                                                id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2"
                                                aria-controls="tabs-with-card-2" role="tab">
                                            <span className="flex">
                                                    <svg
                                                        className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" strokeWidth={1.5}
                                                        stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"/>
                                                    </svg>
                                                    <span className="grow ml-6">
                                                        <span
                                                            className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">{t('services.section_2.title')}</span>
                                                        <span
                                                            className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">{t('services.section_2.description')}</span>
                                                        </span>
                                                    </span>
                                        </button>
                                        {/*Button 3*/}
                                        <button type="button" onClick={() => setActiveTab('tabs-with-card-3')}
                                                className={`${activeTab === 'tabs-with-card-3' ? 'bg-white shadow-md hover:border-transparent dark:bg-slate-900' : ''} text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hover:bg-gray-700 active`}
                                                id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3"
                                                aria-controls="tabs-with-card-3" role="tab">
                                            <span className="flex">
                                                <svg
                                                    className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"/>
                                                </svg>
                                                <span className="grow ml-6">
                                                    <span
                                                        className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">{t('services.section_3.title')}</span>
                                                    <span
                                                        className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">{t('services.section_3.description')}</span>
                                                </span>
                                            </span>
                                        </button>
                                    </nav>
                                </div>
                                <div className="lg:col-span-6">
                                    <div className="relative">
                                        <div>
                                            <div id="tabs-with-card-1" role="tabpanel"
                                                 aria-labelledby="tabs-with-card-item-1"
                                                 className={activeTab === 'tabs-with-card-1' ? '' : 'hidden'}>
                                                <img
                                                    className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                                                    src={"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3272&q=80"}
                                                    alt="Image Description"/>
                                            </div>

                                            <div id="tabs-with-card-2" role="tabpanel"
                                                 aria-labelledby="tabs-with-card-item-2"
                                                 className={activeTab === 'tabs-with-card-2' ? '' : 'hidden'}>
                                                <img
                                                    className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                                                    src={"https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3164&q=80"}
                                                    alt="Image Description"/>
                                            </div>

                                            <div id="tabs-with-card-3" role="tabpanel"
                                                 aria-labelledby="tabs-with-card-item-3"
                                                 className={activeTab === 'tabs-with-card-3' ? '' : 'hidden'}>
                                                <img
                                                    className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                                                    src={"https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"}
                                                    alt="Image Description"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
                                <div
                                    className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="border-t border-gray-200 dark:border-gray-700"></div>
                <section id={"skills"}>
                    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
                            <div
                                className="group flex flex-col justify-center items-center text-center transform transition-transform duration-500 ease-in-out hover:scale-110 rounded-xl p-4 md:p-7">
                                <div className="flex justify-center items-center w-12 h-12">
                                    <Image src={reactLogo} alt={"React Logo"}/>
                                </div>
                                <div className="mt-5">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">React</h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                                        {t('skills.react')}
                                    </p>
                                </div>
                            </div>
                            <div
                                className="group flex flex-col justify-center items-center text-center transform transition-transform duration-500 ease-in-out hover:scale-110 rounded-xl p-4 md:p-7">
                                <div className="flex justify-center items-center w-12 h-12">
                                    <Image src={typescriptLogo} alt={"Typescript Logo"}/>
                                </div>
                                <div className="mt-5">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Typescript</h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                                        {t('skills.typescript')}
                                    </p>
                                </div>
                            </div>
                            <div
                                className="group flex flex-col justify-center items-center text-center transform transition-transform duration-500 ease-in-out hover:scale-110 rounded-xl p-4 md:p-7">
                                <div className="flex justify-center items-center w-12 h-12">
                                    <Image src={tailwindLogo} alt={"Tailwind Logo"}/>
                                </div>
                                <div className="mt-5">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Tailwind</h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                                        {t('skills.tailwind')}
                                    </p>
                                </div>
                            </div>
                            <div
                                className="group flex flex-col justify-center items-center text-center transform transition-transform duration-500 ease-in-out hover:scale-110 rounded-xl p-4 md:p-7">
                                <div className="flex justify-center items-center w-12 h-12">
                                    {darkMode ?
                                        <Image src={nextjsWhiteLogo} alt={"NextJS Logo"}/>
                                        :
                                        <Image src={nextjsDarkLogo} alt={"NextJS Logo"}/>
                                    }
                                </div>
                                <div className="mt-5">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Next.js</h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                                        {t('skills.nextjs')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="border-t border-gray-200 dark:border-gray-700"></div>
                <section id={"portfolio"} className={"bg-gray-100 dark:bg-gray-800 px-10 md:px-20 lg:px-40"}>
                    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
                            <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200">
                                Portfolio
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div
                                className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <div
                                    className="h-52 flex flex-col justify-center items-center rounded-t-xl relative overflow-hidden">
                                    <Image
                                        src={adminDashboard}
                                        alt={"Admin Dashboard"}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="p-4 md:p-6">
                                <span
                                    className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                                    {t('portfolio.personnal')}
                                </span>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                                        {t('portfolio.admin_dashboard')}
                                    </h3>
                                    <div className="mt-3 flex flex-row space-x-2 h-28 w-28">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48"
                                             viewBox="0 0 48 48">
                                            <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                                            <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                                            <path fill="#FFF"
                                                  d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
                                            <path fill="#EEE"
                                                  d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48"
                                             viewBox="0 0 48 48">
                                            <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                                            <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                                            <path fill="#FFF"
                                                  d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path>
                                            <path fill="#EEE"
                                                  d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48"
                                             viewBox="0 0 48 48">
                                            <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                                            <path fill="#000001"
                                                  d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                                    <button onClick={() => window.open("https://codepen.io/Surfy971/full/MWZwoVN")}
                                            className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                        {t('portfolio.demo')}
                                    </button>
                                    <button onClick={() => window.open("https://codepen.io/Surfy971/pen/MWZwoVN")}
                                            className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                        {t('portfolio.source')}
                                    </button>
                                </div>
                            </div>
                            <div
                                className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <div
                                    className="h-52 flex flex-col justify-center items-center rounded-t-xl relative overflow-hidden">
                                    <Image src={hotelDashboard}
                                           alt={"Hotel Dashboard"}
                                           layout="fill"
                                           objectFit="cover"/>
                                </div>
                                <div className="p-4 md:p-6">
                               <span
                                   className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                                    {t('portfolio.personal')}
                                </span>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                                        {t('portfolio.hotel_dashboard')}
                                    </h3>
                                    <div className="mt-3 flex flex-row space-x-2 h-28 w-28">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48"
                                             viewBox="0 0 48 48">
                                            <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                                            <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                                            <path fill="#FFF"
                                                  d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
                                            <path fill="#EEE"
                                                  d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48"
                                             viewBox="0 0 48 48">
                                            <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                                            <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                                            <path fill="#FFF"
                                                  d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path>
                                            <path fill="#EEE"
                                                  d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48"
                                             viewBox="0 0 48 48">
                                            <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                                            <path fill="#000001"
                                                  d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                                    <button onClick={() => window.open("https://codepen.io/Surfy971/full/dywYoay")}
                                            className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                        {t('portfolio.demo')}
                                    </button>
                                    <button onClick={() => window.open("https://codepen.io/Surfy971/pen/dywYoay")}
                                            className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                        {t('portfolio.source')}
                                    </button>
                                </div>
                            </div>
                            <div
                                className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <div
                                    className="h-52 flex flex-col justify-center items-center bg-amber-500 rounded-t-xl">
                                    <svg className="w-28 h-28" width="56" height="56" viewBox="0 0 56 56" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <rect width="56" height="56" rx="10" fill="white"/>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M23.7326 11.968C21.9637 11.9693 20.5321 13.4049 20.5334 15.1738C20.5321 16.9427 21.965 18.3782 23.7339 18.3795H26.9345V15.1751C26.9358 13.4062 25.5029 11.9706 23.7326 11.968C23.7339 11.968 23.7339 11.968 23.7326 11.968M23.7326 20.5184H15.2005C13.4316 20.5197 11.9987 21.9553 12 23.7242C11.9974 25.4931 13.4303 26.9286 15.1992 26.9312H23.7326C25.5016 26.9299 26.9345 25.4944 26.9332 23.7255C26.9345 21.9553 25.5016 20.5197 23.7326 20.5184V20.5184Z"
                                              fill="#36C5F0"/>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M44.0001 23.7242C44.0014 21.9553 42.5684 20.5197 40.7995 20.5184C39.0306 20.5197 37.5977 21.9553 37.599 23.7242V26.9312H40.7995C42.5684 26.9299 44.0014 25.4944 44.0001 23.7242ZM35.4666 23.7242V15.1738C35.4679 13.4062 34.0363 11.9706 32.2674 11.968C30.4985 11.9693 29.0656 13.4049 29.0669 15.1738V23.7242C29.0643 25.4931 30.4972 26.9286 32.2661 26.9312C34.035 26.9299 35.4679 25.4944 35.4666 23.7242Z"
                                              fill="#2EB67D"/>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M32.2661 44.0322C34.035 44.0309 35.4679 42.5953 35.4666 40.8264C35.4679 39.0575 34.035 37.622 32.2661 37.6207H29.0656V40.8264C29.0642 42.594 30.4972 44.0295 32.2661 44.0322ZM32.2661 35.4804H40.7995C42.5684 35.4791 44.0013 34.0436 44 32.2747C44.0026 30.5058 42.5697 29.0702 40.8008 29.0676H32.2674C30.4985 29.0689 29.0656 30.5045 29.0669 32.2734C29.0656 34.0436 30.4972 35.4791 32.2661 35.4804V35.4804Z"
                                              fill="#ECB22E"/>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M12 32.2746C11.9987 34.0435 13.4316 35.479 15.2005 35.4804C16.9694 35.479 18.4024 34.0435 18.401 32.2746V29.0688H15.2005C13.4316 29.0702 11.9987 30.5057 12 32.2746ZM20.5334 32.2746V40.825C20.5308 42.5939 21.9637 44.0295 23.7326 44.0321C25.5016 44.0308 26.9345 42.5952 26.9332 40.8263V32.2772C26.9358 30.5083 25.5029 29.0728 23.7339 29.0702C21.9637 29.0702 20.5321 30.5057 20.5334 32.2746C20.5334 32.2759 20.5334 32.2746 20.5334 32.2746Z"
                                              fill="#E01E5A"/>
                                    </svg>
                                </div>
                                <div className="p-4 md:p-6">
                                <span className="block mb-1 text-xs font-semibold uppercase text-amber-500">
                                    Slack API
                                </span>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                                        Slack
                                    </h3>
                                    <p className="mt-3 text-gray-500">
                                        Email collaboration and email service desk made easy.
                                    </p>
                                </div>
                                <div
                                    className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                                    <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                       href="#">
                                        {t('portfolio.demo')}
                                    </a>
                                    <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                       href="#">
                                        {t('portfolio.source')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id={"Form"}>
                    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        <div className="max-w-xl mx-auto">
                            <div className="text-center">
                                <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                                    {t('form.title')}
                                </h1>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">
                                    {t('form.subtitle')}
                                </p>
                            </div>

                            <div className="mt-12">
                                <form>
                                    <div className="grid gap-4 lg:gap-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                            <div>
                                                <label htmlFor="hs-firstname-hire-us-2"
                                                       className="block text-sm text-gray-700 font-medium dark:text-white">
                                                    {t('form.firstname')}
                                                </label>
                                                <input type="text" name="hs-firstname-hire-us-2"
                                                       id="hs-firstname-hire-us-2"
                                                       className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"/>
                                            </div>

                                            <div>
                                                <label htmlFor="hs-lastname-hire-us-2"
                                                       className="block text-sm text-gray-700 font-medium dark:text-white">
                                                    {t('form.lastname')}
                                                </label>
                                                <input type="text" name="hs-lastname-hire-us-2"
                                                       id="hs-lastname-hire-us-2"
                                                       className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"/>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="hs-work-email-hire-us-2"
                                                   className="block text-sm text-gray-700 font-medium dark:text-white">
                                                {t('form.email')}
                                            </label>
                                            <input type="email" name="hs-work-email-hire-us-2"
                                                   id="hs-work-email-hire-us-2" autoComplete="email"
                                                   className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"/>
                                        </div>
                                        <div className="grid grid-cols-1">
                                            <div>
                                                <label form="hs-company-hire-us-2"
                                                       className="block text-sm text-gray-700 font-medium dark:text-white">
                                                    {t('form.company')}
                                                </label>
                                                <input type="text" name="hs-company-hire-us-2" id="hs-company-hire-us-2"
                                                       className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"/>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="hs-about-hire-us-2"
                                                   className="block text-sm text-gray-700 font-medium dark:text-white">
                                                {t('form.details')}
                                            </label>
                                            <textarea id="hs-about-hire-us-2" name="hs-about-hire-us-2" rows="4"
                                                      className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"></textarea>
                                        </div>
                                    </div>
                                    <div className="mt-6 grid">
                                        <button type="submit"
                                                className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
                                            {t('form.send')}
                                        </button>
                                    </div>

                                    <div className="mt-3 text-center">
                                        <p className="text-sm text-gray-500">
                                            {t('form.info')}
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <div className="border-t border-gray-200 dark:border-gray-700"></div>
            <footer className="bg-gray-100 dark:bg-gray-800">
                <div className="text-center mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
                    <div className="mt-3">
                        <p className="text-gray-500">{t('hero.title')}</p>
                        <p className="text-gray-500">© 2023 Jules Clerc. All rights reserved.</p>
                    </div>

                    <div className="mt-3 space-x-2">
                        <button onClick={() => window.open("https://linkedin.com/in/jules-clerc")}
                                className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800">
                            <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </button>
                        <button onClick={() => window.open("https://github.com/Jules-gitclerc")}
                                className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800">
                            <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    )
        ;
}
