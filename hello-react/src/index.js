import React, { Component } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'


class LikeButton extends Component {
  static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞'
  }
  constructor () {
    super()
    this.state = { isLiked: false }
  }
  handleClickOnLikeButton () {
    this.props.likedText = '取消'
    this.setState({
      isLiked: !this.state.isLiked
    })
    if (this.props.onClick) {
      this.props.onClick()
    }
  }
  render () {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked
          ? this.props.likedText
          : this.props.unlikedText} 👍
      </button>
    )
  }
}

// class LikeButton extends Component {
//   constructor () {
//     super()
//     this.state = { isLiked: false }
//   }
//   handleClickOnLikeButton () {
//     console.log('props')
//     console.log(this.props)
//     this.setState({
//       isLiked: !this.state.isLiked
//     })
//   }
//   render () {
//     const likedText = this.props.likedText || '取消'
//     const unlikedText = this.props.unlikedText || '点赞'
//     return (
//       <button onClick={this.handleClickOnLikeButton.bind(this)}>
//         {this.state.isLiked ? likedText : unlikedText} 👍
//       </button>
//     )
//   }
// }


// class LikeButton extends Component {
//   constructor () {
//     super()
//     this.state = { isLiked: false, text: "生产",count: 0}
//   }
//   handleClickOnLikeButton () {
//     this.setState({
//       isLiked: !this.state.isLiked,
//       text: this.state.text + 111
//     })
//     this.setState((prevState) => {
//       return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
//     })
//   }
//   render () {
//     return (
//       <div>
//         <button onClick={this.handleClickOnLikeButton.bind(this)}>
//         {this.state.isLiked ? '取消' : '点赞'} 👍
//       </button>
//       <button onClick={this.handleClickOnLikeButton.bind(this)}>{this.state.text} - 总数: {this.state.count}</button>
//         </div>
//     )
//   }
// }

// class Title extends Component {
//   constructor () {
//     super()
//     this.state = {song: 'seasons in the sun'}
//   }

//   handleClickOnTitle (word, e) {
//     console.log(this) // undefined react 直接调用的函数 handleClickOnTitle,而不是通过this调用
//     console.log(e.target.innerHTML)
//     console.log('this.state.song ' + this.state.song)
//     this.setState({ // 只能使用setState更新状态，要不然react不知道你更新了状态
//         song: this.state.song + '0'
//     })
//   }

//   render () {
//     return (
//       <h1 onClick={this.handleClickOnTitle.bind(this,'Hello')}>{this.state.song}</h1>
//     )
//   }
// }
// class Header extends Component {
//   render () {
//     const title = 'react测试页面'
//     return (
//       <div>
//         <h1>{title}</h1>
//       </div>
//     )
//   }
// }
// class Footer extends Component {
//   render () {
//     const footer = '这是测试页面结尾'
//     return (
//       <div>
//       <h3>{footer}</h3>
//       </div>
//     )
//   }
// }
// class Content extends Component {
//   handleClick() {
//     alert('click on me')
//   }
//   render () {
//     // on* 的事件监听只能用在普通的 HTML 的标签上，而不能用在组件标签上
//     const song = <p onClick={this.handleClick}>yesterday once more</p>
//     return (
//       <div>
//         {song}
//         <p>When i was young i listen to the radio ~</p>
//       </div>
//     )
//   }
// }

// class LikeButton extends Component {
//   constructor () {
//     super()
//     this.state = { isLiked: false, count: 0 }
//   }
//   handleClickOnLikeButton () {
//     // console.log(this.state.isLiked)
//     // this.setState({
//     //   isLiked: !this.state.isLiked
//     // })
//     // console.log(this.state.isLiked) // 状态缓存，没更新是正常的
//     // this.setState((prevState) => {
//     //   return { count: 0 }
//     // })
//     this.setState((prevState) => {
//       console.log(this.state.count)
//       return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
//     })
//     // this.setState((prevState) => {
//     //   return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
//     // })
//     console.log(this.state.count)
//   }
  
