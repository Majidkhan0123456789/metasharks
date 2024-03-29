// import React from "react";
// import Slider from "react-slick";
// import redblackbrush from '../images/red-black-brush.jpg';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import '@fortawesome/fontawesome-free/css/all.min.css';

// function Carousel() {
//   const CustomPrevArrow = (props) => {
//     const { className, onClick } = props;
//     return (
//       <div className={className} onClick={onClick}>
//         <i className="fas fa-chevron-left"></i>
//       </div>
//     );
//   };

//   const CustomNextArrow = (props) => {
//     const { className, onClick } = props;
//     return (
//       <div className={className} onClick={onClick}>
//         <i className="fas fa-chevron-right"></i>
//       </div>
//     );
//   };

//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: false,
//     speed: 500,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 2,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         }
//       }
//     ]
//   };

//   return (
//     <div className="container-fluid mt-xl-5 mt-xxl-5 mt-lg-5 mt-md-3">
//       <div className="main_container">
//         <div className="row">
//           <div className="col-12">
//             <h2 className="heading-portion">
//               Featured topics
//             </h2>
//           </div>
//           <div className="col-12">
//             <div className="slider-container">
//               <Slider {...settings}>
//                 <div className="slide-item">
//                   <div className="card border-0">
//                     <div className="card-body" style={{padding:'10px'}}>
//                       <div className="imagecard d-flex justify-content-center ">
//                         <img src={redblackbrush} alt="" style={{maxWidth:'100%', width:'100%'}} />
//                       </div>
//                       <div className="textcard px-4">
//                         <span className=" fs-6 pt-3 pt-2 d-block"> OCTOBER 03,2023</span>
//                         <h2 className="featured heading-portion py-3"> IT STAffing: Individual Hiring vs. Specialized...</h2>
//                         <p className="featured banner-p ">Should you hire individual developers or go for  a specialized, custom-built developer...</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Additional slides go here */}
//               </Slider>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Carousel;

import redblackbrush from '../images/red-black-brush.jpg';
import React, { useRef } from "react";
import Slider from "react-slick";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

function PreviousNextMethods() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="container-fluid mt-xl-5 mt-xxl-5 mt-lg-5 mt-md-3">
      <div className="main_container">
    
    <div className="row">
         <div className="col-12">
            <h2 className="heading-portion">
                Featured topics
            </h2>
         </div>
         <div className="col-12">
         <div className="slider-container" style={{height:'auto'}}>
         
         </div>
         </div>
</div>
<button className="button mb-2 px-3" onClick={previous} style={{border:'none',
        backgroundColor: 'transparent',}}>
        <ArrowBackIos style={{ color: "#4B4B4D", fontSize: "16px",
        border:'none',backgroundColor:'none' }} />
        </button>
        <span className='rounded-100' style={{width:'20px', height:'20px'}}></span>
        <button className="button mb-2 px-3" onClick={next} style={{border:'none',
        backgroundColor: 'transparent',}}>
        <ArrowForwardIos style={{ color: "#4B4B4D", fontSize: "16px",
        border:'none',backgroundColor:'none' }} />
        </button>
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}>
          <div className="slide-item">
                   <div className="card border-0">
                     <div className="card-body" style={{padding:'10px'}}>
                       <div className="imagecard d-flex justify-content-center ">
                         <img src={redblackbrush} alt="" style={{maxWidth:'100%', width:'100%'}} />
                       </div>
                       <div className="textcard px-4">
                         <span className=" fs-6 pt-3 pt-2 d-block"> OCTOBER 03,2023</span>
                         <h2 className="featured heading-portion py-3"> IT STAffing: Individual Hiring vs. Specialized...</h2>
                         <p className="featured banner-p ">Should you hire individual developers or go for  a specialized, custom-built developer...</p>
                       </div>
                     </div>                   </div>
                 </div>
                  
                 
                 <div className="slide-item">
                   <div className="card border-0">
                     <div className="card-body" style={{padding:'10px'}}>
                       <div className="imagecard d-flex justify-content-center ">
                         <img src={redblackbrush} alt="" style={{maxWidth:'100%', width:'100%'}} />
                       </div>
                       <div className="textcard px-4">
                         <span className=" fs-6 pt-3 pt-2 d-block"> OCTOBER 03,2023</span>
                         <h2 className="featured heading-portion py-3"> IT STAffing: Individual Hiring vs. Specialized...</h2>
                         <p className="featured banner-p ">Should you hire individual developers or go for  a specialized, custom-built developer...</p>
                       </div>
                     </div>                   </div>
                 </div>
                 <div className="slide-item">
                   <div className="card border-0">
                     <div className="card-body" style={{padding:'10px'}}>
                       <div className="imagecard d-flex justify-content-center ">
                         <img src={redblackbrush} alt="" style={{maxWidth:'100%', width:'100%'}} />
                       </div>
                       <div className="textcard px-4">
                         <span className=" fs-6 pt-3 pt-2 d-block"> OCTOBER 03,2023</span>
                         <h2 className="featured heading-portion py-3"> IT STAffing: Individual Hiring vs. Specialized...</h2>
                         <p className="featured banner-p ">Should you hire individual developers or go for  a specialized, custom-built developer...</p>
                       </div>
                     </div>                   </div>
                 </div>
      </Slider>
      <div>
       
      </div>
      </div>
      </div>
  );
}

export default PreviousNextMethods;

