// Write your code here
import {Component} from 'react'

import Login from '../Login/index'

import Logout from '../Logout/index'

import './index.css'

import Message from '../Message/index'

class Home extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="card-container">
          <Message />
          <Login />
          <Logout />
        </div>
      </div>
    )
  }
}
export default Home
