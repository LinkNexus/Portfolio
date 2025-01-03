import MySelf from '../../images/myself.jpg';
import {MdArrowOutward} from "react-icons/md";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {SiGmail, SiIndeed} from "react-icons/si";
import {IconContext} from "react-icons";
import HTMLImage from '../../images/icons/html-5-svgrepo-com.svg';
import CSSImage from '../../images/icons/css-3-svgrepo-com.svg';
import JSImage from '../../images/icons/javascript-svgrepo-com.svg';
import ReactImage from '../../images/icons/react-svgrepo-com.svg';
import SassImage from '../../images/icons/sass-svgrepo-com.svg';
import TailwindImage from '../../images/icons/tailwind-svgrepo-com.svg';
import SymfonyImage from '../../images/icons/light-symfony-svgrepo-com.svg';
import PHPImage from '../../images/icons/php-logo-svgrepo-com.svg';
import {useState} from "react";
import {activeClassIf} from "../../utils/activeClassIf.js";
import FirstPortfolioImage from '../../images/projects/first-portfolio.png';
import JavaScriptCalculatorImage from '../../images/projects/javascript-calculator.png';
import SimpleReactBlogImage from '../../images/projects/simple-react-blog.png';
import SymfonyBlogImage from '../../images/projects/symfony-blog.png';
import SocialNetworkPHPImage from '../../images/projects/social-network-php.png';
import {useTranslation} from "react-i18next";
import projects from "../../utils/projects.js";
import Skills from "./Skills.jsx";



/**
 * @param {string} message
 * @returns {*}
 */
const convertLineBreaks = (message) => {
    const parts = message.split('\n');
    return parts.map((line, i) => <>{line} {i !== parts.length - 1 ? <br key={i} /> : ''}</>)
}

const convertCamelCase = (string) => {
    const parts = string.split(' ');
    return parts[0].toLowerCase() + parts.filter((part, index) => index !== 0).map((part) => part[0].toUpperCase() + part.substring(1)).join('');
}

export default function () {
    return (
        <>
            <Hero />
            <Skills />
            <RecentProjects />
            <RecommendationZone />
        </>
    );
}

