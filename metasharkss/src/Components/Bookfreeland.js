import React, { useState, useEffect } from 'react';

function Bookfreeland() {
  // Initialize state for current date
  const [currentDate, setCurrentDate] = useState('');

  // Function to get current date and time
  const getCurrentDateTime = () => {
    const dateObj = new Date();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString(undefined, options);
    setCurrentDate(formattedDate);
  };

  // Update current date on component mount
  useEffect(() => {
    getCurrentDateTime();
  }, []); // Run only once on component mount
 
  // Split the date into day, month, and year
  const [month, day, year] = currentDate.split('/');

  return (
    <>
     <div className="container-fluid bg-bookfreeland">
      <div className="row d-flex ">
        <div className="col-12">
          <div className="bookfreeland-div text-center pt-5">
            <h2 className="heading-portion book">Book a free advice call</h2>
            <span className="text-white bookfreeland-span ">We offer free 30 minute zoom consultation to help with your project</span>
            <span className="text-white sub bookfreeland-span d-block">Select a date to view availability</span>
          </div>
        </div>
      </div>
      <div className="row g-0 d-flex justify-content-center mt-4">
        {/* <div className="col-lg-3 col-xl-3 col-xxl-3 d-sm-nome d-md-none d-none"></div> */}
        <div className="col-2 d-flex calander-div justify-content-center align-items-center">
          <div className="card">
            <div className="card-body text-center">
            <span className='businesscard growth-span'>{day}</span>
            </div>
          </div>
          </div>
          <div className="col-2 d-flex calander-div  justify-content-center align-items-center">  
          <div className="card">
            <div className="card-body text-center">
            <span className='businesscard growth-span'>{month}</span>
            </div>
          </div>
        
           </div>
           <div className="col-2 d-flex calander-div    justify-content-center align-items-center">  
           <div className="card">
            <div className="card-body text-center">
            <span className='businesscard growth-span'>{year}</span>
            </div>
          </div>
          
           </div>
          {/* <div className="col-lg-3 col-xl-3 col-xxl-3 d-sm-none d-md-none d-none"></div> */}
          </div>
        </div>
      
    
    </>
  )
}

export default Bookfreeland;
