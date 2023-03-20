// Write your code here
import {Component} from 'react'

import './index.css'

class Logout extends Component {
  state = {isloggedout: false}

  onLoggedin = () => {
    this.setState(prevState => ({isloggedout: !prevState.isloggedout}))
  }

  render() {
    const {isloggedout} = this.state
    return (
      <div>
        {isloggedout ? (
          <button type="button" onClick={this.onLoggedin} className="button">
            Logout
          </button>
        ) : null}
      </div>
    )
  }
}
export default Logout
