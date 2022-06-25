import React from 'react'
import spinner from './assets/96.gif'

export default function Spinner() {
  return (
    <div className='spinner'>
      <br />
      <img src={spinner} alt='Loading...' />
      <br />
      <h1 style={{ color: 'green' }}> Loading... </h1>
      <br />
    </div>
  )
}
