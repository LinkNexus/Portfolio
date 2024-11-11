import Logo from '../../images/logo-white.png'
import {LiaDownloadSolid} from "react-icons/lia";
import {useEffect, useState} from "react";
import {activeClassIf} from "../../utils/activeClassIf.js";
import {CgMenuRight} from "react-icons/cg";
import {IconContext} from "react-icons";
import {AiOutlineClose} from "react-icons/ai";

export default function ({ path }) {
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
    const [positionY, setPositionY] = useState(window.scrollY);
    console.log(path)

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
                <a className='position-center mr-auto md:mr-0 lg:mr-2' href='/public'>
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
                   className='flex-row flex-nowrap font-semibold md:w-1/4 md:text-lg w-5/11 lg:w-max lg:mr-0 lg:px-5 lg:text-base button position-center bg-theme-primary md:mr-2 px-6 rounded-full lg:mr-0'>
                    <span>Resume</span>
                    <div className='h-5 align-baseline md:h-6 lg:h-5'>
                        <IconContext.Provider value={{size: 'auto'}}>
                            <LiaDownloadSolid className='align-baseline'/>
                        </IconContext.Provider>
                    </div>
                </a>
                <button onClick={toggleMenu} className='flex cursor-pointer position-center lg:hidden h-10 md:h-14'>
                    <IconContext.Provider value={{size: 'auto'}}>
                        <CgMenuRight className={toggleMobileMenu ? 'hidden' : 'block'}/>
                    </IconContext.Provider>
                    <IconContext.Provider value={{size: 'auto'}}>
                        <AiOutlineClose className={toggleMobileMenu ? 'block' : 'hidden'}/>
                    </IconContext.Provider>
                </button>
            </header>
            <nav className={(toggleMobileMenu ? mobileMenuVariants.visible : mobileMenuVariants.hidden) + ' fixed top-[100px] left-0 z-10'}>
                <ul className='flex text-xl gap-y-3 font-semibold uppercase content-center flex-col px-3 py-2'>
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