import {Project, projects} from "./MainContent.jsx";

export default function () {
    return (
        <div className='w-full flex flex-col content-center'>
            <h2 className='recent-projects-header md:text-6xl'>Recent Projects</h2>
            <div className='projects-list flex content-center justify-center flex-col gap-y-10 flex-wrap lg:flex-row lg:gap-x-6'>
                {projects.map((project, index) => (
                    <Project key={index} index={index} project={project}/>
                ))}
            </div>
        </div>
    );
}