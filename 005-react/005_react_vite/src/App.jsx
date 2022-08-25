import { Form, Input } from "antd"
const { Item } = Form
import HOC from "./Hoc/Input"
const InputHOC = HOC(Input)

function App() {
  console.log(InputHOC);
  return (
    <div className="App">
      <h1>vite搭建的项目</h1>
      <p>真的快</p>
      <Form>
        <Item>
          {/* <Input></Input> */}
          <InputHOC></InputHOC>
        </Item>
      </Form>
    </div>
  )
}

export default App
