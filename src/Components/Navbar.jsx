import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand d-inline-flex gap-2 align-items-center lh-1" href="index.html">
          <span className="text-primary"><i className='bi bi-shop'></i></span>
          <span className="fw-bold "> Indian-Bazaar</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item"><a href="#hero" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#courses" className="nav-link">Courses</a></li>
            <li className="nav-item"><a href="#mentor" className="nav-link">Mentor</a></li>
            <li className="nav-item"><a href="#group" className="nav-link">Group</a></li>
            <li className="nav-item"><a href="#testimonials" className="nav-link">Testimonials</a></li>
            <li className="nav-item"><a href="#pricing" className="nav-link">Pricing</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
