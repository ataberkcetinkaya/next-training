import React from 'react'
import './BackButton.css'

export default function BackButton() {
  return (
    <div>
      <button
        className="btn-back"
        onClick={() => window.history.back()}
        aria-label="Go back">
        ← Back
      </button>
    </div>
  )
}
