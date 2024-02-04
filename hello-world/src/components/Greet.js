import React from "react";

// function Greet(){
//     return <h1>Hello Chethiya</h1>
// }

const Greet = (props) => {
console.log('data', props.x)
return(
    <div>
        <h1>
            Hello {props.name}! The {props.heroName} 
        </h1>
        {props.children}
    </div>
) 
}

export default Greet;