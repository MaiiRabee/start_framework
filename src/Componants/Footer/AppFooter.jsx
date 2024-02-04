import React from 'react'
import './AppFooter.css'

export default function AppFooter() {
  return (
    <div className=" container-fluid">
        <div className="row text-center p-5 frow text-white">
            <div className="col-md-4">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
                <h3>AROUND THE WEB</h3>
                <div className="icons">
                    <i className='fa-brands fa-facebook px-2 py-2 border border-1 border-white rounded-circle m-2'></i>
                    <i className='fa-brands fa-twitter px-2 py-2 border border-1 border-white rounded-circle m-2'></i>
                    <i className='fa-brands fa-linkedin-in px-2 py-2 border border-1 border-white rounded-circle m-2'></i>
                    <i className='fa-solid fa-globe px-2 py-2 border border-1 border-white rounded-circle m-2'></i>
                </div>
            </div>
            <div className="col-md-4">
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
        <div className="row text-center srow">
        <div className="col-md-12  text-white p-2">
                <p>Copyright © Your Website 2021</p>
            </div>
        </div>
    </div>
  )
}
