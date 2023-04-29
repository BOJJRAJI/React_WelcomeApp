import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  subscribe = () => {
    this.setState(prevState => ({
      isSubscribe: !prevState.isSubscribe,
    }))
  }

  render() {
    const {isSubscribe} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you!Happy Learning</p>
        <button type="button" className="button" onClick={this.subscribe}>
          {isSubscribe ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    )
  }
}

export default Welcome

