import React, { useEffect, useState } from 'react'

function App() {
  const [count , setCount] = useState(0);
  
  useEffect(()=>{
   console.log("Hi Neha")
  },[count])

  return (
      <>
      <button onClick={(()=> setCount(count + 1))}>
        Click {count}
      </button>
      <button onClick={(()=> setCount((count)=> Math.max(count-1 , 0)))}>
        Click {count}
      </button>
      </>

  )
}

export default App
