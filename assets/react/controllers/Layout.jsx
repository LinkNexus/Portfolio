import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";
import Footer from "./Footer.jsx";
import About from "./About.jsx";
import {IconContext} from "react-icons";
import {FaArrowRightLong} from "react-icons/fa6";
import BreadCrumb from '../../images/breadcrumb-bg.jpg';

export default function () {
    const path = location.pathname.replace('/', '');
    return (
        <>
            <Header path={path}/>
            <div>
                {path !== '' && <div className='breadcrumb z-[2] relative bottom-[110px] flex flex-wrap w-full flex-col content-center justify-center relative py-10'>
                    <div className='mt-36 md:mb-12'>
                        <h2 className='text-4xl lg:text-6xl font-extrabold mb-5 text-center'>About</h2>
                        <div className='flex content-center justify-center text-lg gap-x-2'>
                            <a href='/' className='hover:underline underline-offset-4'>Home</a>
                            <IconContext.Provider value={{className: 'test'}}>
                                <FaArrowRightLong className='relative top-1'/>
                            </IconContext.Provider>
                            <span>{path[0].toUpperCase() + path.slice(1)}</span>
                        </div>
                    </div>
                </div>}
                <section className='mt-10 px-4 lg:px-24 z-[4]'>
                    {path === '' && <MainContent/>}
                    {path === 'about' && <About path={path}/>}
                </section>
            </div>
            <Footer path={path}/>
        </>
    );
}

// function displayPageFromPath({path}) {
//     switch (path) {
//         case '':
//             return <MainContent />;
//         case 'about':
//             return <About />;
//         case 'services':
//             return <Services />;
//         case 'projects':
//             return <Projects />;
//         case 'contact':
//             return <Contact />;
//         default:
//             return <NotFound />;
//     }
// }