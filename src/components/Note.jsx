import React from "react"

function Note() {
  return (
    <div className="note">
      <input className="title" placeholder="Awesome Title"/>
      <input className="paragraph" placeholder="Awesome Idea"/>
    </div>
  )
}

export default Note;