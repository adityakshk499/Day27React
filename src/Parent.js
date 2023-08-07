import React from 'react'
import {useState} from 'react'
import Child from './Child'

const Parent = () => {
    const [data , setData] = useState(0)

  return (
    <>
    <div>Hi i am Parent</div>
    <p>{data}</p>
    <Child data1 = {data} statefunc={setData} />

    </>
  )
}

export default Parent