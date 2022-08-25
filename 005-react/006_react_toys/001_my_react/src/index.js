// import React from "react";
// import  ReactDOM  from "react-dom";

import React from "./MyReact";


const element = React.createElement(
  'div',
  {
    title:'标题',
    id:'id'
  },
  '展示内容',
  // React.createElement('a', null, '我是a标签')
)

console.log(element,'element');

const container = document.querySelector('#root')

React.render(element, container)