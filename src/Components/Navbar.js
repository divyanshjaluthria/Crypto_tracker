import React from 'react'

function Navbar(props) {

  return (<>
    <div>
      <nav className="navbar navbar-light bg-light coin-search d-flex">
        <form className="form-inline " placeholder="">
          <a className="navbar-brand">Crypto Tracker</a>
          <input className="form-control mr-sm-2 bg-light coin-input" type="search" placeholder="Search Here...!!!🔍" aria-label="Search" onChange={props.handleOnChange} />
          <button className="btn btn-outline-dark my-2 my-sm-0 coin-text" type="submit" >Search</button>
        </form>
      </nav>
    </div></>
  )
}

export default Navbar