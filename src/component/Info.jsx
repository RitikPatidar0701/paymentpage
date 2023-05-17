import React from 'react'

const Info = () => {



  return (
    <div className='info-container'>

        <h1>Access curated courses worth <br />
        ₹ <span className='price' >18,500</span>  at just <span className='text-blue'> ₹ 99</span> per year!</h1>

        <ul className="info-offers">
        <li><i class="fa-solid fa-book-open"></i> <span className='text-blue'> 100+</span> Job relevant courses</li>
<li><i class="fa-regular fa-clock"></i> <span className='text-blue'> 20,000+ </span>Hours of content</li>
<li><i class="fa-solid fa-tv"></i> <span className='text-blue'> Exclusive</span> webinar access</li>
<li><i class="fa-solid fa-graduation-cap"></i> Scholarship worth  <span className='text-blue'> ₹94,500 </span></li>
<li><i class="fa-solid fa-ban"></i> <span className='text-blue'> Ad Free </span>learning experience</li>

        </ul>
    </div>
  )
}

export default Info