import Logo from '../../images/logo-white.png'
import {LiaDownloadSolid} from "react-icons/lia";
import {useEffect, useState} from "react";
import {activeClassIf} from "../../utils/activeClassIf.js";
import {CgMenuRight} from "react-icons/cg";
import {IconContext} from "react-icons";
import {AiOutlineClose} from "react-icons/ai";
import {Menu} from "lucide-react";
import Resume from '../../images/resumes/resume-en.pdf';
import {useTranslation} from "react-i18next";

export default function ({ path }) {
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
    const [positionY, setPositionY] = useState(window.scrollY);
    const {t} = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setPositionY(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const toggleMenu = () => {
        setToggleMobileMenu(!toggleMobileMenu);
    }

    const mobileMenuVariants = {
        hidden: 'hidden bg-theme-secondary w-full mt-3',
        visible: 'bg-theme-secondary w-full mt-3'
    }

    return (
        <>
            <header
                className={(positionY !== 0 ? 'bg-theme-black-2' : '') + ' w-full transition-all sticky top-0 font-normal lg:justify-center flex gap-x-3 justify-between h-fit content-center flex-wrap px-8 py-8 md:px-5 lg:px-3 lg:gap-x-2 text-white z-10'}>
                <a className='position-center mr-auto md:mr-0 lg:mr-2' href='/'>
                    <img className='w-14 md:w-16' src={Logo} alt="logo"/>
                </a>
                <a className='content-center font-semibold mr-auto lg:mr-8 justify-center flex-wrap hover:text-theme-primary hidden md:flex'
                   href='mailto:nkenengnunlafrancklevy@gmail.com'>
                    <span>nkeneng@gmail.com</span>
                </a>
                <nav className='mx-12 lg:flex content-center hidden'>
                    <ul className='flex gap-x-7 content-center'>
                        <li className='flex content-center'>
                            <a className={activeClassIf(path === '')} href='/'>
                                <span>{t('header.links.home')}</span>
                            </a>
                        </li>
                        <li className='flex content-center'>
                            <a className={activeClassIf(path === 'about')} href='/about'>
                                <span>{t("header.links.about")}</span>
                            </a>
                        </li>
                        <li className='flex content-center'>
                            <a className={activeClassIf(path === 'services')} href='/services'>
                                <span>{t("header.links.services")}</span>
                            </a>
                        </li>
                        <li className='flex content-center'>
                            <a className={activeClassIf(path === 'projects')} href='/projects'>
                                <span>{t("header.links.projects")}</span>
                            </a>
                        </li>
                        <li className='flex content-center'>
                            <a className={activeClassIf(path === 'contact')} href='/contact'>
                                <span>{t("header.links.contact")}</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <a href='/resume'
                   className='resume-button flex-row flex-nowrap font-semibold md:w-1/4 md:text-lg w-5/11 lg:w-max lg:mr-0 lg:px-5 lg:text-base button position-center md:mr-2 px-6 rounded-full lg:mr-0'>
                    <span>{t("header.resume")}</span>
                    <div className='align-baseline md:h-6 lg:h-5 relative top-1 ml-1'>
                        <IconContext.Provider value={{className: 'test'}}>
                            <LiaDownloadSolid className='align-baseline stroke-2'/>
                        </IconContext.Provider>
                    </div>
                </a>
                <button onClick={toggleMenu} className='flex md:hidden cursor-pointer position-center lg:hidden h-10 md:h-14'>
                    <div className=''>
                        <IconContext.Provider value={{className: 'test'}}>
                            <CgMenuRight size={'2.5rem'}  className={toggleMobileMenu ? 'hidden' : 'block'}/>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: 'test'}}>
                            <AiOutlineClose size={'2.5rem'} className={toggleMobileMenu ? 'block' : 'hidden'}/>
                        </IconContext.Provider>
                    </div>
                </button>
                <button onClick={toggleMenu} className='md:flex hidden cursor-pointer flex content-center justify-center lg:hidden h-10 md:h-14'>
                    <div className=''>
                        <IconContext.Provider value={{className: 'test'}}>
                            <CgMenuRight size={'3.5rem'}  className={toggleMobileMenu ? 'hidden' : 'block'}/>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: 'test'}}>
                            <AiOutlineClose size={'3.5rem'}  className={toggleMobileMenu ? 'block' : 'hidden'}/>
                        </IconContext.Provider>
                    </div>
                </button>
            </header>
            <nav
                className={(toggleMobileMenu ? mobileMenuVariants.visible : mobileMenuVariants.hidden) + ' fixed top-[100px] left-0 z-10'}>
                <ul className='flex text-xl gap-y-2 font-semibold uppercase content-center flex-col px-3 py-2'>
                    <li className='flex content-center py-2 px-3 mb-4'>
                        <a href='/'>
                            <span>{t('header.links.home')}</span>
                        </a>
                    </li>
                    <li className='flex content-center py-2 px-3 mb-4'>
                        <a href='/about'>
                            <span>{t('header.links.about')}</span>
                        </a>
                    </li>
                    <li className='flex content-center py-2 px-3 mb-4'>
                        <a href='/services'>
                            <span>{t('header.links.services')}</span>
                        </a>
                    </li>
                    <li className='flex content-center py-2 px-3 mb-4'>
                        <a href='/projects'>
                            <span>{t('header.links.projects')}</span>
                        </a>
                    </li>
                    <li className='flex content-center py-2 px-3'>
                        <a href='/contact'>
                            <span>{t('header.links.contact')}</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}