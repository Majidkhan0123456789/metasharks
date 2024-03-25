import logoimage from '../images/logo-image.png';

function Footer() {
  return (
     <>
     
    <footer className="bg-white mt-lg-5 mt-xl-5 mt-xxl-5 py-lg-3">
      <div className="main_container">
        <div className="row">
          <div className="col-md-3">
             
            <ul className="list-unstyled   footer-ul">
              <li className='footer-li'> <div className=" navebar-logo d-flex align-items-center">
      <img src={logoimage} alt="logoimage" />
    </div></li>
               
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className='footer heading-portion'>Company</h5>
            <ul className="list-unstyled footer-ul">
              <li className='py-2 footer-li'><a href="#" className='footer-elements text-decoration-none'>Ration Bank</a></li>
              <li className='py-2 footer-li'><a href="#" className='footer-elements text-decoration-none'>Ration Bank</a></li>
              <li className='py-2 footer-li'><a href="#" className='footer-elements text-decoration-none'>Ration Bank</a></li>
              <li className='py-2 footer-li'><a href="#" className='footer-elements text-decoration-none'>Ration Bank</a></li>
              <li className='py-2 footer-li'><a href="#" className='footer-elements text-decoration-none'>Ration Bank</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className='footer heading-portion'>Learn</h5>
            <ul className="list-unstyled footer-ul">
            <li className='py-2 footer-li'><a href="#" className='footer-elements text-decoration-none '>Ration Bank</a></li>
              <li className='py-2 footer-li'><a href="#" className='footer-elements text-decoration-none'>Ration Bank</a></li>
              <li className='py-2 footer-li'><a href="#" className='footer-elements text-decoration-none'>Ration Bank</a></li>
              <li className='py-2 footer-li'><a href="#" className='footer-elements text-decoration-none'>Ration Bank</a></li>
              <li className='py-2 footer-li'><a href="#" className='footer-elements text-decoration-none'>Ration Bank</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className='footer heading-portion'>Resources</h5>
            <ul className="footer-ul list-unstyled">
            <li className='py-2 footer-li'><a href="#" className='footer-elements text-decoration-none'>Ration Bank</a></li>
              <li className='py-2 footer-li'><a href="#" className='footer-elements text-decoration-none '>Ration Bank</a></li>
              <li className='py-2 footer-li'><a href="#" className='footer-elements text-decoration-none'>Ration Bank</a></li>
              <li className='py-2 footer-li'><a href="#" className='footer-elements text-decoration-none'>Ration Bank</a></li>
              <li className='py-2 footer-li'><a href="#" className='footer-elements text-decoration-none'>Ration Bank</a></li>  
            </ul>
          </div>
        </div>
      </div>
    </footer>
             
     </>
  )
}
export default Footer