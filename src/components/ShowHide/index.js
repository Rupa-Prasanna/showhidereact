import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  firstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  lastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  getFirstNameStatus = () => {
    const {firstName} = this.state
    return firstName
  }

  getLastNameStatus = () => {
    const {lastName} = this.state
    return lastName
  }

  render() {
    const firstName = this.getFirstNameStatus()
    const lastName = this.getLastNameStatus()
    return (
      <div className="container">
        <h1 className="heading"> Show/Hide</h1>
        <div className="name-container">
          <div className="first-name-container">
            <button type="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {firstName ? (
              <div className="first-name">
                <p> Joe </p>
              </div>
            ) : null}
          </div>
          <div className="last-name-container">
            <button type="button" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {lastName ? (
              <div className="first-name">
                <p> Jonas </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
