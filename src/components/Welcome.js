import React, { Component } from 'react'

 class Welcome extends Component {
  render() {
    const{name,job,title}= this.props
    return (
      <div>
        <h2>Welcome {name}-  {job} - {title}</h2>
      </div>
    )
  }
}

export default Welcome
