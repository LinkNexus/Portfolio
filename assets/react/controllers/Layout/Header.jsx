import Logo from '../../../images/logo-white.png'
import {LiaDownloadSolid} from "react-icons/lia";
import {useState} from "react";
import {activeClassIf} from "../../../utils/activeClassIf.js";
import {CgMenuRight} from "react-icons/cg";
import {IconContext} from "react-icons";

export default function () {
    const path = location.pathname.replace('/', '');
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

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
                className='w-full font-normal lg:justify-center flex gap-x-3 justify-between h-fit content-center flex-wrap px-10 py-10 md:px-5 lg:px-3 lg:gap-x-2'>
                <a className='position-center mr-auto md:mr-0 lg:mr-2' href='/'>
                    <img className='w-30 md:w-16' src={Logo} alt="logo"/>
                </a>
                <a className='content-center font-semibold mr-auto lg:mr-8 justify-center flex-wrap hover:text-theme-primary hidden md:flex'
                   href='mailto:nkenengnunlafrancklevy@gmail.com'>
                    <span>nkeneng@gmail.com</span>
                </a>
                <nav className='mx-12 lg:flex content-center hidden'>
                    <ul className='flex gap-x-7 content-center'>
                        <li className='flex content-center'>
                            <a className={activeClassIf(path === '')} href='/'>
                                <span>Home</span>
                            </a>
                        </li>
                        <li className='flex content-center'>
                            <a className={activeClassIf(path === 'about')} href='/about'>
                                <span>About</span>
                            </a>
                        </li>
                        <li className='flex content-center'>
                            <a className={activeClassIf(path === 'services')} href='/services'>
                                <span>Services</span>
                            </a>
                        </li>
                        <li className='flex content-center'>
                            <a className={activeClassIf(path === 'projects')} href='/projects'>
                                <span>Projects</span>
                            </a>
                        </li>
                        <li className='flex content-center'>
                            <a className={activeClassIf(path === 'contact')} href='/contact'>
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <a href='/resume'
                   className='flex font-semibold md:w-1/4 md:text-lg w-2/5 text-4xl lg:w-max lg:mr-0 lg:px-5 lg:text-base button position-center bg-theme-primary md:mr-2 px-10 rounded-full mr-2 lg:mr-0'>
                    <span>Resume</span>
                    <div className='ml-3 h-10 md:h-6 lg:h-5'>
                        <IconContext.Provider value={{size: 'auto'}}>
                            <LiaDownloadSolid className='align-baseline'/>
                        </IconContext.Provider>
                    </div>
                </a>
                <button onClick={toggleMenu} className='flex cursor-pointer position-center lg:hidden h-32 md:h-14'>
                    <IconContext.Provider value={{size: 'auto'}}>
                        <CgMenuRight/>
                    </IconContext.Provider>
                </button>
            </header>
            <nav className={toggleMobileMenu ? mobileMenuVariants.visible : mobileMenuVariants.hidden}>
                <ul className='flex text-4xl gap-y-7 font-semibold uppercase content-center flex-col px-5 py-4'>
                    <li className='flex content-center py-4 px-3 mb-4'>
                        <a href='/'>
                            <span>Home</span>
                        </a>
                    </li>
                    <li className='flex content-center py-4 px-3 mb-4'>
                        <a href='/about'>
                            <span>About</span>
                        </a>
                    </li>
                    <li className='flex content-center py-4 px-3 mb-4'>
                        <a href='/services'>
                            <span>Services</span>
                        </a>
                    </li>
                    <li className='flex content-center py-4 px-3 mb-4'>
                        <a href='/projects'>
                            <span>Projects</span>
                        </a>
                    </li>
                    <li className='flex content-center py-4 px-3 mb-4'>
                        <a href='/contact'>
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}