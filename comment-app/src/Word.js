import React ,{Component} from "react";

class Word extends Component {
    constructor () {
        super()
        this.state = {
            name: '维哥',
            city: 'shenzhen',
            showBro: true,
        }
    }    
    static defaultProps = {
        name: '维哥',
        city: 'shenzhen'
    }
    sentence = "维哥"
    long = '180cm'
    handleClick (word, e) {
        console.log(this)
        console.log(e)
        console.log(word)
    }
    printHtml (e) {
        console.log(this)
        console.log(e.target.innerHTML)
        alert(e.target.innerHTML)
    }
    handleCk () {
        this.setState({
            name: '胡胡',
            city: '武汉'
        })
    }
    handleShow (e) {
        this.setState({
            name: '维哥',
            city: 'shenzhen',
            showBro: !this.state.showBro,
        })
    }
    componentWillMount () {
        console.log('component will mount')
      }
    componentDidMount () {
    console.log('component did mount')
    }
    componentWillUnmount () {
    console.log('component will unmount')
    }
    render () {
        return <div>
            <h1 className="weige">{this.sentence}的身高: {this.long}</h1>
            <button onClick={this.handleClick.bind(this, '维哥你好')}>Click me</button>
            <button onClick={this.printHtml.bind(this)}>Click</button>
        <button onClick={this.handleCk.bind(this)}>click - {this.state.name}</button>
        <button onClick={this.handleShow.bind(this)}>查看维哥</button>
        {this.state.showBro ? <p>维哥今天好帅啊</p>: null}
        </div>
    }
}

export default Word