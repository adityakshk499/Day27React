import React from 'react'
import { useContext } from 'react'
import { data } from '../App'

const Five = () => {
    const Data = useContext(data)
 
  return (
    <>{Data}</>
  )
}

export default Five