import React from 'react'

const Searchbar = () => {
  return (
    <nav className="nav__style blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input type="search" id="search" />
            <label htmlFor="search" className="label-icon">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}

export default Searchbar
