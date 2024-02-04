import React, { useState } from 'react'

function HookCounter() {

    const [count,setCount] = useState(0)

    function countUp() {
        setCount(count+1)
        console.log('countUp funtion exec')
    }
    
  return (
    <div>
      <button onClick={countUp}>Count {count}</button>
    </div>
  )
}

export default HookCounter;
