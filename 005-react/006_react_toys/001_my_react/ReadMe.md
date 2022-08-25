# 手写一个demo实现react的渲染

数据 -----> 视图

## 实现一个React.createElement方法

```javascript
React.createElement(
  'div',
  {
    title:'标题',
  },
  '展示内容',
)

```

node-> document.createElementj(element.type)

node\['title'\] = element.props.title

text= document.createTextNode(')

text\['nodeValue'\] = element.props.children

node.appendChild(text)

container.appendChild(node)

## ConcurrentModeAndFiber