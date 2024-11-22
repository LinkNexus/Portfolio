import {FaArrowRightLong} from "react-icons/fa6";
import {IconContext} from "react-icons";
import {useState} from "react";
import {activeClassIf} from "../../utils/activeClassIf.js";
import HTMLImage from "../../images/icons/html-5-svgrepo-com.svg";
import CSSImage from "../../images/icons/css-3-svgrepo-com.svg";
import TailwindImage from "../../images/icons/tailwind-svgrepo-com.svg";
import SassImage from "../../images/icons/sass-svgrepo-com.svg";
import JSImage from "../../images/icons/javascript-svgrepo-com.svg";
import ReactImage from "../../images/icons/react-svgrepo-com.svg";
import PHPImage from "../../images/icons/php-logo-svgrepo-com.svg";
import SymfonyImage from "../../images/icons/light-symfony-svgrepo-com.svg";
import {BsArrowUpRightCircle, BsArrowRightCircle} from "react-icons/bs";
import {useTranslation} from "react-i18next";

export default function () {
    return (
      <>
          <Skills />
          <Contact />
      </>
    );
}

function Skills() {
    const { t } = useTranslation();
    const [activeSkills, setActiveSkills] = useState(true);
    const setFrontEnd = () => {
        setActiveSkills(true);
    }

    const setBackEnd = () => {
        setActiveSkills(false);
    }

    return (
        <div className='skills-section w-full flex flex-col content-center justify-center flex-wrap mt-10 py-20 rounded-3xl about-skills mb-32'>
            <div className='skills-header w-full flex flex-col content-center flex-wrap mb-10'>
                <h2 className='text-center text-4xl font-bold mb-6 md:text-6xl'>
                    {t('skills.title')}
                </h2>
                <p className='text-lg px-2 text-center md:text-2xl lg:text-xl'>
                    {t('skills.description')}
                </p>
            </div>
            <div className='skills-categories w-full flex justify-center gap-x-5 text-lg text-theme-primary md:text-xl lg:text-xl'>
                <button
                    onClick={setFrontEnd}
                    className={activeClassIf(activeSkills)}>
                    <span>Front-End</span>
                </button>
                <button
                    onClick={setBackEnd}
                    className={activeClassIf(!activeSkills)}>
                    <span>Backend</span>
                </button>
            </div>
            <div
                className={(!activeSkills ? 'hidden' : '') + ' skills-list flex gap-4 w-full flex-wrap justify-center mt-10 px-5 py-3'}>
                <div className='skill' data-aos='fade-up'>
                    <div>
                        <img src={HTMLImage} alt='html'/>
                    </div>
                    <span>HTML</span>
                </div>
                <div className='skill' data-aos='fade-up'>
                    <div>
                        <img src={CSSImage} alt='css'/>
                    </div>
                    <span>CSS</span>
                </div>
                <div className='skill' data-aos='fade-up'>
                    <div>
                        <img src={TailwindImage} alt='tailwind'/>
                    </div>
                    <span>Tailwind</span>
                </div>
                <div className='skill' data-aos='fade-up'>
                    <div>
                        <img src={SassImage} alt='sass'/>
                    </div>
                    <span>Saas</span>
                </div>
                <div className='skill' data-aos='fade-up'>
                    <div>
                        <img src={JSImage} alt='javascript'/>
                    </div>
                    <span>JavaScript</span>
                </div>
                <div className='skill' data-aos='fade-up'>
                    <div>
                        <img src={ReactImage} alt='react'/>
                    </div>
                    <span>React</span>
                </div>
            </div>

            <div
                className={(activeSkills ? 'hidden' : '') + ' skills-list flex gap-4 w-full flex-wrap justify-center mt-10 px-5 py-3'}>
                <div className='skill' data-aos='fade-up'>
                    <div>
                        <img src={PHPImage} alt='php'/>
                    </div>
                    <span>PHP</span>
                </div>
                <div className='skill' data-aos='fade-up'>
                    <div>
                        <img src={SymfonyImage} alt='symfony'/>
                    </div>
                    <span>Symfony</span>
                </div>
            </div>
        </div>
    );
}

function Contact() {
    const { t } = useTranslation();
    const [hovered, setHovered] = useState(false);
    const handleHover = () => {
        setHovered(true);
    }

    const handleMouseLeave = () => {
        setHovered(false);
    }

    return (
        <div className='about-contact md:px-5 flex flex-col' data-aos='slide-up'>
            <p className='text-lg'>{t('about.contact.text')}</p>
            <h2 className='about-contact-header'>{t('about.contact.title')}</h2>
            <a href='mailto:nkenengnunlafrancklevy@gmail.com'
               onMouseOver={handleHover}
               onMouseLeave={handleMouseLeave}
               className='text-xl text-white font-medium flex gap-x-2 hover:underline underline-offset-[6px] md:text-3xl font-bold self-end'
               data-aos='fade-left'
            >
                <span>nkeneng@gmail.com</span>
                {!hovered && <IconContext.Provider value={{className: 'test'}}>
                    <BsArrowUpRightCircle className='relative top-1' />
                </IconContext.Provider>}

                {hovered && <IconContext.Provider value={{className: 'test'}}>
                    <BsArrowRightCircle className='relative top-1' />
                </IconContext.Provider>}

            </a>
        </div>
    );
}