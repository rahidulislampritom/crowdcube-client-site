import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import carouselTwo from '../assets/a2.jpg'
import carouselOne from '../assets/a1.jpg'
import carouselThree from '../assets/a3.jpg'




const AutoplaySlider = withAutoplay(AwesomeSlider);


const Banner = () => {

    return (
        <div className='max-w-6xl mx-auto p-6 pb-16'>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={8000}
                className='md:h-[550px]'
            >
                <div className='rounded-2xl' style={{ backgroundImage: `url(${carouselOne})`, borderRadius: '10px' }}>
                    <h2 className='text-3xl text-white font-bold pb-5'>Lifting Others, Lifting Ourselves: The Power of Helping People</h2>
                    <p className='text-white w-3xl'>Helping others is more than just an act of kindness—it's a way to uplift the human spirit, both theirs and our own. When we reach out to support someone in need, we create a ripple effect of positivity that extends far beyond the moment. Acts of help, whether big or small, foster empathy, build stronger communities, and remind us that we're all connected. In lifting others, we discover a deeper sense of purpose and fulfillment. It's in giving that we grow, and in compassion that we find true strength.</p>
                </div>
                <div style={{ backgroundImage: `url(${carouselTwo})`, borderRadius: '10px' }}>
                    <h2 className='text-3xl text-white font-bold pb-5'>Kindness in Action: Changing Lives Through Help and Compassion</h2>
                    <p className='text-white w-3xl'>Kindness isn't just a feeling—it's a powerful force when turned into action. Through simple, compassionate gestures like lending a hand, offering encouragement, or standing up for someone in need, we can transform lives. These moments of care may seem small, but to someone struggling, they can mean everything. Kindness in action builds trust, restores hope, and creates a ripple effect that inspires others to do the same. When we choose compassion, we choose to be part of the solution—changing the world one life, one moment, at a time.</p>
                </div>
                <div style={{ backgroundImage: `url(${carouselThree})`, borderRadius: '10px' }}>
                    <h2 className='text-3xl text-white font-bold pb-5'>Together We Rise: The Importance of Supporting One Another</h2>
                    <p className='text-white w-3xl'>No one achieves success or overcomes challenges entirely on their own. We all need encouragement, support, and connection to grow and thrive. When we stand by each other—offering help, sharing burdens, and celebrating victories—we build stronger, more resilient communities. Supporting one another not only strengthens our relationships but also reminds us that we are not alone. In unity, there is power. Together, we rise—facing life's struggles with courage and turning compassion into collective strength.</p>
                </div>
            </AutoplaySlider>
        </div>
    );
};

export default Banner;