import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand d-inline-flex gap-2 align-items-center lh-1" href="index.html">
          <span className="text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-book">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
            <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
            <path d="M3 6l0 13" />
            <path d="M12 6l0 13" />
            <path d="M21 6l0 13" />
          </svg></span>
          <span className="fw-bold">LearnHub</span>
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
          <div className="d-flex gap-3 align-items-center">
            <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Get Started</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
