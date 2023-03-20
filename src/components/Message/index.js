// Write your code here

import './index.css'

const Message = props => {
  const {name} = props
  return <h1 className="message">{name}</h1>
}

Message.defaultProps = {
  name: 'Please Login',
}

export default Message
