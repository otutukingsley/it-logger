import React, { useEffect } from "react"
import { connect } from "react-redux"
import LoggerItem from "./LoggerItem"
import { PreLoader } from "../layouts/PreLoader"
import PropTypes from "prop-types"
import { getLogs } from "../../actions/logActions"

const LoggerHome = ({ logObj, getLogs }) => {
  const { logs, loading } = logObj

  useEffect(() => {
    getLogs()
    //eslint-disable-next-line
  }, [])

  if (loading || logs === null) {
    return <PreLoader />
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map((eachLog) => <LoggerItem key={eachLog.id} log={eachLog} />)
      )}
    </ul>
  )
}

LoggerHome.propTypes = {
  logObj: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  logObj: state.log,
})

export default connect(mapStateToProps, { getLogs })(LoggerHome)
