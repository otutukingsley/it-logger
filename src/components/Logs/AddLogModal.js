import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addLog } from '../../actions/logActions'
import { getTechs } from '../../actions/techActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddLogModal = ({ addLog, techObj, getTechs }) => {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState('')

  const { loading, techs } = techObj

  useEffect(() => {
    getTechs()
    //eslint-disable-next-line
  }, [])

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech', classes: 'red' })
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      }

      addLog(newLog)
      M.toast({ html: `Log added by ${tech}`, classes: 'blue' })
      //Clear fields
      setMessage('')
      setAttention(false)
      setTech('')
    }
  }

  return (
    <div id="add-log-modal" className="modal modal__style">
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              {loading || techs === null ? (
                <option value="" disabled>
                  loading...
                </option>
              ) : !loading && techs.length === 0 ? (
                <option value="" disabled>
                  No techs found
                </option>
              ) : (
                techs.map((tech) => (
                  <option value={`${tech.firstName} ${tech.lastName}`}>
                    {tech.firstName} {tech.lastName}
                  </option>
                ))
              )}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention((prev) => !prev)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className={`${
            message === '' || tech === '' ? '' : 'modal-close'
          } waves-effect blue waves-blue btn`}
        >
          Enter
        </a>
      </div>
    </div>
  )
}

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
  techObj: PropTypes.object,
}

const mapStateToProps = (state) => ({
  techObj: state.tech,
})

export default connect(mapStateToProps, { addLog, getTechs })(AddLogModal)
