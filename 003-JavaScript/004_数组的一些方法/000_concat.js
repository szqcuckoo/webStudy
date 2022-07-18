// 一、 创建数组的几种方法
// 1. 字面量法
let textArr = [1, 2, 3, 4]
// 2. 构造函数法
let funArr = new Array(1, 2, 3, 4)
console.log(textArr, funArr)

// 二、静态方法
// Array.from();
console.log(Array.isArray(textArr))
console.log(Array(3))
console.log(Array.of(3))

// 三、数组方法
// 1. Array.prototype.concat()    // TODO:实质是进行了一次浅拷贝合并
const arr1 = [1, 2]
const arr2 = [3, 4]
console.log(arr1.concat(arr2))
Array.prototype._concat = function () {
  let args = Array.from(arguments)
  const arr = JSON.parse(JSON.stringify(this))
  args.map(item => {
    if (Array.isArray(item)) {
      item.map(val => arr.push(val))
    } else {
      arr.push(item)
    }
  })
  return arr
}
console.log(arr1._concat(arr2))


