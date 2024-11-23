import {Project} from "./MainContent.jsx";
import projects from "../../utils/projects.js";
import {useTranslation} from "react-i18next";
import React from "react";

export default function (): React.JSX.Element {
    const { t } = useTranslation();
    return (
        <div className='w-full flex flex-col content-center'>
            <h2 className='recent-projects-header md:text-6xl'>{t(`projects.title`)}</h2>
            <div className='projects-list flex content-center justify-center flex-col gap-y-10 flex-wrap lg:flex-row lg:gap-x-6'>
                {projects.map((project: Project, index: number) => (
                    <Project key={index} index={index} project={project}/>
                ))}
            </div>
        </div>
    );
}

interface Project {
    name: string;
    description: string;
    image: string;
    link: string | null;
    tags: string[];
    githubLink: string;
}