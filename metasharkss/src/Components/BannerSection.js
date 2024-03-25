import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import avatar from '../images/avatar.png'
import image5 from '../images/image5.png';
import image8 from '../images/image8.png';

 
function BannerSection() {
   

  return (
    <div className="container-fluid">
      <div className="main_container">
        <div className="row d-flex justify-content-between">
          <div className="col-xxl-6 col-xl-6 col-md-6 col-12 px-md-1  px-lg-4 px-xxl-4 px-xl-4">
            <div className="text-portion">
              <div className="heading-div">
                <h2 className="heading-portion">We design, build and modernize software applications</h2>
              </div>
              <p className="banner-p">Use the industry’s best practices to guide your project to success</p>
            </div>
             
            <div className="subtext-portion row d-lg-flex d-none">
              <div className="col-lg-6">
              <button className='btn banner nav-elements bg-gray  text-white px-xxl-4 px-sm-2 px-xl-4 px-lg-4 px-md-3  py-xxl-2 py-xl-2 py-lg-2 py-sm-1 py-md-2 ' style={{ borderRadius: '45px', backgroundColor:'#4B4B4D' }}>Start Project</button>
                <img src={image5} className='image5' alt="" />
                <p className="banner-p sub">We're recognized as one of the leading software development companies in New Zealand.</p>
              </div>
              <div className="col-lg-6 position-relative">
                <div className="banner-cardbox card   position-absolute">
                  <div className="card-body">
                   <div className="avatar d-flex align-items-center ">
                   <img src={avatar} alt="avatar me-3" style={{width:'32px'}}/>
                   <span className='fs-6 fw-700 ms-3 d-block' 
                   style={{fontSize:'12px', color:'#4B4B4D',fontWeight:'600',fontFamily: "Poppins",}}>Henrik Segersven</span>
                   
                   </div>
                   <span className='d-block py-1'  style={{fontSize:'12px', color:'#4B4B4D',fontWeight:'500',fontFamily: "Poppins",}}>"Transparent communication makes working width Devstark easy and painless.
                    Despite their team being fully remote, all the upcomming issues are solved.""
                   </span>
                  </div>
                </div>
                <div className="banner-cardbox card  position-absolute">
                  <div className="card-body">
                   <div className="avatar d-flex align-items-center ">
                   <img src={avatar} alt="avatar me-3" style={{width:'32px'}}/>
                   <span className='fs-6 fw-700 ms-3 d-block' 
                   style={{fontSize:'12px', color:'#4B4B4D',fontWeight:'600',fontFamily: "Poppins",}}>Henrik Segersven</span>
                   
                   </div>
                   <span className='d-block py-1'  style={{fontSize:'12px', color:'#4B4B4D',fontWeight:'500',fontFamily: "Poppins",}}>"Transparent communication makes working width Devstark easy and painless.
                    Despite their team being fully remote, all the upcomming issues are solved.""
                   </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-md-6 col-12">
            <div className="image-portion">
            <img src={image8} alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSection;
