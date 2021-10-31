import React, { useState, useEffect } from 'react'
import TechItem from './TechItem'
import { CircleLoader } from '../layouts/PreLoader'

const TechListModal = () => {
  const [techs, setTechs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getTechs = async () => {
      setLoading(true)
      const res = await fetch('/techs')
      const data = await res.json()
      setTechs(data)
      setLoading(false)
    }
    getTechs()
  }, [])

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {loading ? (
            <CircleLoader />
          ) : (
            techs.map((tech) => <TechItem key={tech.id} tech={tech} />)
          )}
        </ul>
      </div>
    </div>
  )
}

export default TechListModal;
