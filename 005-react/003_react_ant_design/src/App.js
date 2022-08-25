import "./App.css"
import {Button, Form} from "antd"
import React, { Component } from "react"
import Child from "./components/Child";
import ValidateTextArea from "./components/ValidateTextArea";

class App extends Component {

  onChangeValue = (val) => {
    // console.log(val)
  }

  render() {
    return (
      <div className="App">
        <Form>
          <Child ref={(ref)=>this.ChildRef = ref}  onChangeValue={this.onChangeValue} />
          <Button onClick={()=>{
            this.ChildRef.onClearTextValue()
            // this.ChildRef.setState({textValue: ''})    // 居然也可以
            // console.log(this.ChildRef)
          }}>清除</Button>
          <br/>
          <Button onClick={()=>{
            // console.log(this.ChildRef)
            this.ChildRef.onGetRef()
            // console.log()
          }}>获取</Button>
          <br/>
          {/*<Button onClick={()=>{*/}
          {/*  this.ChildRef.onClearTextValue()*/}
          {/*}}>清楚2</Button>*/}
        </Form>
        {/*<Form>*/}
        {/*  <ValidateTextArea required={false}></ValidateTextArea>*/}
        {/*</Form>*/}
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Button type='primary'>Button</Button>
//     </div>
//   );
// }

export default App
