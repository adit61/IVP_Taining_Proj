import React, { Component } from 'react'

 class UserGreetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {
  return(
    //this.state.isLoggedIn ? <div>Welcome Nikhil</div>:<div>Welcome Guest</div>
    this.state.isLoggedIn && <div>Welcome Nikhil</div>


  )
  }
}

export default UserGreetings
