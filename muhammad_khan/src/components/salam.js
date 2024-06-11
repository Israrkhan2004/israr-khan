import React from 'react'
import namaste from './namaste'

function salam() {
  return (
    <div>
        <namaste/>
        <h1>Greetings</h1>
        <namaste text="Shuja"/>
        <namaste text="Sheri"/>
    </div>
  )
}

export default salam