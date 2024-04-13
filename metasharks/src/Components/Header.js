import { NavLink } from 'react-router-dom';
import logoimage from '../images/logo-image.png';
import { useNavigate } from 'react-router-dom'; 
import dropdownarrow from '../images/dropdownarrow.png';
import { useState } from 'react';
function Header() {
  const navigate = useNavigate();
  const handleStartProjectClick = () => { navigate('/Instantpage'); };

  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
};
  return (
    <>
    <div className="container-fluid" style={{borderBottom:'1px solid #C8C8C8 '}}>
      <div className="main_container">
      <div className="row" >
        <div className="col-12">
        
<nav class="navbar navbar-light bg-white py-lg-0 py-xl-0 py-xxl-0 py-md-3">
<div className=" navebar-logo d-flex align-items-center">
      <img src={logoimage} alt="logoimage" />
    </div>
  <div class="navbar d-flex align-items-center py-lg-0 py-xl-0 py-xxl-0 py-md-3  py-3flex-nowrap">
  <ul className={`navbar-nav ms-auto  d-flex flex-row align-items-center ${isActive ? "active" :""}`}>
        <li class="nav-item py-2 py-lg-4 py-xl-4 py-xxl-4 py-md-0">
          <NavLink to='/' className='nav-elements'>Comapny</NavLink>
          <img src={dropdownarrow} alt="guiui" />
          <ul className="dropdown-menu gap-5">
            <li> <NavLink to='/Company' className='nav-elements'>Company </NavLink></li>
            <NavLink to='/Solutions' className='nav-elements'>Solutions</NavLink>
            <li><NavLink to='/Resources' className='nav-elements'>Resources</NavLink></li>
          </ul>
        </li>
        <li className="nav-item py-2 py-lg-4 py-xl-4 py-xxl-4 py-md-2">
        <NavLink to='/Augementation' className='nav-elements '>Solutions</NavLink>
        <img src={dropdownarrow} alt="hoiho" />
        <ul className="dropdown-menu gap-5">
            <li> <NavLink to='/Company' className='nav-elements'>Company  </NavLink></li>
            <NavLink to='/Solutions' className='nav-elements'>Solutions</NavLink>
            <li><NavLink to='/Resources' className='nav-elements'>Resources</NavLink></li>
          </ul>
        </li>
        <li className="nav-item dropdown py-2 py-lg-4 py-xl-4 py-xxl-4 py-md-2">
        <NavLink to='/Resources' className='nav-elements'>Resources</NavLink>
        <img src={dropdownarrow} alt="hgfuy" />
          <ul className="dropdown-menu gap-5">
            <li> <NavLink to='/Company' className='nav-elements'>Company  </NavLink></li>
            <NavLink to='/Solutions' className='nav-elements'>Solutions</NavLink>
            <li><NavLink to='/Resources' className='nav-elements'>Resources</NavLink></li>
          </ul>
        </li>
        <li class="nav-item ">
        <button className='btn   bg-primary text-white py-xxl-2 py-xl-2 py-lg-2 py-sm-1 py-md-2 px-xxl-4 px-sm-2 px-xl-4 px-lg-4 px-md-3' style={{borderRadius:'45px'}} 
        onClick={handleStartProjectClick}>Start Project</button>
        </li>
      </ul>
  </div>
  <div className={`nav-toggle mt-md-2 ${isActive ? 'active' : ''}` } onClick={toggleMenu}>
        <span className="bar"></span>
      </div>
</nav>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}
export default Header;