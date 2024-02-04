import React from 'react'
import './Portfolio.css'
import im1 from '../../Assets/imag/poert1.png'
import im2 from '../../Assets/imag/port2.png'
import im3 from '../../Assets/imag/port3.png'

export default function Portfolio() {
  
  return (
    <div id='portfolio'>
      <div className=' container'>
      <div className='text-center p-4'>
        <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>PORTFOLIO COMPONENT</h2>
        <div className='d-flex align-items-center justify-content-center mb-3'>
          <div className='lcontact me-3'></div>
          <i className='fa-solid fa-star'></i>
          <div className='lcontact ms-3'></div>
        </div>
      </div>
      <div className="row g-5 mb-5">
        <div className="col-md-4">
          <div className='rounded-3 overflow-hidden position-relative'>
            <img src={im1} alt="" className=' w-100 rounded-3'/>
            <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
             <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className='rounded-3 overflow-hidden position-relative'>
            <img src={im2} alt="" className=' w-100 rounded-3'/>
            <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
             <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className='rounded-3 overflow-hidden position-relative'>
            <img src={im3} alt="" className=' w-100 rounded-3'/>
            <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
             <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className='rounded-3 overflow-hidden position-relative'>
            <img src={im1} alt="" className=' w-100 rounded-3'/>
            <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
             <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className='rounded-3 overflow-hidden position-relative'>
            <img src={im2} alt="" className=' w-100 rounded-3'/>
            <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
             <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className='rounded-3 overflow-hidden position-relative'>
            <img src={im3} alt="" className=' w-100 rounded-3'/>
            <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
             <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="fixed-box" className="d-none justify-content-center align-items-center  vh-100">
       <div id="parent" className="bg-danger position-relative">
        <img src="./img/portfolio-1.jpg" id="inner-img" className="w-100" />
      </div>
    </div>
    </div>
  )
}
