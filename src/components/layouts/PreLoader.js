import React from 'react'

export const PreLoader = () => {
  return (
    <div className="progress blue lighten-4">
      <div className="indeterminate blue"></div>
    </div>
  )
}

export const CircleLoader = () => {
  return (
    <div className="preloader-wrapper big active">
      <div className="spinner-layer spinner-blue-only">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div>
        <div className="gap-patch">
          <div className="circle"></div>
        </div>
        <div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  )
}
