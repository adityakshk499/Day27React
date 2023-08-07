import React from 'react'
import {useRef , useState , useEffect} from 'react'





export const UseRef = () => {
    const [name , setname] = useState("")
    const [state, setState] = useState(0)
    const refvariable =  useRef(0)




    const h1 = useRef()
    useEffect(()=> {
        // setState(state + 1 )
        refvariable.current += 1 
        h1.current.style.color = "green"
    })

  return (<>
    <div>UseRef</div>
   <input type='text' value={name}  onChange={(e) => setname(e.target.value)} />
    {/* <h1>{state}</h1> */}
    <h1 ref={h1}>{refvariable.current}</h1>
    </>
  )
}
 