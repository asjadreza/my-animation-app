import React from 'react'

// const Greeting = (props:any) => {
    
//   return (
//     <div>Hello, {props.name}! You are a {props.role}</div>
//   )
// }


// destructuring of props
// const Greeting = ({name, role}) => {
    
//   return (
//     <div>Hello, I am {name}! and I am a {role}</div>
//   )
// }

// data passed as an object

type User = {
  name: string;
  role: string;
};


type GreetingProps = {
    user: User;
}
const Greeting = ({user}: GreetingProps) => {

    return(
        <div>
            <h1>Hello, {user.name} here! I am a {user.role}</h1>
        </div>
    )
}

export default Greeting