import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         uname: "",
         comment: "",
         topic: "react"
      }
    }

    changeUsernameHandler = (event) =>{
        this.setState({
            uname: event.target.value
        })
    }

    commentHandler = (event) =>{
        this.setState({
            comment: event.target.value
        })
    }

    changeTopicHandler = (event) =>{
        this.setState({
            topic: event.target.value
        })
    }
    submitHandler = (event) => {
        alert(`${this.state.uname} - ${this.state.comment} - ${this.state.topic}`)
        event.preventDefault()
    }
    
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <label>Username : </label>
        <input type="text" value={this.state.uname} onChange={this.changeUsernameHandler}></input>
        <br></br>
        <label>Comment : </label>
        <textarea type="text" value={this.state.comment} onChange={this.commentHandler}></textarea>
        <br></br>
        <label>Topic : </label>
        <select value={this.state.topic} onChange={this.changeTopicHandler}>
            <option value={"react"}>React</option>
            <option value={"angular"}>Angular</option>
            <option value={"vue"}>Vue</option>

        </select>
        <br></br>
        <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
