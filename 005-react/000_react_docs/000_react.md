定义：是一个将数据渲染成 HTML 的一个 js 框架

特点：

1. 采用组件化模式、声明式编码，提高开发效率及组件复用率；

2. 在 React Native 中可以使用 React 语法进行移动端开发；

3. 使用 虚拟 DOM + 优秀的 Diff 算法，尽量减少与真实 DOM 的交互；

xml：早期用于存储和传输数据，后面用 json 存储

js 语句与 js 表达式：

> 一个表达式会产生一个值，可以放在任意地方

```js
a;
1 > 0 ? 2 : 9;
arr.map();
function test(){} // 有返回值
```

> 一个语句

```javascript
if(){}
for(){}
switch(){case:xxx break}
```

构造器函数

```
通常，在 React 中，构造函数仅用于以下两种情况：

通过给 this.state 赋值对象来初始化内部 state。
为事件处理函数绑定实例

构造器是否接收props，是否传递给super，取决于是否希望在构造器中使用this.props
```

受控组件和非受控组件

```javascript
维护状态的及时受控组件
请勿过度使用 refs
```