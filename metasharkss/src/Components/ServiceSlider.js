import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import datastorage from '../images/datastorage.jpg'
import digicom from '../images/digicom.jpg'
import meta_block from '../images/meta-black.ico'
import businessman from '../images/businessman.jpg'
import tech from '../images/tech.jpg'
import cubework from '../images/cubework.jpg'
import oso from '../images/oso.jpg';
import techno from '../images/tech.jpg'
import codesymble from '../images/codesymble.jpg'
import Marquee from 'react-fast-marquee';
 


    const images=[ datastorage, digicom, meta_block, businessman, tech, 
    cubework, oso, techno, codesymble]

function ServiceSlider() {
 

    return (
   <>
    <div className=' bg-color text-8xl'>
                <Marquee speed={50} play={true} loop={0} pauseOnHover={true} gradient={false} gradientColor='#F5F5FA' gradientWidth={40} direction="right">
                    {images.map((src, index) => (
                        <div className='rounded-xl p-3 mr-6 bg-slate-200'
                            key={index}
                            style={{
                                display: 'inline-block',
                                // Adjusting vertical position using margin
                                // marginTop: index % 2 === 0 ? '50px' : '0px',
                            }}
                        >
 
                            <img className='image-slide'
                                src={src}
                                alt={`Gallery item ${index}`}
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
   </>
  )
}
export default ServiceSlider;