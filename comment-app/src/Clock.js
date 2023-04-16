import { Component } from "react"

class Clock extends Component {
    constructor () {
      super()
      this.state = {
        date: new Date(),
        showCk: true,
      }
    }
    handleCk () {
        this.setState({
            date: new Date(),
            showCk: !this.state.showCk,
        })
    }
    componentWillMount () {
        this.timer = setInterval(() => {
          this.setState({ date: new Date() })
        }, 100)
    }
    componentWillUnmount () {
        //  组件销毁时候清理定时器
        clearInterval(this.timer)
      }
    render () {
      return (
        <div>
          <h1>
            <button onClick={this.handleCk}>显示时钟</button>
            {this.state.showCk ? 
            <p>现在的时间是{this.state.date.toLocaleTimeString()}</p>
             : null}
          </h1>
        </div>
      )
    }
  }

export default Clock