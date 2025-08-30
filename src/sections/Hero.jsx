import { useMediaQuery } from 'react-responsive';
import Button from '../components/Button.jsx';
import { calculateSizes } from '../constants/index.js';
import { ComputersCanvas } from "../components/canvas";
import { styles } from "../styles";



const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Mohan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I design and develop high-performance <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  )
};

export default Hero;
