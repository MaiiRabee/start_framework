import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className='about text-white'>
      <div className=' text-center p-5'>
        <h2 className=' text-uppercase text-white mb-3 fs-1 fw-bolder'>ABOUT COMPONENT</h2>
        <div className='d-flex align-items-center justify-content-center mb-3'>
          <div className='line me-3 bg-white'></div>
          <i className='fa-solid fa-star'></i>
          <div className='line ms-3 bg-white'></div>
        </div>
      </div>
      <div className=' container text-white pb-5'>
            <div className="row">
                <div className="col-md-6">
                <p className=' mb-2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>    
                </div>
                <div className="col-md-6">
                <p className=' mb-2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>    
                </div>
            </div>
        </div>
    </div>
  )
}
