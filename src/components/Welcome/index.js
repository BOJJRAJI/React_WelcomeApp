// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {buttonState: true}

  changeState = () => {
    this.setState(prevState => ({buttonState: !prevState}))
  }

  render() {
    const {buttonState} = this.state
    const text = buttonState ? 'Subscribe' : 'Subscribed'
    console.log({buttonState})
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button className="button" type="button" onClick={this.changeState}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
