import React, { Component } from 'react'

class App2 extends Component {
    // state
    constructor(){
        super();
        this.state = {
            name: "John Doe",

            email: "john@gmail.com"
        }
    }
  render() {
    const {name,email} = this.state;
    return (
      <div>
        {name}
        {email}
      </div>
    )
  }
}
export default App2;