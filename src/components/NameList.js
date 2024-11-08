// import React from 'react'

// const NameList = () => {
//     const names= ["Nikhil","Amit","Neha","Priya"]
//     const list= names.map((x) => <h2>{x}</h2>)
//     const emps= [
//         {id:10, name:"Nikhil", email:"n@ivp", skill:"CSS"},
//         {id:20, name:"Aditya", email:"a@ivp", skill:"SQL"},
//         {id:30, name:"Sam", email:"s@ivp", skill:"React"}

//     ]

//     // const details= emps.map((x) => <h2>{x.name} works on {x.skill}</h2>)
//     const empList = emps.map(emp => <Emp key={emp.id} emp={emp} />);
//   return (
//     <div>
//         {list}
//         {details}
      
//     </div>
//   )
// }

// export default NameList

import React from 'react';

// Define the Emp component
const Emp = ({ emp }) => {
    return (
        <div>
            <h3>{emp.name}</h3>
            <p>Email: {emp.email}</p>
            <p>Skill: {emp.skill}</p>
        </div>
    );
};

const NameList = () => {
    const names = ["Nikhil", "Amit", "Neha", "Priya"];
    const list = names.map((x, index) => <h2 key={index}>{x}</h2>); // Add key

    const emps = [
        { id: 10, name: "Nikhil", email: "n@ivp", skill: "CSS" },
        { id: 20, name: "Aditya", email: "a@ivp", skill: "SQL" },
        { id: 30, name: "Sam", email: "s@ivp", skill: "React" }
    ];

    
    const empList = emps.map(emp => <Emp key={emp.id} emp={emp} />);

    return (
        <div>
            <h1>Name List:</h1>
            {list}

            <h1>Employee List:</h1>
            {empList}
        </div>
    );
};

export default NameList;
