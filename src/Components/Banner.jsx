import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import carouselTwo from '../assets/a2.jpg'
import carouselOne from '../assets/a1.jpg'
import carouselThree from '../assets/a3.jpg'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const AutoplaySlider = withAutoplay(AwesomeSlider);






const Banner = () => {

    {/* this is using for animation of typewriter  */ }
    const [text] = useTypewriter({
        words: [' one has ever become poor by giving'],
        loop: 0,
        typeSpeed: 80,

    })

    return (
        <div className='max-w-6xl mx-auto p-2 pb-16 pt-10'>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={8000}
                className='md:h-[400px]'
            >
                <div className=' rounded-2xl md:text-left  text-center' style={{ backgroundImage: `url(${carouselOne})`, borderRadius: '10px', padding: '10px', backgroundRepeat: 'no-repeat' }}>
                    <h2 className='text-xl md:text-3xl text-red-500 font-bold md:pb-5 '>Lifting Others, Lifting Ourselves: The Power of Helping People</h2>
                    <p className='text-white lg:w-3xl '>Helping others is more than just an act of kindness—it's a way to uplift the human spirit, both theirs and our own. When we reach out to support someone in need.</p>
                    {/* this is using for animation of typewriter*/}
                    <div className="hidden md:flex lg:flex justify-center pt-1 text-xl">
                        <h2 className="text-center text-accent">No{text}</h2>
                    </div>

                </div>
                <div className='rounded-2xl md:text-left  text-center ' style={{ backgroundImage: `url(${carouselTwo})`, borderRadius: '10px', padding: '10px' }}>
                    <h2 className='text-xl md:text-3xl text-red-500 font-bold md:pb-5'>Kindness in Action: Changing Lives Through Help and Compassion</h2>
                    <p className='text-white lg:w-3xl'>Kindness isn't just a feeling—it's a powerful force when turned into action. Through simple, compassionate gestures like lending a hand.</p>
                    {/* this is using for animation of typewriter*/}
                    <div className="hidden md:flex lg:flex justify-center pt-1 text-xl">
                        <h2 className="text-center text-accent">No{text}</h2>
                    </div>

                </div>
                <div className='rounded-2xl md:text-left  text-center ' style={{ backgroundImage: `url(${carouselThree})`, borderRadius: '10px', padding: '10px' }}>
                    <h2 className='text-xl md:text-3xl text-red-500 font-bold md:pb-5'>Together We Rise: The Importance of Supporting One Another</h2>
                    <p className='text-white lg:w-3xl'>No one achieves success or overcomes challenges entirely on their own. We all need encouragement, support, and connection to grow and thrive.</p>
                    {/* this is using for animation of typewriter*/}
                    <div className="hidden md:flex lg:flex justify-center pt-1 text-xl">
                        <h2 className="text-center text-accent">No{text}</h2>
                    </div>

                </div>
            </AutoplaySlider>
        </div>
    );
};

export default Banner;