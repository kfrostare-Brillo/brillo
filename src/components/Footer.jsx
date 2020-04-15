import React from 'react'

function Footer() {
  const name = "Kfrostare"
  return (
    <div className="footer">
      <p id="copyright">Created by {name}, Copyright © {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer