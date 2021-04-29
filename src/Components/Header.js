import React from 'react'
import { Link } from 'react-router-dom';

let Header=()=>{
    return(
  <nav class="nav bg-secondary p-3  ">
  <Link class="nav-link text-light mr-1 " to='/'>Home</Link>
  <Link class="nav-link text-light mr-1" to='/AddNew'>AddNew</Link>
  <Link class="nav-link text-light mr-1" to='/login'>Login</Link>
  {/* <Link class="nav-link text-light mr-1" to='/Details'>Details</Link> */}

  </nav>
    )
}

export default Header;