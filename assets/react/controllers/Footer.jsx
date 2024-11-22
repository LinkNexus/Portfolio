import Logo from '../../images/logo-white.png'
import {activeClassIf} from "../../utils/activeClassIf.js";
import {useTranslation} from "react-i18next";

export default function ({ path }) {
    const { t } = useTranslation();
    return (
        <footer className='w-full bg-theme-secondary p-5 mt-32 flex flex-col gap-y-5 content-center justify-center flex-wrap'>
            <div className='mt-10 mb-5 position-center'>
                <a href='/'>
                    <img className='h-14' src={Logo} alt='logo'/>
                </a>
            </div>
            <nav>
                <ul className='w-full font-extrabold text-white flex justify-center content-center h-12 text-sm gap-x-3 md:text-base'>
                    <li className='flex content-center h-full'>
                        <a className={activeClassIf(path === 'about', 'h-full')} href='/about'>
                            <span>{t('header.links.about')}</span>
                        </a>
                    </li>
                    <li className='flex content-center'>
                        <a className={activeClassIf(path === 'services')} href='/services'>
                            <span>{t('header.links.services')}</span>
                        </a>
                    </li>
                    <li className='flex content-center'>
                        <a className={activeClassIf(path === 'projects')} href='/projects'>
                            <span>{t('header.links.projects')}</span>
                        </a>
                    </li>
                    <li className='flex content-center'>
                        <a className={activeClassIf(path === 'contact')} href='/contact'>
                            <span>{t('header.links.contact')}</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <p className='mt-1 text-[#636363] text-sm text-center md:text-base'>
                © 2024 {t('footer.copyright')} <a className='text-white hover:text-theme-primary' href='https://www.linkedin.com/in/levy-nkeneng-2b977a304/'>Levy Nkeneng</a>
            </p>
        </footer>
    );
}