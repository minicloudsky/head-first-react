import { Component } from "react";

class Card extends Component {
    constructor () {
        super()
        this.state = {
            content: '<p>这里是html</p>'
        }
    }
    handleCk() {
        console.log(this.state)
        console.log(this.props)
    }
    render () {
      return (
        <div className='card'>
          <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
          <div className='card-content'>
            {this.props.content}
            <button style={{fontSize: '10px',color:'orange'}} onClick={this.handleCk.bind(this)}>查看state</button>
          </div>
          
        </div>
      )
    }
  }
  
  export default Card;