import { Component } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
  
// !组件名称必须以大写字母开头。

// !当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为 “props”。

const Welcome = (props) => {
  return (
    <div>
      {props.name}
    </div>
  )
}

class Welcome2 extends Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}

// !组件无论是使用函数声明还是通过 class 声明，都绝不能修改自身的 props。

// ! “纯函数”，因为该函数不会尝试更改入参，且多次调用下相同的入参始终返回相同的结果。


const element = (
  <div>
    <Welcome name={"lllllll"} />
    <Welcome2 name={"欢迎2"} />
  </div>
)

root.render(element)