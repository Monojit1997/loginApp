// Write your code here
import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {isloggedin: true}

  onLoggedin = () => {
    this.setState(prevState => ({isloggedin: !prevState.isloggedin}))
  }

  render() {
    const {isloggedin} = this.state
    return (
      <div>
        {isloggedin ? (
          <button type="button" onClick={this.onLoggedin} className="button">
            Login
          </button>
        ) : null}
      </div>
    )
  }
}
export default Login
