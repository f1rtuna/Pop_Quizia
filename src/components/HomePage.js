import React from 'react'

export default function HomePage({start_game}) {
  return (
    <div className = "homepage">
        <div className = "homepage-title">
            Welcome to Popquizia!
        </div>
        <button onClick = {start_game}>Start Game!</button>
    </div>
  )
}
