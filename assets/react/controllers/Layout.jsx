import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";
import Footer from "./Footer.jsx";
import About from "./About.jsx";
import {IconContext} from "react-icons";
import {FaArrowRightLong} from "react-icons/fa6";
import Services from "./Services.jsx";
import Projects from "./Projects.jsx";
import Contact from './Contact.jsx';
import NotFound from "./NotFound.jsx";
import {MdMenu} from "react-icons/md";
import {IoEarth} from "react-icons/io5";
import {useRef} from "react";
import {useTranslation} from "react-i18next";

export default function ({ form, path, lang }) {
    const { t, i18n } = useTranslation();
    const languageMenuRef = useRef(null);
    const paths = ['about', 'services', 'projects', 'contact'];
    const lngs = {
        en: {
            nativeName: "English",
        },
        fr: {
            nativeName: "Français",
        },
        de: {
            nativeName: "Deutsch",
        }
    }

    const handleLanguageButtonClick = () => {
        if (languageMenuRef.current) {
            if (getComputedStyle(languageMenuRef.current).display === "none")
                languageMenuRef.current.style.display = "block";
            else languageMenuRef.current.style.display = "none";
        }
    }


    if (path && path !== '') {
        document.title = 'Levy Nkeneng | ' + path[0].toUpperCase() + path.slice(1);
    }

    return (
        <>
            <Header path={path}/>
            <div>
                {paths.includes(path) && <div className='breadcrumb z-[2] relative bottom-[110px] left-0 flex flex-wrap flex-col content-center justify-center py-10'>
                    <div className='mt-36 md:mb-12'>
                        <h2 className='text-4xl lg:text-6xl font-extrabold mb-5 text-center'>{t(`header.links.${path}`)}</h2>
                        <div className='flex content-center justify-center text-lg gap-x-2'>
                            <a href='/' className='hover:underline underline-offset-4'>
                                {t('header.links.home')}
                            </a>
                            <IconContext.Provider value={{className: 'test'}}>
                                <FaArrowRightLong className='relative top-1'/>
                            </IconContext.Provider>
                            <span>{t(`header.links.${path}`)}</span>
                        </div>
                    </div>
                </div>}

                <section className='mt-10 px-4 lg:px-24 z-[4]'>
                    {displayPageFromPath({path, form, lang})}
                </section>
            </div>
            <Footer path={path}/>

            <div className='fixed flex flex-wrap flex-col bottom-[75px] right-[20px] text-lg z-[10]'>
                <div ref={languageMenuRef} className='bg-theme-primary self-start hidden text-white p-3 mb-5'>
                    <h4 className='text-center text-2xl font-semibold mb-3'>Language</h4>
                    <div className='flex flex-col'>
                        {Object.keys(lngs).map((lng) => (
                            <a
                                key={lng}
                                href={!path || path === '' ? `/lang/${lng}/` : `/lang/${lng}/${path}`}
                                className='py-3 px-8 rounded-md cursor-pointer hover:bg-theme-secondary'
                            >
                                {lngs[lng].nativeName}
                            </a>
                        ))}
                    </div>
                </div>
                <div onClick={handleLanguageButtonClick} className='text-white self-end cursor-pointer bg-theme-secondary h-14 aspect-square mx-auto flex flex-wrap justify-center content-center rounded-[50%] hover:bg-theme-primary'>
                    <div>
                        <IconContext.Provider value={{className: 'test'}}>
                            <IoEarth size={'3rem'}/>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </>
    );
}

function displayPageFromPath({path, form, lang}) {
    switch (path) {
        case '':
            return <MainContent/>;
        case 'about':
            return <About path={path}/>;
        case 'services':
            return <Services />;
        case 'projects':
            return <Projects />;
        case 'contact':
            return <Contact form={form} />;
        default:
            return <NotFound lang={lang} />;
    }
}