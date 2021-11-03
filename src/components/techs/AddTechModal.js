import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import { addTech } from '../../actions/techActions'
import PropTypes from 'prop-types'

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter a first and last name', classes: 'red' })
    } else {
      console.log(lastName, firstName)

      const newTech = {
        firstName,
        lastName,
      }

      addTech(newTech);

      M.toast({ html: 'Technician Added', classes: 'blue' })
      //Clear fields
      setFirstName('')
      setLastName('')
    }
  }

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>Add New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className={`${
            firstName === '' || lastName === '' ? '' : 'modal-close'
          } waves-effect blue waves-blue btn`}
        >
          Enter
        </a>
      </div>
    </div>
  )
}

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
}

export default connect(null, { addTech })(AddTechModal)
