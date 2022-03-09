import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { updateLog, clearCurrent } from '../../actions/logActions'
import M from 'materialize-css/dist/js/materialize.min.js'
import PropTypes from 'prop-types'

const EditLogModal = ({ updateLog, current, clearCurrent }) => {
  const [message, setMessage] = useState('')
  const [type, setType] = useState('Needs attention')
  const [tech, setTech] = useState('')

  useEffect(() => {
    if (current && current !== null) {
      setMessage(current.message)
      setType(current.type)
      setTech(current.tech)
    }
  }, [current])

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech', classes: 'red' })
    } else {
      const updatedLog = {
        id: current.id,
        message,
        type,
        tech,
        date: new Date(),
      }
      
      updateLog(updatedLog)

      M.toast({ html: 'Tech and Message Updated!!', classes: 'blue' })

      //Clear current message
      clearCurrent()

      //Clear fields
      setMessage('')
      setType('Needs attention')
      setTech('')
      clearCurrent()
    }
  }

  return (
    <div id="edit-log-modal" className="modal modal__style">
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
              <option value="John Doe">John Doe</option>
              <option value="Johnson Lee">Johnson Lee</option>
              <option value="Revemon Block">Revemon Block</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="radio"
                  name="type"
                  className="filled-in red-text  with-gap"
                  checked={type === 'Needs attention'}
                  value="Needs attention"
                  onChange={(e) => setType(e.target.value)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="radio"
                  name="type"
                  className="filled-in yellow-text  with-gap"
                  checked={type === 'In progress'}
                  value="In progress"
                  onChange={(e) => setType(e.target.value)}
                />
                <span>In progress</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="radio"
                  name="type"
                  className="filled-in green-text with-gap"
                  checked={type === 'Done'}
                  value="Done"
                  onChange={(e) => setType(e.target.value)}
                />
                <span>Done</span>
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

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  current: state.log.current,
})

export default connect(mapStateToProps, { updateLog, clearCurrent })(
  EditLogModal,
)
