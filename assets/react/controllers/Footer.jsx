import Logo from '../../images/logo-white.png'
import {activeClassIf} from "../../utils/activeClassIf.js";

export default function ({ path }) {
    return (
        <footer className='w-full bg-theme-secondary p-5 mt-32 flex flex-col gap-y-5 content-center justify-center flex-wrap'>
            <div className='mt-10 mb-5 position-center'>
                <a href='/'>
                    <img className='h-20' src={Logo} alt='logo'/>
                </a>
            </div>
            <nav>
                <ul className='w-full h-14 font-extrabold text-white flex justify-center content-center text-sm gap-x-3 md:text-lg'>
                    <li className='flex content-center'>
                        <a className={activeClassIf(path === '', ' h-full')} href='/'>
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
            <p className='mt-5 text-[#636363] text-sm text-center md:text-lg'>
                © 2024 All rights reserved by <a className='text-white hover:text-theme-primary' href='https://www.linkedin.com/in/levy-nkeneng-2b977a304/'>Levy Nkeneng</a>
            </p>
        </footer>
    );
}