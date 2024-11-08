import React, { Component } from 'react'

class Message extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Welcome visitor ...",
         count: 0
      }
    }

    changeMessage(){
        this.setState({
            message: "Thanks for subscribing"
        })
    }
    
    Increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }), () => console.log(this.state.count));
    }

    incrementFive(){
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()

    }
  render() {
    return (
      <div>
        {/* <h2>{this.state.message}</h2> */}
        <button onClick={()=> {this.changeMessage()}}>Subscribe</button>
        <button onClick={()=> {this.Increment()}}>Increment- {this.state.count}</button>
        <button onClick={()=> {this.incrementFive()}}>Increment 5- {this.state.count}</button>


      </div>
    )
  }
}

export default Message
