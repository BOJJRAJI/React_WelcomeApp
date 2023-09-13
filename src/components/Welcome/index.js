import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  onChangeState = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  render() {
    const {isSubscribe} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        {isSubscribe ? (
          <button className="button" onClick={this.onChangeState} type="button">
            Subscribed
          </button>
        ) : (
          <button onClick={this.onChangeState} className="button" type="button">
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
