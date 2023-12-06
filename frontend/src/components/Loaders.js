import React from 'react'
import {Spinner} from 'react-bootstrap'

function loader() {
  return (
    <Spinner
    animation='border'
    role='status'
    style={{
        height: '100px',
        width: '100px',
        display: 'block',
        margin: 'auto'
    }}
    >
        <span className='sr-only'> loading </span>
    </Spinner>
  )
}

export default loader