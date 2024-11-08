import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId : "",
         title : "",
         body: ""
      }
    }

    changeHandler = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
        
    }
    
    submitHandler = (event) => {
        event.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/users", this.state)
        .then(res => {
            console.log(res)
            alert("Data inserted")
        })
        .catch(err => {
            console.log(err)
            alert("Failed check console")

        })
        
    }
    
  render() {
    const {userId,title,body} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <label>User ID:</label>
            <input type='text' value={userId} name="userId" onChange={this.changeHandler}></input>
            <label>Title:</label>
            <input type='text' value={title} name="title" onChange={this.changeHandler}></input>
            <label>Body:</label>
            <input type='text' value={body} name="body" onChange={this.changeHandler}></input>
            <br></br>
            <button type='submit'>Submit</button>


        </form>
      </div>
    )
  }
}

export default PostList
