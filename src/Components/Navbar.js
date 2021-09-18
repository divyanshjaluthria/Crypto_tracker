import React from 'react'
import {BrowserRouter , Route , Switch, Link} from 'react-router-dom'

function Navbar(props) {

  return (<>
    <div>
      <nav className="navbar navbar-light bg-light coin-search d-flex">
        <form className="form-inline " placeholder="">
          <Link to="/"><label className="navbar-brand">Crypto Tracker</label></Link>
          <input className="form-control mr-sm-2 bg-light coin-input" type="search" placeholder="Search Here...!!!🔍" aria-label="Search" onChange={props.handleOnChange} />
          <button className="btn btn-outline-dark my-2 my-sm-0 coin-text" type="submit" >Search</button>
        </form>
      </nav>
    </div></>
  )
}

export default Navbar
