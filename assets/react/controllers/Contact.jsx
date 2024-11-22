import {useTranslation} from "react-i18next";

export default function ({ form }) {
    const { t } = useTranslation();
    return (
        <div className='px-5 py-8 md:px-10 md:py-12 rounded-xl contact-form-container'>
            <div className='contact-form-header'>
                <h2 className='text-4xl md:text-6xl mb-2'>{t('contact.title')}</h2>
                <p className='text-center mb-3 md:text-lg'>
                    {t('contact.description')}
                </p>
            </div>
            <div className='w-full mt-5' dangerouslySetInnerHTML={{ __html: form }}></div>
        </div>
    )
}