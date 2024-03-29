import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logoimage from '../images/logo-image.png'
function Footer() {
  return (
    <footer className="bg-white pt-5 pb-5" style={{borderTop:'1px solid #C8C8C8 '}}>
      <div className="container pt-12 pb-10 wrapper-border1">
        <div className="row gy-6 gy-lg-0">
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <img className="mb-4" src=  {logoimage} alt="" style={{width:'150px', }}/>
              <div className="d-flex justify-content-lg-start">
              
                
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-dark mb-3" style={{ fontWeight: 600 }}>Company</h4>
              <ul className="list-unstyled mb-0">
                <li><Link className="text-dark hover-2  list-group-item" to="ration-bank">Ration Bank</Link></li>
                <li><Link className="text-dark hover-2   list-group-item" to="how-it-works">How MyCause Works</Link></li>
                <li><Link className="text-dark hover-2   list-group-item" to="why-mycause">Why MyCause</Link></li>
                {/* <li><Link className="text-dark hover-2" to="questions">Common Question</Link></li> */}
                <li><Link className="text-dark hover-2 list-group-item" to="pricing">Pricing</Link></li>
              </ul>
            </div>
          </div>

          {/* Learn More */}
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-dark mb-3" style={{ fontWeight: 600 }}>Learn More</h4>
              <ul className="list-unstyled mb-0">
                <li><Link className="text-dark hover-2   list-group-item" to="ration-bank">Ration Bank</Link></li>
                <li><Link className="text-dark hover-2    list-group-item" to="how-it-works">How MyCause Works</Link></li>
                <li><Link className="text-dark hover-2    list-group-item" to="why-mycause">Why MyCause</Link></li>
                <li><Link className="text-dark hover-2    list-group-item" to="questions">Common Question</Link></li>
                <li><Link className="text-dark hover-2    list-group-item" to="pricing">Pricing</Link></li>
              </ul>
            </div>
          </div>

          {/* Resources */}
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-dark mb-3" style={{ fontWeight: 600 }}>Resources</h4>
              <ul className="list-unstyled mb-0">
                {/* <li><Link className="text-dark hover-2" to="career">Career</Link></li> */}
                <li><Link className="text-dark hover-2 list-group-item" to="introduction">MyCause Introduction</Link></li>
                <li><Link className="text-dark hover-2 list-group-item" to="mission-and-vision">Mission & Vision</Link></li>
                <li><Link className="text-dark hover-2 list-group-item" to="our-values">Our Core Values</Link></li>
                <li><Link className="text-dark hover-2 list-group-item" to="/blogs">Blog</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container pb-5 pt-5" style={{borderTop:'1px solid #C8C8C8 '}}>
        <div className="d-md-flex align-items-center justify-content-between">
          <p className="mb-2 mb-lg-0">
            © 2023 MyCause. All rights reserved.
          </p>
          <p className="mb-2 mb-lg-0">
            <Link className="text-dark" to="/terms-of-service">Terms of Service</Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-dark" to="/privacy-notice">Privacy Notice</Link>
          </p>
          <nav className="nav social social-muted mb-0 text-md-end">
            <Link to="#"><i className="uil uil-twitter"></i></Link>
            <Link to="#"><i className="uil uil-facebook-f"></i></Link>
            <Link to="#"><i className="uil uil-dribbble"></i></Link>
            <Link to="#"><i className="uil uil-instagram"></i></Link>
            <Link to="#"><i className="uil uil-youtube"></i></Link>
          </nav>
        </div>
      </div> */}
    </footer>
  );
}

export default Footer;