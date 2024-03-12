import Image from "next/image";
import {useEffect, useState} from "react";

export default function ServiceSection({t}) {
    const [activeTab, setActiveTab] = useState("tabs-with-card-1");
    const tabsContent = {
        "tabs-with-card-1": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3272&q=80",
        "tabs-with-card-2": "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=2147&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "tabs-with-card-3": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
    };
    const tabKeys = Object.keys(tabsContent);
    const [previousTab, setPreviousTab] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const transitionDuration = 5000; // Transition duration in milliseconds

    useEffect(() => {
        const interval = setInterval(() => {
            const currentIndex = tabKeys.indexOf(activeTab);
            const nextIndex = (currentIndex + 1) % tabKeys.length;
            setPreviousTab(activeTab);
            setActiveTab(tabKeys[nextIndex]);
        }, transitionDuration);

        return () => clearInterval(interval);
    }, [activeTab, tabKeys]);


    const handleTabChange = (tabId) => {
        if (tabId !== activeTab && !isTransitioning) {
            setIsTransitioning(true);

            setTimeout(() => {
                setActiveTab(tabId);
                setIsTransitioning(false);
            }, transitionDuration);
        }
    };


    return (
        <section id="services" className="bg-gray-100 dark:bg-gray-800 px-10 md:px-20 lg:px-40">
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="relative p-6 md:p-16">
                    <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                        <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                            <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
                                {t("services.title")}
                            </h2>
                            <nav className="grid gap-4 mt-5 md:mt-10">
                                {Object.keys(tabsContent).map((tabId, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => handleTabChange(tabId)}
                                        className={`${
                                            activeTab === tabId ? "bg-white shadow-md hover:border-transparent dark:bg-slate-900" : ""
                                        } text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hover:bg-gray-700 active`}
                                    >
                                        <div className="flex">
                                            <span className="grow ml-6">
                                                <span
                                                    className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                                                    {t(`services.section_${index + 1}.title`)}
                                                </span>
                                                <span
                                                    className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                                                    {t(`services.section_${index + 1}.description`)}
                                                </span>
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </nav>
                        </div>
                        <div className="lg:col-span-6">
                            <div className="relative">
                                {previousTab && (
                                    <div
                                        className={`absolute inset-0 transition-opacity duration-500 ${activeTab !== previousTab ? 'opacity-0' : 'opacity-100'}`}>
                                        <Image
                                            className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                                            src={tabsContent[previousTab]}
                                            alt="Previous Image"
                                            width={3272}
                                            height={2178}
                                            layout="responsive"
                                        />
                                    </div>
                                )}
                                <div
                                    className={`transition-opacity duration-500 ${activeTab === previousTab ? 'opacity-0' : 'opacity-100'}`}>
                                    <Image
                                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                                        src={tabsContent[activeTab]}
                                        alt="Current Image"
                                        width={3272}
                                        height={2178}
                                        layout="responsive"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
