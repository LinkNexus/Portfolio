import {IconContext} from "react-icons";
import {CiMobile3} from "react-icons/ci";
import {IoIosGitBranch} from "react-icons/io";
import {RiCodeSSlashFill} from "react-icons/ri";
import {SlSettings} from "react-icons/sl";

export default function () {
    const services = [
        {
            icon: <RiCodeSSlashFill />,
            title: 'Front-End Development',
            description: 'I develop the front-end of websites using the latest technologies and frameworks such as React, TailwindCSS, and Sass.'
        },
        {
            icon: <SlSettings />,
            title: 'Back-End Development',
            description: 'I help creating dynamic websites by manipulating the server using PHP and its popular Framework Symfony'
        },
        {
            icon: <CiMobile3 />,
            title: 'Responsive Development',
            description: 'Using my front-end background, i develop websites that are responsive and work smoothly on all devices for better user experience.'
        },
        {
            icon: <IoIosGitBranch />,
            title: 'DevOps and Version Control',
            description: 'I use Git for version control and deploy websites using scripts in Maker Bundle and an Ubuntu server'
        }
    ]
    return (
        <div className='w-full flex flex-col content-center justify-center flex-wrap rounded-3xl mt-20 mb-32'>
            <div className='w-auto flex flex-col content-center flex-wrap mb-10'>
                <h2 className='services-header text-center text-4xl font-bold md:text-6xl'>Services</h2>
                <p className='text-center uppercase text-lg'>Offered Services</p>
            </div>
            <div className='flex gap-y-6 flex-col lg:flex-row services md:px-5 lg:px-0 lg:gap-x-3 flex-wrap lg:justify-center'>
                {services.map((service, index) => <div data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} className='gap-y-3 flex flex-col service p-5 hover:bg-theme-primary justify-center md:p-8'>
                    <div className='mb-5'>
                        <IconContext.Provider value={{size: '2.25rem', className: 'fill-theme-primary'}}>
                            {service.icon}
                        </IconContext.Provider>
                    </div>
                    <h3 className='text-xl text-white md:text-2xl font-black'>{service.title}</h3>
                    <p className='md:w-4/5 md:text-lg'>{service.description}</p>
                </div> )}
            </div>
        </div>
    );
}