import React from 'react';
import ReactDOM from 'react-dom/client';
// jsx

const root = ReactDOM.createRoot(document.getElementById('root'));



const myName = 'cool boy'
const element = <div>hello,{myName}</div>

// 多行 jsx 语法，加上括号，用来避免自动插入分号的情况
// 因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。
// eact DOM 在渲染所有输入内容之前，默认会进行转义。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击。

const user = (name, url)=>{
  return {
    name,
    url
  }
}


root.render(
  <div>
    <h2>Hello {element}</h2>
    <div>
      {user('zs', 'www.baidu.com').name}
    </div>
  </div>
);
