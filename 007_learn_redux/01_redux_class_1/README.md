# Redux

> Redux 是一個通用的狀態管理庫

不要把思想局限于 React 单独的框架上面，抛开 React ，也可以在单独的一个项目中使用。

Redux 继承 flux

## Redux 核心概念

使用普通对象描述应用的 state 时。

```js
{
  todos: [
  {
    text: 'Eat food',
    completed: true
  },
  {
    text: 'Exercise',
    completed: false
  }
  ],
  visibilityFilter: 'SHOW_COMPLETED'
}
```

这个对象没有 setter（修改器方法），因此，其他代码不能随意修改它，造成难以复现的 bug。

如果想要更新 state 中的数据，需要发起一个 action。action 也是一个普通的 JavaScript 对象用来描述 **发生了什么**。

```js
{ type: 'ADD_TODO', text: 'Go to swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```

统一使用 action 来描述所有的变化的好处是可以清晰的知道应用中到底发生了什么，如果一些东西改变了，就可以知道为什么变。

为了把 action 和 store 串联起来，开发了一些函数：reducer。

reducer 函数就是一个接收 state 和 action ，并返回新的 state 的函数。

```js
function visibilityFilter(state = "SHOW_ALL", action) {
  if (action.type === "SET_VISIBILITY_FILTER") {
    return action.filter
  } else {
    return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([{ text: action.text, completed: false }])
    case "TOGGLE_TODO":
      return state.map((todo, index) =>
        action.index === index
          ? { text: todo.text, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}
```

再开发一个 reducer 调用这两个 reducer，进而管理整个应用的 state。

```js
function todoApp(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  }
}
```

## Redux 三大原则

### 单一数据源

整个应用的 state 被存储在一棵 object tree 中，并且这个 object tree 只存在唯一一个 store 中。

```js
console.log(store.getState())

/* 输出
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
*／

```

### state 是只读的

唯一改变 state 的方法是触发 action ，action 是一个用于描述已发生事件的普通对象。

这样确保了**视图**和**网络请求**都不能直接修改 state，相反，他们都只是表达了想要修改的意图，和想要修改成什么样子。

所有的修改都被集中化处理，并且严格按照一个接一个的顺序执行，因此不用担心 race condition 的出现。action 知识普通的对象，因此他们可以被日志打印、序列化、储存、后期调试或者测试时回放出来。

```js
store.dispatch({
  type: 'COMPLETE_TODO',
  index: 1
})

store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
})

```

### 使用纯函数来执行修改

**为了描述 action 如何改变 state tree，需要编写 reducer。**

reducer只是一些纯函数，它接收先前的 state 和 action ，并返回新的 state。

```js
function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
}

import { combineReducers, createStore } from 'redux'
let reducer = combineReducers({ visibilityFilter, todos })
let store = createStore(reducer)
```

## API 

+ createStore(reducer, [preloadedState], [enhancer])

+ combineReducer(reducers)

+ applyMiddleware(...middlewares)

+ bindActionCreators(actionCreators, dispatch)

+ compose(...functions)

Store Api

+ Store
  + getState()
  + dispatch(action)
  + subscribe(listener)
  + getReducer()
  + replaceReducer(nextReducer)