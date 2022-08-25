let nextUnitOfwork = null;

function perforUnitOfWork(fiber) {  // 执行任务单元
  // reactElement 转换成真实 DOM
  if(!fiber) {
    fiber.dom = createDom(fiber)
  };
  if(fiber.parent) {
    fiber.parent.dom.appendChild(fiber.dom)
  };

  // 为当前的fiber创造子节点的fiber
  // parent child sibing
  const elements = fiber?.props?.children;
  let preSibling = null;
  elements.forEach((childrenElement, index)=>{
    const newFiber = {
      parent: fiber,
      props: childrenElement.props,
      type: childrenElement.type,
      dom: null
    }
    
    if(index === 0) {
      fiber.child = newFiber
    } else {
      preSibling.sibling = newFiber
    }

    preSibling = newFiber
  })
  
  // return  出来下一个任务单元
  if(fiber.child) {
    return fiber.child
  }
  let nexFiber = fiber;
  while(nexFiber){
    if(nexFiber.sibling) {
      return nexFiber.sibling
    }
    nexFiber = nexFiber.parent
  }
}

function workLoop(deadline) {
  let shouldYield = true;
  while(nextUnitOfwork && shouldYield) {
    nextUnitOfwork = perforUnitOfWork(nextUnitOfwork);
    shouldYield = deadline.timeRemaining() > 1; // 得到浏览器当前帧剩余的时间，scheduler为react官方使用的
  }
  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop)

function createDom(element) {
    // 创建 dom 节点，如果为文本节点则创建一个textnode，不是则创建一个元素标签
    const dom =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type)

  // 判断每一个键名是否为 children
  const isProperty = key => key !== "children"
  // 遍历处理啊键名，过滤出不是 children的节点，并将值赋给dom
  Object.keys(element?.props)
    .filter(isProperty)
    .forEach(name => (dom[name] = element.props[name]))

  return dom
}

function render(element, container) {
  nextUnitOfwork = {
    dom: container,
    props: {
      children: [element]
    }
  }
}

export default render
