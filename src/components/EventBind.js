import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
      // this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler = () =>{
        this.setState({
            message: 'GoodBye...'
        }, () => console.log(this.state.message))
       

    }
    
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        {/* <button onClick={this.clickHandler.bind(this)}>Logout</button> */}
        {/* <button onClick={() => {this.clickHandler()}}>Logout</button> */}
        <button onClick={this.clickHandler}>Logout</button>


      </div>
    )
  }
}

export default EventBind
