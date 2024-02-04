import React from 'react'
import './Conatct.css'

export default function Conatct() {
  return (
    <div className=' pt-4'>
        <div className='text-center'>
        <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>conatct section</h2>
        <div className='d-flex align-items-center justify-content-center mb-3'>
          <div className='lcontact me-3'></div>
          <i className='fa-solid fa-star'></i>
          <div className='lcontact ms-3'></div>
        </div>
        </div>
        <form className='w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched'>
            <input type="text" id='userName' placeholder='userName' name='userName' className=' form-control border-0 border-bottom py-3 mb-4 position-relative ng-pristine ng-valid ng-touched'/>
            <input type="text" id='userAge' placeholder='userAge' name='userAge' className=' form-control border-0 border-bottom py-3 mb-4 position-relative ng-pristine ng-valid ng-touched'/>
            <input type="text" id='userEmail' placeholder='userEmail' name='userEmail' className=' form-control border-0 border-bottom py-3 mb-4 position-relative ng-pristine ng-valid ng-touched'/>
            <input type="text" id='userPassword' placeholder='userPassword' name='userPassword' className=' form-control border-0 border-bottom py-3 mb-1 position-relative ng-pristine ng-valid ng-touched'/>
            <button className='btn btn-c mt-4 text-white mb-3'>
            send Message
            </button>

        </form>
       
    </div>
  )
}
