import React, { Component } from 'react'

 class UseEffectHook1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate(){
        document.title = `Clicked ${this.state.count} times`
    }
    clickHandler = () =>{
        this.setState({
            count: this.state.count + 1
        })

    }

    
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.clickHandler}>Clicked Me {this.state.count} times</button>
      </div>
    )
  }
}

export default UseEffectHook1
