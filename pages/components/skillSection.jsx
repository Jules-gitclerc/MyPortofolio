import Image from "next/image";
import reactLogo from "../../public/react-logo.png";
import typescriptLogo from "../../public/typescript-logo.png";
import tailwindLogo from "../../public/tailwind-logo.png";
import nextjsWhiteLogo from "../../public/nextjs-white-logo.png";
import nextjsDarkLogo from "../../public/nextjs-dark-logo.png";

export default function SkillSection({t, darkMode}) {
    const skills = [
        {name: "React", logo: reactLogo, description: t("skills.react")},
        {name: "Typescript", logo: typescriptLogo, description: t("skills.typescript")},
        {name: "Tailwind", logo: tailwindLogo, description: t("skills.tailwind")},
        {name: "Next.js", logo: darkMode ? nextjsWhiteLogo : nextjsDarkLogo, description: t("skills.nextjs")},
    ];

    return (
        <div>
            <div id="skills" className="border-t border-gray-200 dark:border-gray-700"></div>
            <section>
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="group flex flex-col justify-center items-center text-center transform transition-transform duration-500 ease-in-out hover:scale-110 rounded-xl p-4 md:p-7"
                            >
                                <div className="flex justify-center items-center w-12 h-12">
                                    <Image src={skill.logo} alt={`${skill.name} Logo`} layout="fixed" width={48}
                                           height={48}/>
                                </div>
                                <div className="mt-5">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                        {skill.name}
                                    </h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                                        {skill.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
