import React, { useEffect, Fragment } from 'react'
import Searchbar from './components/layouts/Searchbar'
import Logger from './components/Logs/Logger'
import AddBtn from './components/layouts/AddBtn'
import AddLogModal from './components/Logs/AddLogModal'
import EditLogModal from './components/Logs/EditLogModal'
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
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <Logger />
      </div>
    </Fragment>
  )
}

export default App
