import Image from "next/image";
import adminDashboard from "../../public/admin-dashboard.png";
import hotelDashboard from "../../public/hotel-dashboard.png";

export default function PortfolioSection({t}) {
    const portfolioItems = [
        {
            image: adminDashboard,
            alt: "Admin Dashboard",
            category: t("portfolio.personal"),
            title: t("portfolio.admin_dashboard"),
            demoLink: "https://codepen.io/Surfy971/full/MWZwoVN",
            sourceLink: "https://codepen.io/Surfy971/pen/MWZwoVN",
        },
        {
            image: hotelDashboard,
            alt: "Hotel Dashboard",
            category: t("portfolio.personal"),
            title: t("portfolio.hotel_dashboard"),
            demoLink: "https://codepen.io/Surfy971/full/dywYoay",
            sourceLink: "https://codepen.io/Surfy971/pen/dywYoay",
        },
    ];

    return (
        <section id="portfolio" className="bg-gray-100 dark:bg-gray-800 px-10 md:px-20 lg:px-40">
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
                    <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200">
                        Portfolio
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {portfolioItems.map((item, index) => (
                        <div key={index}
                             className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                            <div
                                className="h-52 flex flex-col justify-center items-center rounded-t-xl relative overflow-hidden">
                                <Image src={item.image} alt={item.alt} layout="fill" objectFit="cover"/>
                            </div>
                            <div className="p-4 md:p-6">
                                <span
                                    className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                                    {item.category}
                                </span>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                                    {item.title}
                                </h3>
                                {/* Placeholders for icons */}
                                <div className="mt-3 flex flex-row space-x-2 h-28 w-28">
                                    {/* SVG icons */}
                                </div>
                            </div>
                            <div
                                className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                                <button
                                    onClick={() => window.open(item.demoLink)}
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                >
                                    {t("portfolio.demo")}
                                </button>
                                <button
                                    onClick={() => window.open(item.sourceLink)}
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                >
                                    {t("portfolio.source")}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
