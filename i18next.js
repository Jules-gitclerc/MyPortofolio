import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      resume: "Resume",
      subtitle: "Front-End Developer",
      description: "Front-end freelance developer ready to meet your design and programming needs. Join me below and let's start your project!",

    }
  },
  fr: {
    translation: {
      resume: "CV",
      subtitle: "Développeur Front-End",
      description: "Développeur freelance en front-end prêt à répondre à vos besoins en design et programmation. Rejoignez-moi ci-dessous et lançons votre projet !",
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