//   render () {
//     return (
//       <button onClick={this.handleClickOnLikeButton.bind(this)}>
//         {this.state.isLiked ? '取消' : '点赞'} 👍
//       </button>
//     )
//   }
// }

// class LikeButton extends Component {
//   static defaultProps = {
//     likedText: '取消',
//     unlikedText: '点赞'
//   }

//   constructor () {
//     super()
//     this.state = { isLiked: false }
//   }
//   handleClickOnLikeButton () {
//     // this.props.likedText = '取消'
//     this.setState({
//       isLiked: !this.state.isLiked
//     })
//     if (this.props.onClick) {
//       this.props.onClick()
//     }
//   }
//   // render () {
//   //   const likedText = this.props.likedText || '取消'
//   //   const unlikedText = this.props.unlikedText || '点赞'
//   //   return (
//   //     <button onClick={this.handleClickOnLikeButton.bind(this)}>
//   //       {this.state.isLiked ? likedText : unlikedText} 👍
//   //     </button>
//   //   )
//   // }
//   render () {
//     const wordings = this.props.wordings || {
//       likedText: '取消',
//       unlikedText: '点赞'
//     }
//     return (
//       <button onClick={this.handleClickOnLikeButton.bind(this)}>
//         {this.state.isLiked ? wordings.likedText : wordings.unlikedText} 👍
//       </button>
//     )
//     // return (
//     //   <div>
//     //     <LikeButton
//     //       wordings={{likedText: '已赞', unlikedText: '赞'}}
//     //       onClick={() => console.log('Click on like button!')}/>
//     //   </div>
//     // )
//   }
// }

// class Index extends Component {
//   constructor () {
//     super()
//     this.state = {
//       likedText: '已赞',
//       unlikedText: '赞'
//     }
//   }
//   handleClickOnChange () {
//     this.setState({
//       likedText: '取消',
//       unlikedText: '点赞'
//     })
//   }
//   render () {
//     return (
//       <div>
//         <Title />
//         <Header />
//         <Content />
//         <LikeButton
//           likedText={this.state.likedText}
//           unlikedText={this.state.unlikedText} />
//         <div>
//           <button onClick={this.handleClickOnChange.bind(this)}>
//             修改 wordings
//           </button>
//         </div>
//         <Footer />
//       </div>
//     )
//   }
// }

// class Index extends Component {
//   render () {
//     const users = [
//       { username: 'Jerry', age: 21, gender: 'male' },
//       { username: 'Tomy', age: 22, gender: 'male' },
//       { username: 'Lily', age: 19, gender: 'female' },
//       { username: 'Lucy', age: 20, gender: 'female' }
//     ]
//     // const userElements = []
//     // for (let user of users) {
//     //   userElements.push(
//     //   <div>
//     //     <span>username: {user.username}</span> &nbsp;
//     //     <span>age: {user.age}</span>&nbsp;
//     //     <span>gender: {user.gender}</span>
//     //     <hr/>
//     //   </div>
//     //   )
//     // }
//     // return (
//     //   <div>
//     //     <Title />
//     //      <Header />
//     //      <Content />
//     //      <div>{userElements}</div>
//     //     <LikeButton/>
//     //    <Footer />
//     //   </div>
//     // )
//     return (
//       <div>
//         {users.map((user) => {
//           return (
//             <div>
//               <div>姓名：{user.username}</div>
//               <div>年龄：{user.age}</div>
//               <div>性别：{user.gender}</div>
//               <hr />
//             </div>
//           )
//         })}
//       </div>
//     )
//   }
// }

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]
class User extends Component {
  render () {
    const { user } = this.props
    return (
      <div>
        <div>姓名：{user.username}</div>
        <div>年龄：{user.age}</div>
        <div>性别：{user.gender}</div>
        <hr />
      </div>
    )
  }
}
class Index extends Component {
  render () {
    return (
      <div>
        {users.map((user, i) => <User key={i} user={user} />)}
        <LikeButton likedText='已赞' unlikedText='赞'></LikeButton>
      </div>
    )
  }
}

const container = document.getElementById('root')
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Index/>)