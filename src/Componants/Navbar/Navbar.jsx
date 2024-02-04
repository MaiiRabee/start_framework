import React, {Component} from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg Navbar-c p-4">
                <div className="container">
                    <Link className="navbar-brand text-white fs-2 fw-bolder" to="">START FRAMEWORK</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={(x)=> x.isActive? 'test nav-link fw-bolder' : "nav-link fw-bolder"} to="about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(x)=> x.isActive? 'test nav-link fw-bolder' : "nav-link fw-bolder"} to="portfolio">PORTFOLIO</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(x)=> x.isActive? 'test nav-link fw-bolder' : "nav-link fw-bolder"} to="contact">CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
    </nav>
  )
}
