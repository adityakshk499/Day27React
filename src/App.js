
// import Parent from './Parent';
// import { UseRef } from './UseRef';

// import One from "./component/One";
import { createContext } from "react";
import UseReducer from './component/UseReducer';


export const  data = createContext()



function App() {


  // const data = 'aditya'
  // console.log(data)
  return (
    <>
{/* <UseRef/> */}
{/* <Parent/> */}
    {/* <data.Provider value={ 'aditya'}>
    <One data={data} />
    </data.Provider> */}

    <UseReducer/>

  </>
  );
}




export default App;
