import {useForm, ValidationError} from "@formspree/react";
import {useEffect, useState} from "react";

export default function FormSection({t}) {
    const [state, handleSubmit] = useForm("myyqwajb");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {succeeded, submitting, errors} = state;

    useEffect(() => {
        if (succeeded) {
            console.log("Form successfully submitted!");
            setIsSubmitted(true);
        }
    }, [succeeded]);

    const SuccessMessage = () => (
        <div className="w-full h-full justify-center items-center z-50 overflow-x-hidden overflow-y-auto">
            <div className="mt-7 opacity-100 duration-500 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-gray-800">
                    <div className="p-4 sm:p-10 text-center overflow-y-auto">
                        <div
                            className="mb-4 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border-4 border-green-50 bg-green-100 text-green-500 dark:bg-green-700 dark:border-green-600 dark:text-green-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                 className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
                            </svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">
                            {t("form.confirm")}
                        </h3>
                        <div className="text-gray-500">
                            {t("form.description")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section id="Form">
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="max-w-xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                            {t("form.title")}
                        </h1>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                            {t("form.subtitle")}
                        </p>
                    </div>

                    <div className="mt-12">
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit}>
                                <div className="grid gap-4 lg:gap-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                        <div>
                                            <label
                                                htmlFor="hs-firstname-hire-us-2"
                                                className="block text-sm text-gray-700 font-medium dark:text-white"
                                            >
                                                {t("form.firstname")}
                                            </label>
                                            <input
                                                type="text"
                                                name="hs-firstname-hire-us-2"
                                                id="hs-firstname-hire-us-2"
                                                className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                            />
                                            <ValidationError
                                                prefix="Firstname"
                                                field="firstname"
                                                errors={state.errors}
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="hs-lastname-hire-us-2"
                                                className="block text-sm text-gray-700 font-medium dark:text-white"
                                            >
                                                {t("form.lastname")}
                                            </label>
                                            <input
                                                type="text"
                                                name="hs-lastname-hire-us-2"
                                                id="hs-lastname-hire-us-2"
                                                className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                            />
                                            <ValidationError
                                                prefix="Lastname"
                                                field="lastname"
                                                errors={state.errors}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="hs-work-email-hire-us-2"
                                            className="block text-sm text-gray-700 font-medium dark:text-white"
                                        >
                                            {t("form.email")}
                                        </label>
                                        <input
                                            type="email"
                                            name="hs-work-email-hire-us-2"
                                            id="hs-work-email-hire-us-2"
                                            autoComplete="email"
                                            className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                        />
                                        <ValidationError
                                            prefix="Email"
                                            field="email"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <div>
                                            <label
                                                form="hs-company-hire-us-2"
                                                className="block text-sm text-gray-700 font-medium dark:text-white"
                                            >
                                                {t("form.company")}
                                            </label>
                                            <input
                                                type="text"
                                                name="hs-company-hire-us-2"
                                                id="hs-company-hire-us-2"
                                                className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                            />
                                            <ValidationError
                                                prefix="Company"
                                                field="company"
                                                errors={state.errors}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="hs-about-hire-us-2"
                                            className="block text-sm text-gray-700 font-medium dark:text-white"
                                        >
                                            {t("form.details")}
                                        </label>
                                        <textarea
                                            id="hs-about-hire-us-2"
                                            name="hs-about-hire-us-2"
                                            rows="4"
                                            className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                        ></textarea>
                                        <ValidationError
                                            prefix="Details"
                                            field="details"
                                            errors={state.errors}
                                        />
                                    </div>
                                </div>
                                <div className="mt-6 grid">
                                    <button
                                        type="submit"
                                        disabled={state.submitting}
                                        className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                                    >
                                        {t("form.send")}
                                    </button>
                                </div>

                                <div className="mt-3 text-center">
                                    <p className="text-sm text-gray-500">{t("form.info")}</p>
                                </div>
                            </form>
                        ) : (
                            <SuccessMessage/>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
