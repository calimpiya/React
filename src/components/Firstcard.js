import React from 'react'

export default function Firstcard() {
  return (
    <div>
      <div class="container text-center my-5 max-width: 500px" >
    <div className="card text-center">
    < div className="card-header">
     <ul className="nav nav-tabs card-header-tabs">
      <li className="nav-item">
        <a className="nav-link active" aria-current="true"  href="/">Post</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="true" href="/">Pull</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="true"  href="/">Event</a>
      </li>
      
      </ul>
    </div>
    <div className="card-body">
    <p className="card-text">Write Something There </p>
  </div>
  <div className="card-footer text-muted">
  <ul className="nav nav-tabs card-header-tabs">
    <li className="nav-item">
        <a className="nav-link active" aria-current="true"  href="/">Post to</a>
      </li>
      <li className="nav-item">
      <button type="button" class="btn btn-secondary btn-lg" disabled>Post</button>
      </li>
      </ul>
  </div>
  </div>
  </div>
    </div>
  )
}
