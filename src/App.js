//rcf react component function
//rcc react class component
//extends = inheriets 


import React, { Component } from 'react'
import Navbar from './Navbar'
import './main.css' 
import Footer from './Footer'

export default class App extends Component {
constructor() {
  super();
  this.state = {
    user: null
  }
  console.log('i am constructing')
}

addToCount = () => {
  this.setState({
    count: this.state.count + 1
  })
  console.log('i am redering')
}

logMeIn = (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  this.setState({user: username})
}

componentDidMount(){
  console.log('i have just mounted')
}

  render() {
    return (
      
      <div>
        <Navbar user={this.state.user}/>
        <h1>
          HI! Welcom to my page, please log in:)
        </h1>

        <form onSubmit={this.logMeIn}>
          <input placeholder='enter your username' name='username' />
          <button>Login</button>
        </form>
        <Footer />
      </div>
    )
  }
}

