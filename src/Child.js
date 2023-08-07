import React from 'react'

const Child = ({data1 , statefunc}) => {
    // console.log(props)
  return ( 
    <button  onClick = {() => {statefunc(data1 + 1 )}}>Click Me</button>
  )
}

export default Child