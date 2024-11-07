import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { useEffect, useRef } from 'react';
import { auth ,  logout } from '../../firebase';

const Navbar = () => {

    const navRef = useRef();

    useEffect(() => {
      window.addEventListener('scroll' , () => {
        if(window.scrollY >= 70) {
          navRef.current.classList.add('nav-shadow');
          
        } else {navRef.current.classList.remove('nav-shadow');}
      }
    )
    } , [])

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="netflix logo" />
        <ul>
            <li>Home</li>
            <li>tv shows</li>
            <li>movies</li>
            <li>news & popular</li>
            <li>my list</li>
            <li>browse by language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img className='icons' src={search_icon} alt="search icon" />
        <p>
            Children
        </p>
        <img className='icon' src={bell_icon} alt="bell icon" />
        <div className='navbar-profile'>
            <img className='profile' src={profile_img} alt="profile icon" />
            <img src={caret_icon} alt="profile icon" />
            <div className='dropdown'>
                <p onClick={() => {logout()}}>Sign out of your account</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
