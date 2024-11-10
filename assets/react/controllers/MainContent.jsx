import MySelf from '../../images/myself.jpg';
import {MdArrowOutward} from "react-icons/md";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {SiGmail, SiIndeed} from "react-icons/si";
import {IconContext} from "react-icons";

export default function ({ path }) {
    return (
        <section className='px-8 mt-10 px-12 lg:px-24'>
              <div
                  className='hero-wrapper w-full px-12 py-12 rounded-2xl bg-theme-accent-2 flex flex-col content-center gap-y-10 md:flex-row md:gap-x-10 md:px-7'>
                  <h1 className='hero-title text-8xl h-fit font-extrabold mb-8 md:hidden'>
                      Hi, i'm a Student <br/>
                      + Web Developer
                  </h1>
                  <div className='w-full position-center md:h-full md:w-2/5 md:m-auto lg:w-1/3'>
                      <img className='w-4/5 rounded-[35px] md:h-full md:w-full md:rounded-[10px]' src={MySelf} alt='my_picture' />
                  </div>
                  <p className='text-3xl text-center mt-8 md:hidden'>
                      I'm a student at the University of Applied Sciences Berlin (HTW Berlin).
                      I'm a Full-Stack Web Developer with a passion for building web applications using modern technologies.
                      I'm currently looking for opportunities to work on exciting projects and collaborate with other developers.
                  </p>
                  <div className='flex flex-col w-full md:hidden'>
                      <a href='mailto:nkenengnunlafrancklevy@gmail.com' className='button-primary py-7 px-10 w-1/3 h- w-fit self-center'>
                          <span className='mr-5'>Hire Me!</span>
                          <div>
                              <IconContext.Provider value={{className: 'test'}}>
                                  <MdArrowOutward />
                              </IconContext.Provider>
                          </div>
                      </a>
                      <ul className='flex content-center gap-x-6 mt-10 w-full justify-center'>
                          <li>
                              <a href='https://www.linkedin.com/in/levy-nkeneng-2b977a304/'>
                                  <FaLinkedinIn size={'3rem'}/>
                              </a>
                          </li>
                          <li>
                              <a href='https://github.com/LinkNexus/'>
                                  <FaGithub size={'3rem'} />
                              </a>
                          </li>
                          <li>
                              <a href='mailto:nkenengnunlafrancklevy@gmail.com'>
                                  <SiGmail size={'3rem'} />
                              </a>
                          </li>
                      </ul>
                  </div>
                  <div className='hidden md:flex flex-col content-center w-3/5 lg:w-2/3 lg:m-auto'>
                      <h1 className='hero-title text-8xl h-fit font-extrabold mb-8 md:text-[2.5rem] md:mb-0 md:text-center lg:text-7xl'>
                          Hi, i'm a Student <br/>
                          + Web Developer
                      </h1>
                      <p className='text-3xl text-center mt-8 md:text-xl md:mt-5 md:mb-5 lg:hidden'>
                          I'm a Full-Stack Web Developer with a passion for building web applications using modern
                          technologies.
                      </p>
                      <p className='hidden lg:block text-xl mt-5 mb-5'>
                          I'm a student at the University of Applied Sciences Berlin (HTW Berlin).
                          I'm a Full-Stack Web Developer with a passion for building web applications using modern technologies.
                          I'm currently looking for opportunities to work on exciting projects and collaborate with other developers.
                      </p>
                      <div className='flex flex-col w-full lg:flex-row lg:content-center lg:justify-center lg:gap-x-5'>
                          <a href='mailto:nkenengnunlafrancklevy@gmail.com'
                             className='button-primary py-7 px-10 w-1/3 w-fit self-center md:py-5 md:px-7 md:text-2xl lg:max-w-1/4 lg:px-5 lg:py-3 lg:text-xl'>
                              <span className='mr-5'>Hire Me!</span>
                              <div className='h-8 lg:h-6'>
                                  <IconContext.Provider value={{size: 'auto'}}>
                                      <MdArrowOutward/>
                                  </IconContext.Provider>
                              </div>
                          </a>
                          <ul className='flex content-center gap-x-6 mt-10 w-full justify-center lg:w-fit lg:ml-5 lg:mt-0'>
                              <li>
                                  <a href='https://www.linkedin.com/in/levy-nkeneng-2b977a304/'>
                                      <div className='h-8'>
                                          <FaLinkedinIn size={'auto'}/>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a href='https://github.com/LinkNexus/'>
                                      <div className='h-8'>
                                          <FaGithub size={'auto'}/>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a href='mailto:nkenengnunlafrancklevy@gmail.com'>
                                      <div className='h-8'>
                                          <SiGmail size={'auto'}/>
                                      </div>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
        </section>
    );
}