import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Moment from "react-moment"
import { deleteLog, setCurrent } from "../../actions/logActions"
import M from "materialize-css/dist/js/materialize.min.js"

const LoggerItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = (e) => {
    deleteLog(log.id)
    M.toast({ html: "Log Deleted", classes: "red" })
  }

  const onUpdate = (e) => {
    setCurrent(log)
  }

  return (
    <li className="collection-item">
      <div className="log__message__container">
        <a
          onClick={onUpdate}
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.type === "Needs attention"
              ? "red-t"
              : log.type === "In progress"
              ? "yellow-t"
              : log.type === "Done"
              ? "blue-t"
              : ""
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> last updated by{" "}
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment format="dddd, MMMM Do YYYY">{log.date}</Moment>
        </span>

        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  )
}

LoggerItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
}

export default connect(null, { deleteLog, setCurrent })(LoggerItem)
