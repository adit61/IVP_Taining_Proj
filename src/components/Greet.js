import React from 'react'

function Greet({name,job,title}) {
    // console.log(props)
    //let {name,job,title}= props
    return (
      <div>
        <h2>Welcome to {name} - {job} -{title}</h2>
      </div>
    );
  }

  export const ConnectMe= () =>{
    return (
      <div>
        <h2>aditya@kelkar</h2>
      </div>
    );
  }

  export default Greet;


