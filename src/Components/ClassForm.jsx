import React, { Component } from 'react'
import { useState } from 'react'

export default class ClassForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }

  handleClick = (event) => {
    const {name, value, email, password} = event.target
    this.setState({[name]: value})
    this.setState({[email]: value})
    this.setState({[password]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const details = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    console.log(details)
    this.setState({
      name: "",
      email: "",
      password: ""
    })
  }

  render() {
    return (
      <div className='form'>
        <h1>Student Class Form</h1>
            <form className='' onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleClick} />
                <br></br><br></br>

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleClick} />
                <br></br><br></br>

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleClick} />
                <br></br><br></br>

                <button>Submit</button>
            </form>
      </div>
    )
  }
}
