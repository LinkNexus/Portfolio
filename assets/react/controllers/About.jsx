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
import TypeScriptImage from "../../images/icons/typescript-official-svgrepo-com.svg";
import GitImage from "../../images/icons/git-svgrepo-com.svg";
import DockerImage from "../../images/icons/docker-svgrepo-com.svg";
import LinuxImage from "../../images/icons/linux-svgrepo-com.svg";
import PhpStormImage from "../../images/icons/phpstorm-svgrepo-com.svg";
import UbuntuImage from "../../images/icons/ubuntu-svgrepo-com.svg";
import {BsArrowUpRightCircle, BsArrowRightCircle} from "react-icons/bs";
import {useTranslation} from "react-i18next";
import Skills from "./Skills.jsx";

export default function () {
    return (
      <>
          <Skills className='about-skills' />
          <Contact />
      </>
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