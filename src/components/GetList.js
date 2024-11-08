import React, { Component } from 'react'
import axios from 'axios'


export class GetList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users: [],
         errorMsg: ""
      }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
        console.log(response)
        this.setState({users : response.data}) 
        })
        .catch(error => {
        console.log(error)
        this.setState({errorMsg: "Error retrieving data"})
        })
        }

    
    
  render() {
    const {users, errorMsg}= this.state
    return (
      <div>
        List of users:
        {users.map((user) => <h2 key={user.id}> {user.id} - {user.name} - {user.email}</h2>)}
        {errorMsg ? <div>{errorMsg}</div>: <div></div>}
      </div>
    )
  }
}

export default GetList
