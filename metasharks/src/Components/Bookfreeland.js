import React, { useRef } from "react";
import Slider from "react-slick";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

function Bookfreeland() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  // Get current date
  const currentDate = new Date();
  // Calculate tomorrow's date
  const tomorrow = new Date(currentDate);
  tomorrow.setDate(currentDate.getDate() + 1);
  // Calculate the day after tomorrow's date
  const dayAfterTomorrow = new Date(currentDate);
  dayAfterTomorrow.setDate(currentDate.getDate() + 2);
  // Calculate the next 10 days after tomorrow
  const nextTenDays = [];
  for (let i = 0; i < 10; i++) {
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 2 + i);
    nextTenDays.push(nextDay);
  }

  // Format dates
  const currentMonth = currentDate.toLocaleDateString('en-US', { month: 'long' });
  const currentDay = currentDate.getDate();
  const currentYear = currentDate.getFullYear();

  const tomorrowMonth = tomorrow.toLocaleDateString('en-US', { month: 'long' });
  const tomorrowDay = tomorrow.getDate();
  const tomorrowYear = tomorrow.getFullYear();

  const dayAfterTomorrowMonth = dayAfterTomorrow.toLocaleDateString('en-US', { month: 'long' });
  const dayAfterTomorrowDay = dayAfterTomorrow.getDate();
  const dayAfterTomorrowYear = dayAfterTomorrow.getFullYear();

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
    <>
      <div className="container-fluid bg-bookfreeland">
        <div className="row d-flex ">
          <div className="col-12">
            <div className="bookfreeland-div text-center pt-lg-5 pt-xl-5 pt-xxl-5 pt-3">
              <h2 className="heading-portion book">Book a free advice call</h2>
              <span className="text-white bookfreeland-span pb-3 d-block">We offer free 30 minute zoom consultation to help with your project</span>
              <span className="text-white sub bookfreeland-span d-block pb-3">Select a date to view availability</span>
            </div>
          </div>
        </div>

        <div className="row px-md-3 px-2 px-lg-5 d-flex justify-content-center pb-md-3 pb-2 pb-lg-5 pb-xl-5 pb-xxl-5">
       
          <div className="col-md-8 col-12 col-lg-6 col-xl-4 col-xxl-4">
           
            <Slider ref={slider => { sliderRef = slider; }} {...settings}>
              {/* Today's Date */}
              <div className=" bookfreeland slide-item">
                <div className="card" style={{ borderRadius: '20px' }}>
                  <div className="card-body text-center">
                    <div className="month "  >{currentMonth}</div>
                    <div className="day  "  >{currentDay}</div>
                    <div className="year"  >{currentYear}</div>
                  </div>
                </div>
              </div>
              {/* Tomorrow's Date */}
              <div className="bookfreeland slide-item"  >
                <div className="card" style={{ borderRadius: '20px' }}>
                  <div className="card-body text-center">
                    <div className="month"  >{tomorrowMonth}</div>
                    <div className="day  "  >{tomorrowDay}</div>
                    <div className="year"  >{tomorrowYear}</div>
                  </div>
                </div>
              </div>
              {/* Day After Tomorrow's Date */}
              <div className="bookfreeland slide-item"  >
                <div className="card" style={{ borderRadius: '20px' }}>
                  <div className="card-body text-center">
                    <div className="month"  >{dayAfterTomorrowMonth}</div>
                    <div className="day  "  >{dayAfterTomorrowDay}</div>
                    <div className="year"  >{dayAfterTomorrowYear}</div>
                  </div>
                </div>
              </div>
              {/* Next 10 Days */}
              {nextTenDays.map((date, index) => (
                <div className="bookfreeland  slide-item"   key={index}>
                  <div className="card" style={{ borderRadius: '20px' }}>
                    <div className="card-body text-center">
                      <div className="month">{date.toLocaleDateString('en-US', { month: 'long' })}</div>
                      <div className="day  "  >{date.getDate()}</div>
                      <div className="year">{date.getFullYear()}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Bookfreeland;