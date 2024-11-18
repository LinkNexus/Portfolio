import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";
import Footer from "./Footer.jsx";
import About from "./About.jsx";
import {IconContext} from "react-icons";
import {FaArrowRightLong} from "react-icons/fa6";
import Services from "./Services.jsx";
import Projects from "./Projects.jsx";
import Contact from './Contact.jsx';
import NotFound from "./NotFound.jsx";

export default function ({ csrfToken, form }) {
    const path = location.pathname.replace('/', '');

    console.log(form);

    if (path !== '') {
        document.title = 'Levy Nkeneng | ' + path[0].toUpperCase() + path.slice(1);
    }

    const paths = ['about', 'services', 'projects', 'contact'];

    return (
        <>
            <Header path={path}/>
            <div>
                {paths.includes(path) && <div className='breadcrumb z-[2] relative bottom-[110px] left-0 flex flex-wrap flex-col content-center justify-center py-10'>
                    <div className='mt-36 md:mb-12'>
                        <h2 className='text-4xl lg:text-6xl font-extrabold mb-5 text-center'>{path[0].toUpperCase() + path.slice(1)}</h2>
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
                    {displayPageFromPath({path, csrfToken, form})}
                </section>
            </div>
            <Footer path={path}/>
        </>
    );
}

function displayPageFromPath({ path, csrfToken, form }) {
    switch (path) {
        case '':
            return <MainContent />;
        case 'about':
            return <About path={path} />;
        case 'services':
            return <Services />;
        case 'projects':
            return <Projects />;
        case 'contact':
            return <Contact csrfToken={csrfToken} form={form} />;
        default:
            return <NotFound />;
    }
}