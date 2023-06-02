import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0}

  timer = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  onStartTimer = () => {
    this.timerID = setInterval(this.timer, 1000)
  }

  onStopTimer = () => {
    clearInterval(this.timerID)
  }

  onResetTimer = () => {
    clearInterval(this.timerID)
    this.setState({seconds: 0})
  }

  render() {
    const {minutes, seconds} = this.state
    console.log(seconds)

    return (
      <div className="timer-container">
        <div className="card-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="card">
            <div className="logo-and-timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="logo"
                alt="stopwatch"
              />
              <p className="timer">Timer</p>
            </div>

            <h1 className="clock">
              0{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h1>
            <div className="button-container">
              <button
                type="button"
                className="button"
                style={{backgroundColor: '#1db05f'}}
                onClick={this.onStartTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="button"
                style={{backgroundColor: '#ef0d36'}}
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="button"
                style={{backgroundColor: '#eaa800'}}
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
