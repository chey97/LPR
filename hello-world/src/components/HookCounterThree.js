import React from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: ''})

  return (
    <form>
        <input 
        type="text" 
        value = {name.firstName} 
        onChange={e => setName({firstName: e.target.value})}
        />
        <input 
        type="text" 
        value = {name.lastName} 
        onChange={e => setName({lastName: e.target.value})}
        />
        <h2>Youe first name is - {name.firstName}</h2>
        <h2>Youe last name is - {name.lastName}</h2>

    </form>
  )
}

export default HookCounterThree
