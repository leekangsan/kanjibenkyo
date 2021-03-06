import React from "react"

import Modal from "./modal"

const Loader = ({isLoaded, children}) => {
  const loadingScreen = (
    <div className="loading-screen">
      <div className="spinner"><i className="fas fa-cog"></i></div>
    </div>
  )

  return isLoaded ? children : loadingScreen
}

export default Loader
