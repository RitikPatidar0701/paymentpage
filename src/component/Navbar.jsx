import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="left-nav">
<img src='../images/edyoda.png' alt='img not found'/>
<ul>
    <li> <a href='#' >Courses</a><i class="fa-solid fa-angle-down"></i> </li>
    <li><a href='#' >Programs</a> <i class="fa-solid fa-angle-down"></i></li>
</ul>
        </div>
        <div className="rigth-nav">
          <div className="search-icon">
          <a href=''><i class="fa-solid fa-magnifying-glass"></i></a>
          </div>
          <ul className='login-btn'>
            <li><a href=''> Log In</a></li>
          </ul>
          <button className='joinnow'> JOIN NOW</button>

        </div>
    </div>
  )
}

export default Navbar