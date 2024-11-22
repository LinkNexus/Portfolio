import {useTranslation} from "react-i18next";

export default function ({ lang }) {
    const { t, i18n } = useTranslation();

    if (localStorage.getItem("lang") !== lang) {
        localStorage.setItem("lang", lang);
        location.reload();
    }

    i18n.changeLanguage(lang);
    console.log(lang);
    document.title = `Levy Nkeneng | ${t('notFound')}`;
    return (
        <div className="flex w-full not-found-section flex-col flex-wrap content-center justify-center mt-32">
            <div className="text-center">
                <h1 className="text-4xl font-bold">404</h1>
                <p className="text-lg">{t('notFound')}</p>
            </div>
        </div>
    );
}