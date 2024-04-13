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
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Large devices (desktops)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768, // Medium devices (tablets)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480, // Small devices (phones)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };

  return (
    <div className="container-fluid  mb-lg-5 mb-xl-5 mb-xxl-5 mt-lg-5 mt-xl-5
    mt-xxl-5">
      <div className="main_container">

        <div className="row">
          <div className="col-12">
            <h2 className="featured heading-portion ">
              Featured topics
            </h2>
          </div>
          <div className="col-12">
            <div className="slider-container" style={{ height: 'auto' }}>

            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <button className="button mb-4 px-2 d-block " onClick={previous} style={{
            border: 'none', backgroundColor: 'transparent', }}>
            <ArrowBackIos style={{ color: "#4B4B4D", fontSize: "16px", border: 'none', backgroundColor: 'none'}} />
          </button>
          <div className='rounded-circle d-block mb-4' style={{ width: '30px', height: '30px',
          border: '1px solid #4B4B4D',}}></div>
          <button className="button mb-4 px-3 d-block" onClick={next} style={{
            border: 'none', backgroundColor: 'transparent',}}>
            <ArrowForwardIos style={{ color: "#4B4B4D", fontSize: "14px", border: 'none', backgroundColor: 'none'}} />
          </button>
        </div>
        <Slider  ref={slider => { sliderRef = slider; }} {...settings}>
          <div className="slide-item">
            <div className="card border-0">
              <div className="card-body  " style={{ padding: '10px' }}>
                <div className="imagecard d-flex justify-content-center ">
                  <img src={redblackbrush} alt="" style={{ maxWidth: '100%', width: '100%' }} />
                </div>
                <div className="textcard  px-lg-3 py-xl-4 py-xxl-4 py-md-2 py-1">
                  <span className=" fs-6 pt-3 pt-2 d-block"> OCTOBER 03,2023</span>
                  <h2 className=" featured sub-heading-portion py-lg-3 py-xl-3 py-xxl-3 py-md-2 my-1"> IT STAffing: Individual Hiring vs. Specialized...</h2>
                  <p className="featured banner-p ">Should you hire individual developers or go for  a specialized, custom-built developer...</p>
                </div>
              </div>                   </div>
          </div>


          <div className="slide-item">
            <div className="card border-0">
              <div className="card-body  " style={{ padding: '10px' }}>
                <div className="imagecard d-flex justify-content-center ">
                  <img src={redblackbrush} alt="" style={{ maxWidth: '100%', width: '100%' }} />
                </div>
                <div className="textcard  px-lg-3 py-xl-4 py-xxl-4 py-md-2 py-1">
                  <span className=" fs-6 pt-3 pt-2 d-block"> OCTOBER 03,2023</span>
                  <h2 className="featured sub-heading-portion py-lg-3 py-xl-3 py-xxl-3 py-md-2 my-1"> IT STAffing: Individual Hiring vs. Specialized...</h2>
                  <p className="featured banner-p ">Should you hire individual developers or go for  a specialized, custom-built developer...</p>
                </div>
              </div>                   </div>
          </div>
          <div className="slide-item">
            <div className="card border-0 p-0">
              <div className="card-body" style={{ padding: '10px' }}>
                <div className="imagecard d-flex justify-content-center ">
                  <img src={redblackbrush} alt="" style={{ maxWidth: '100%', width: '100%' }} />
                </div>
                <div className="textcard px-lg-3 py-xl-4 py-xxl-4 py-md-2 py-1">
                  <span className=" fs-6 pt-3 pt-2 d-block"> OCTOBER 03,2023</span>
                  <h2 className="featured sub-heading-portion py-lg-3 py-xl-3 py-xxl-3 py-md-2 my-1"> IT STAffing: Individual Hiring vs. Specialized...</h2>
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

