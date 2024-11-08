import React, {useState} from 'react'

const UseStakeHook2 = () => {
    const [name, setName] = useState({firstName: "", lastName : ""})

    const changeLastNameHandler = (e) =>{
        setName({...name, lastName: e.target.value})
    }

    const emps = [
        { id: 10, name: "Nikhil", email: "n@ivp", skill: "CSS" },
        { id: 20, name: "Aditya", email: "a@ivp", skill: "SQL" },
        { id: 30, name: "Sam", email: "s@ivp", skill: "React" }
    ];

    


  return (
    <div>
      <form>
        First Name: <input type='text' value={name.firstName}
        onChange={e => setName({firstName: e.target.value})}/>

        Last Name: <input type='text' value={name.lastName}
        onChange={changeLastNameHandler}/>

        <h2>First Name : {name.firstName}</h2>
        <h2>Last Name: {name.lastName}</h2>





      </form>
    </div>
  )
}

export default UseStakeHook2
