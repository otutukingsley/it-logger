import React, { useEffect, Fragment } from 'react'
import Searchbar from './components/layouts/Searchbar'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css'

const App = () => {
  useEffect(() => {
    // initialize materialize JS
    M.AutoInit()
  })
  return (
    <Fragment>
      <Searchbar />
    </Fragment>
  )
}

export default App
