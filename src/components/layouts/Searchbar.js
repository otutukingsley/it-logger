import React, { useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchLogs } from '../../actions/logActions'

const Searchbar = ({ searchLogs }) => {

 const text = useRef('')


  const handleSearch = (e) => {
    searchLogs(text.current.value);
  }

  return (
    <nav className="nav__style blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input type="search" id="search" ref={text} onChange={handleSearch} placeholder="Search Logs..."/>
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


Searchbar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
}

export default connect(null, { searchLogs })(Searchbar)
