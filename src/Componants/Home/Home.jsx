import React, { Component } from 'react'
import logo from '../../Assets/imag/avataaars.svg'
import './Home.css'
export default class Home extends Component {
  render() {
  return (
    <div className='home d-flex align-items-center justify-content-center text-white p-5'>
      <div className=' text-center m-5'>
        <img src={logo} alt="avatar" className=' w-75 mb-2'/>
        <h2 className=' text-uppercase text-white mb-3 fs-2 fw-bolder'>start Framework</h2>
        <div className='d-flex align-items-center justify-content-center mb-3'>
          <div className='line me-3 bg-white'></div>
          <i className='fa-solid fa-star'></i>
          <div className='line ms-3 bg-white'></div>
        </div>
        <p className=' mb-2'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  )
  }
}

