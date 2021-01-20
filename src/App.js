import React from 'react';

const App = () => {
  const pdofiles = [
    {name:"Taro", age: 10},
    {name:"Hanako", age: 5},
    {name:"NoName"}
  ]
  return (
    <div>
      {
      pdofiles.map((plofile, index) => {
        return  <User name={plofile.name} age={plofile.age} key={index}/>
      })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.defaultProps = {
  age:1
}
export default App;
