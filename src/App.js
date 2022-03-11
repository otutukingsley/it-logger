import React, { useEffect, Fragment } from "react"
import Searchbar from "./components/layouts/Searchbar"
import AddBtn from "./components/layouts/AddBtn"
import AddLogModal from "./components/logs/AddLogModal"
import EditLogModal from "./components/logs/EditLogModal"
import AddTechModal from "./components/techs/AddTechModal"
import TechListModal from "./components/techs/TechsListModal"
import Log from "./components/logs/Log"

import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css/dist/js/materialize.min.js"
import "./App.css"

const App = () => {
  useEffect(() => {
    // initialize materialize JS
    M.AutoInit()
  })
  return (
    <Fragment>
      <Searchbar />
      <div className="container">
        <Log />
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
      </div>
    </Fragment>
  )
}

export default App