function Hero() {
    const { t } = useTranslation();
    return (
        <div
            className='hero-wrapper w-full px-5 py-8 rounded-2xl flex flex-col content-center gap-y-6 md:flex-row md:gap-x-10 md:px-7'>
            <h1 className='hero-title w-full text-4xl text-center h-fit font-extrabold md:hidden'>
                {convertLineBreaks(t("mainContent.hero.title"))}
            </h1>
            <div className='w-full position-center md:h-full md:w-2/5 md:m-auto lg:w-1/3'>
                <img className='w-4/5 rounded-[35px] md:h-full md:w-full md:rounded-[10px]' src={MySelf}
                     alt='my_picture'/>
            </div>
            <p className='text-lg text-center mt-2 md:hidden'>
                {t("mainContent.hero.description")}
            </p>
            <div className='flex flex-col w-full md:hidden'>
                <a href='mailto:nkenengnunlafrancklevy@gmail.com'
                   className='button-primary py-3 px-6 w-1/3 h- w-fit self-center'>
                    <span className='mr-2'>{t('mainContent.hero.hireMe')}</span>
                    <div>
                        <IconContext.Provider value={{className: 'test'}}>
                            <MdArrowOutward/>
                        </IconContext.Provider>
                    </div>
                </a>
                <ul className='flex content-center gap-x-3 mt-5 w-full justify-center'>
                    <li>
                        <a href='https://www.linkedin.com/in/levy-nkeneng-2b977a304/'>
                            <FaLinkedinIn size={'1.5rem'}/>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/LinkNexus/'>
                            <FaGithub size={'1.5rem'}/>
                        </a>
                    </li>
                    <li>
                        <a href='mailto:nkenengnunlafrancklevy@gmail.com'>
                            <SiGmail size={'1.5rem'}/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='hidden md:flex flex-col content-center w-3/5 lg:w-2/3 lg:m-auto'>
                <h1 className='hero-title text-8xl h-fit font-extrabold mb-8 md:text-[2.5rem] md:mb-0 md:text-center lg:text-7xl'>
                    {convertLineBreaks(t("mainContent.hero.title"))}
                </h1>
                <p className='text-3xl text-center mt-8 md:text-xl md:mt-5 md:mb-5 lg:hidden'>
                    {t("mainContent.hero.description2")}
                </p>
                <p className='hidden lg:block text-xl mt-8 mb-8'>
                    {t("mainContent.hero.description")}
                </p>
                <div className='flex flex-col w-full lg:flex-row lg:content-center lg:justify-center lg:gap-x-5'>
                    <a href='mailto:nkenengnunlafrancklevy@gmail.com'
                       className='button-primary py-7 px-10 w-1/3 w-fit self-center md:py-5 md:px-7 md:text-2xl lg:max-w-1/4 lg:px-5 lg:py-3 lg:text-xl'>
                        <span className='mr-5'>{t('mainContent.hero.hireMe')}</span>
                        <div className='h-8 lg:h-6'>
                            <IconContext.Provider value={{size: 'auto'}}>
                                <MdArrowOutward/>
                            </IconContext.Provider>
                        </div>
                    </a>
                    <ul className='flex content-center gap-x-6 mt-10 w-full justify-center lg:w-fit lg:ml-5 lg:mt-0'>
                        <li>
                            <a href='https://www.linkedin.com/in/levy-nkeneng-2b977a304/'>
                                <div className='h-8'>
                                    <FaLinkedinIn size={'auto'}/>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/LinkNexus/'>
                                <div className='h-8'>
                                    <FaGithub size={'auto'}/>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href='mailto:nkenengnunlafrancklevy@gmail.com'>
                                <div className='h-8'>
                                    <SiGmail size={'auto'}/>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

function RecentProjects() {
    const { t } = useTranslation();
    return (
        <div className='w-full flex flex-col content-center'>
            <h2 className='recent-projects-header md:text-6xl'>{t('projects.title')}</h2>
            <div className='projects-list flex content-center justify-center flex-col gap-y-10 flex-wrap lg:flex-row lg:gap-x-6'>
                {projects.map((project, index) => (
                    <Project key={index} index={index} project={project}/>
                ))}
            </div>
        </div>
    );
}

export function Project({ project, index }) {
    const { t } = useTranslation();
    return (
        <div className='bg-theme-accent-2 project flex flex-col content-center justify-center px-8 gap-y-5 py-8 lg:w-[47%]' data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
            <a className='w-8/10 mx-auto flex content-center justify-center flex-wrap' href={project.githubLink}>
                <img className='w-full' src={project.image} alt={project.name}/>
            </a>
            <div className='mt-6 flex flex-col gap-y-3 text-base'>
                <h3 className='text-2xl md:text-4xl font-extrabold text-center'>
                    {t(`projects.project.${convertCamelCase(project.name)}.name`)}
                </h3>
                <p className='text-center'>
                    {t(`projects.project.${convertCamelCase(project.name)}.description`)}
                </p>
                {project.link &&
                    <a target='_blank' className='mx-auto project-live-preview md:w-2/5 md:min-w-fit flex content-center justify-center text-white font-bold py-2 rounded-full my-2 text-center w-fit px-6 py-3'
                       href={project.link}>
                        <span>Live Demo</span>
                        <div>
                            <IconContext.Provider value={{className: 'test'}}>
                                <MdArrowOutward/>
                            </IconContext.Provider>
                        </div>
                    </a>}
                <div className='flex justify-center gap-2 flex-wrap'>
                    {project.tags.map((tag, index) => (
                        <span className='tag font-semibold md:text-base' key={index}>{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function RecommendationZone() {
    const { t } = useTranslation();
    return (
        <div className='w-full contact-zone mt-32 p-10 rounded-3xl' data-aos='fade-up'>
            <h2 className='contact-zone-header md:text-6xl'>{t('mainContent.contact.label')}</h2>
            <a className='contact-button' href='/recommendation'>
                <div className='flex justify-center content-center'>
                    <span className='mr-3'>{t('mainContent.contact.button')}</span>
                    <div>
                        <IconContext.Provider value={{className: 'test'}}>
                            <MdArrowOutward/>
                        </IconContext.Provider>
                    </div>
                </div>
            </a>
        </div>
    );
}