import React from 'react'
import Two from './Two'

const One = ({data}) => {
  return (
    <>
    <div>One</div>
    <Two  data={data} />
    </>
  )
}

export default One