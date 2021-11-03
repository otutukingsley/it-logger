import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTechs } from '../../actions/techActions'
import TechItem from './TechItem'
import { CircleLoader } from '../layouts/PreLoader'
import PropTypes from 'prop-types'

const TechListModal = ({ techsObj, getTechs }) => {
  const { loading, techs } = techsObj

  useEffect(() => {
    getTechs()
    //eslint-disable-next-line
  }, [])

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {loading || techs === null ? (
            <CircleLoader />
          ) : !loading && techs.length === 0 ? (
            <p className="center">No techs to show</p>
          ) : (
            techs.map((eachTech) => (
              <TechItem key={eachTech.id} tech={eachTech} />
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

TechListModal.propTypes = {
  techsObj: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  techsObj: state.tech,
})

export default connect(mapStateToProps, { getTechs })(TechListModal)
