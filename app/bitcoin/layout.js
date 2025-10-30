"use client";
import React from 'react'
import BackButton from '../components/Buttons/BackButton'

export default function layout({ children }) {
  return (
    <div>
        <h1>{children}</h1>
        <div>Ataberk's Layout</div>
        <BackButton />
    </div>
  )
}
