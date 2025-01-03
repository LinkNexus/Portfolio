import {activeClassIf} from "../../utils/activeClassIf.js";
import HTMLImage from "../../images/icons/html-5-svgrepo-com.svg";
import CSSImage from "../../images/icons/css-3-svgrepo-com.svg";
import TailwindImage from "../../images/icons/tailwind-svgrepo-com.svg";
import SassImage from "../../images/icons/sass-svgrepo-com.svg";
import JSImage from "../../images/icons/javascript-svgrepo-com.svg";
import ReactImage from "../../images/icons/react-svgrepo-com.svg";
import PHPImage from "../../images/icons/php-logo-svgrepo-com.svg";
import SymfonyImage from "../../images/icons/light-symfony-svgrepo-com.svg";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import TypeScriptImage from "../../images/icons/typescript-official-svgrepo-com.svg";
import GitImage from "../../images/icons/git-svgrepo-com.svg";
import DockerImage from "../../images/icons/docker-svgrepo-com.svg";
import LinuxImage from "../../images/icons/linux-svgrepo-com.svg";
import PhpStormImage from "../../images/icons/phpstorm-svgrepo-com.svg";
import UbuntuImage from "../../images/icons/ubuntu-svgrepo-com.svg";

export default function ({ className = '' }) {
    const skills = {
        "front-end": [
            {
                label: "HTML",
                icon: HTMLImage,
            },
            {
                label: "CSS",
                icon: CSSImage,
            },
            {
                label: "Tailwind",
                icon: TailwindImage,
            },
            {
                label: "Sass",
                icon: SassImage,
            },
            {
                label: "JavaScript",
                icon: JSImage,
            },
            {
                label: "TypeScript",
                icon: TypeScriptImage
            },
            {
                label: "React",
                icon: ReactImage
            }
        ],
        "back-end": [
            {
                label: "PHP",
                icon: PHPImage,
            },
            {
                label: "Symfony",
                icon: SymfonyImage,
            }
        ],
        tools: [
            {
                label: "Git",
                icon: GitImage
            },
            {
                label: "Docker",
                icon: DockerImage
            },
            {
                label: "Linux",
                icon: LinuxImage
            },
            {
                label: "PhpStorm",
                icon: PhpStormImage
            },
            {
                label: "Ubuntu",
                icon: UbuntuImage
            }
        ]
    }

    const { t } = useTranslation();
    const [activeSkills, setActiveSkills] = useState('front-end');

    const setFrontEnd = () => {
        setActiveSkills('front-end');
    }

    const setBackEnd = () => {
        setActiveSkills('back-end');
    }

    const setTools = () => {
        setActiveSkills('tools');
    }


    return (
        <div
            className={'skills-section w-full flex flex-col content-center justify-center flex-wrap mt-10 py-20 rounded-3xl mb-32 ' + className}>
            <div className='skills-header w-full flex flex-col content-center flex-wrap mb-10'>
                <h2 className='text-center text-4xl font-bold mb-6 md:text-6xl'>
                    {t('skills.title')}
                </h2>
                <p className='text-lg px-2 text-center md:text-2xl lg:text-xl'>
                    {t('skills.description')}
                </p>
            </div>
            <div
                className='skills-categories w-full flex justify-center gap-x-5 text-lg text-theme-primary md:text-xl lg:text-xl'>
                <button
                    onClick={setFrontEnd}
                    className={activeClassIf(activeSkills === 'front-end')}>
                    <span>Front-End</span>
                </button>
                <button
                    onClick={setBackEnd}
                    className={activeClassIf(activeSkills === 'back-end')}>
                    <span>Backend</span>
                </button>
                <button
                    onClick={setTools}
                    className={activeClassIf(activeSkills === 'tools')}>
                    <span>Tools</span>
                </button>
            </div>
            {Object.keys(skills).map(category => (
                <div
                    key={category}
                    className={(activeSkills !== category ? 'hidden' : '') + ' skills-list flex gap-4 w-full flex-wrap justify-center mt-10 px-5 py-3'}>
                    {skills[category].map(skill => (
                        <div key={skill['label']} className='skill' data-aos='fade-up'>
                            <div><img src={skill['icon']} alt={skill['label']}/></div>
                            <span>{skill['label']}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}