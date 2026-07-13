import React from 'react'
import {Link} from 'react-router-dom'
const Navigationbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Vehicle App</a>
        <Link className="nav-link active" aria-current="page" to="/">Home Page</Link>
       <Link className="nav-link active" aria-current="page" to="/add">Add Car</Link>
       <Link className="nav-link active" aria-current="page" to="/view">View Car</Link>
       
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navigationbar