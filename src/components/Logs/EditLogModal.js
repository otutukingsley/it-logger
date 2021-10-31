import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const EditLogModal = () => {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState('')

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech', classes: 'red'})
    } else {
      console.log(message, attention, tech)
      M.toast({ html: 'Tech and Message Added!!', classes: 'blue'})

      //Clear fields
      setMessage("")
      setAttention(false)
      setTech("")
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

export default EditLogModal;
