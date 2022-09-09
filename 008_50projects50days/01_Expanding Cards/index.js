const element = document.querySelectorAll(".panel")

const elements = Array.from(element)

const demo = document.querySelector('.demo')

demo.addEventListener("click", e => {
  const id = Number(e.target.id)
  const panel = e.target
  console.log(id)
  element.forEach(e => e.classList.remove("active"))
  panel.classList.add("active")
  // switch (id) {
  //   case 0:
  //     return
  //     default:
  //       element.forEach(e=>e.classList.remove('active'))
  //       panel.classList.add('active')
  //     break;
  // }

})

demo.addEventListener('click', () => {

})

