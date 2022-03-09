import React, { useEffect, Fragment } from "react"
import Searchbar from "./components/layouts/Searchbar"
import Logger from "./components/logs/Logger"
import AddBtn from "./components/layouts/AddBtn"
import AddLogModal from "./components/logs/AddLogModal"
import EditLogModal from "./components/logs/EditLogModal"
import AddTechModal from "./components/techs/AddTechModal"
import TechListModal from "./components/techs/TechsListModal"
import { Provider } from "react-redux"
import store from "./store"

import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css/dist/js/materialize.min.js"
import "./App.css"

const App = () => {
  useEffect(() => {
    // initialize materialize JS
    M.AutoInit()
  })
  return (
    <Provider store={store}>
      <Fragment>
        <Searchbar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logger />
        </div>
      </Fragment>
    </Provider>
  )
}

export default App
