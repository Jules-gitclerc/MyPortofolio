import Image from "next/image";
import linkedinIcon from "../../public/linkedin-icon.png";
import githubDarkIcon from "../../public/icons8-github-100.png";
import githubIcon from "../../public/github-icon.png";
import codepenIcon from "../../public/codepen-icon.png";
import maltIcon from "../../public/malt-icon.png";


export default function HeroSection({t, darkMode}) {
    const handleLinkedInClick = () => {
        window.open("https://linkedin.com/in/jules-clerc");
    };

    const handleGitHubClick = () => {
        window.open("https://github.com/Jules-gitclerc");
    };

    const handleCodePenClick = () => {
        window.open("https://codepen.io/Surfy971");
    };

    const handleMaltClick = () => {
        window.open("https://www.malt.fr/profile/julesclerc1");
    };

    return (
        <section className="min-h-screen flex items-center justify-center md:mt-0 mt-5 px-10 md:px-20 lg:px-40">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <div className="lg:col-span-3">
                        <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
                            {t("hero.title")}
                        </h1>
                        <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
                            {t("hero.description")}
                        </p>

                        <div className="mt-5 lg:mt-8 flex items-center">
                            <a href="#Form"
                               className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
                                {t("hero.button")}
                            </a>
                        </div>

                        <div className="mt-6 lg:mt-12">
                            <span className="text-xs font-medium text-gray-800 uppercase dark:text-gray-200">
                                {t("hero.network")}
                            </span>
                            <div className="flex gap-16 py-3 text-gray-600 dark:text-gray-400">
                                <div
                                    className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transform transition-transform duration-500 ease-in-out hover:scale-110"
                                    onClick={handleLinkedInClick}>
                                    <Image src={linkedinIcon} alt="LinkedIn" width={40} height={40}/>
                                </div>
                                <div
                                    className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transform transition-transform duration-500 ease-in-out hover:scale-110"
                                    onClick={handleGitHubClick}>
                                    <Image src={darkMode ? githubDarkIcon : githubIcon} alt="GitHub" width={40}
                                           height={40}/>
                                </div>
                                <div
                                    className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transform transition-transform duration-500 ease-in-out hover:scale-110"
                                    onClick={handleCodePenClick}>
                                    <Image src={codepenIcon} alt="CodePen" width={40} height={40}/>
                                </div>
                                <div
                                    className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transform transition-transform duration-500 ease-in-out hover:scale-110"
                                    onClick={handleMaltClick}>
                                    <Image src={maltIcon} alt="Malt" width={40} height={40}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 mt-10 lg:mt-0">
                        <Image className="w-full rounded-xl max-h-[700px] object-cover"
                               src="https://images.unsplash.com/photo-1618477371303-b2a56f422d9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3164&q=80"
                               alt="Image Description" width={1000} height={700}/>
                    </div>
                </div>
            </div>
        </section>
    )
}