import React, { Component } from 'react'
import PropTypes from 'prop-types'
// 评论输入框
class CommentInput extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
      }
    constructor () {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }
    handleUsernameChange(event) {
        this.setState({
            username: event.target.value,
        })
    }
    handleContentChange(event) {
        this.setState({
            content: event.target.value,
        })
    }
    componentWillMount () {
        this._loadUsername()
    }
    _loadUsername () {
        const username = localStorage.getItem('username')
        if (username) {
          this.setState({ username })
        }
    }
    _saveUsername (username) {
        localStorage.setItem('username', username)
      }
    handleUsernameBlur (event) {
        this._saveUsername(event.target.value)
    }
    handleSubmit() {
        console.log('handleSubmit this.props')
        console.log(this.props)
        console.log('this.state')
        console.log(this.state)
        if (this.props.onSubmit) {
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
              })
        }
        this.setState({ content: '' })
    }
    componentDidMount () {
        this.textarea.focus()
    }
    render () {
    return (
        <div className='comment-input'>
        <div className='comment-field'>
            <span className='comment-field-name'>用户名：</span>
            <div className='comment-field-input'>
            <input value={this.state.username} 
            onBlur={this.handleUsernameBlur.bind(this)}
            onChange={this.handleUsernameChange.bind(this)}/>
            </div>
        </div>
        <div className='comment-field'>
            <span className='comment-field-name'>评论内容：</span>
            <div className='comment-field-input'>
                {/* input,select,textarea值被 React.js 所控制、渲染的组件，
                在 React.js 当中被称为受控组件（Controlled Component）。
                对于用户可输入的控件，一般都可以让它们成为受控组件，
                这是 React.js 所推崇的做法。另外还有非受控组件，这里暂时不提及 */}
            <textarea 
            ref={(textarea) => this.textarea = textarea}
            value={this.state.content} 
            onChange={this.handleContentChange.bind(this)}/>
            </div>
        </div>
        <div className='comment-field-button'>
            <button className='btn' onClick={this.handleSubmit.bind(this)}>
            发布
            </button>
        </div>
        </div>
    )
    }
}
export default CommentInput