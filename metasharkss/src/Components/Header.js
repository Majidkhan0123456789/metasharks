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
        <div className="col-12 py-3">
        
<nav class="navbar navbar-light bg-white">
<div className=" navebar-logo d-flex align-items-center">
      <img src={logoimage} alt="logoimage" />
    </div>
  <div class="navbar d-flex align-items-center py-0 flex-nowrap">
  <ul className={`navbar-nav ms-auto  d-flex flex-row ${isActive ? "active" :""}`}>
        <li class="nav-item">
          <NavLink to='/' className='nav-elements'>Comapny</NavLink>
          <img src={dropdownarrow} alt="guiui" />
        </li>
        <li className="nav-item">
        <NavLink to='/Augementation' className='nav-elements '>Solutions</NavLink>
        <img src={dropdownarrow} alt="hoiho" />
        </li>
        <li className="nav-item dropdown">
        <NavLink to='/Resources' className='nav-elements'>Resources</NavLink>
        <img src={dropdownarrow} alt="hgfuy" />
          <ul className="dropdown-menu">
            <li> <NavLink to='/Company' className='nav-elements'>Company</NavLink></li>
            <NavLink to='/Solutions' className='nav-elements'>Solutions</NavLink>
            <li><NavLink to='/Resources' className='nav-elements'>Resources</NavLink></li>
          </ul>
        </li>
        <li class="nav-item">
        <button className='btn nav-elements  bg-primary text-white py-1  px-3' style={{borderRadius:'20px'}} 
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