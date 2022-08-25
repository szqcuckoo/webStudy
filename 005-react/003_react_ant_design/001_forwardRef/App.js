import "./App.css"
import { Button, Col, Form, Input, Row } from "antd"
import React, { Component } from "react"
import TextArea from "antd/lib/input/TextArea"
import {Child} from "./components/Child";
// import Item from "antd/lib/list/Item"
const {Item} = Form

class App extends Component {
  constructor(props) {
    super(props)
    this.FormRef = React.createRef()
    this.childRef = React.createRef()
  }

  onValuesChanges = (changesValue, allValue) => {
    // console.log(changesValue, allValue)
  }

  formFinish = () => {
    // console.log(this.FormRef.current.getFieldValue());
    // console.log(this.FormRef.current.getFieldsValue());
  }

  validateStr = (v) => {
    let length = 0
    let arr = v.split('')
    arr.forEach(item => {
      if (item.charCodeAt() > 255) {
        length += 2
      } else {
        length += 1
      }
    })
    return length
  }

  validateLength = (v, max, required) => {
    if (v === undefined || (v && v.length < Math.floor(max/2))) {
      if (required && v === undefined) {
        return {
          status: true,
          msg: '必填项'
        }
      } else {
        return {
          status: false,
          msg: ''
        }
      }
    } else if (this.validateStr(v) >= max) {
      return  {
        status: true,
        msg: '长度必须在' + Math.floor(max/2) + '个汉字或者字母以内'
      }
    } else {
      return {
        status: false,
        msg: ''
      }
    }
  }

  rules = [{
    maxLength: 10,
    required:true,
    // message:'这是一个必填项',
    validator: (_, value) => {
      // console.log(_.maxLength, value, 'Form')
      // console.log(value.length)
      const {status, msg} = this.validateLength(value, _.maxLength, _.required)
      if (status) {
        return Promise.reject(msg)
      } else {
        return Promise.resolve()
      }
    }
  }]

  componentDidMount() {
    console.log(this.childRef.current)
  }

  render() {
    return (
      <div className="App">
        <Form>
          <Child ref={this.childRef} />
        </Form>

        {/*<Form ref={this.FormRef} onValuesChange={this.onValuesChanges} onFinish={this.formFinish}>*/}
        {/*  <Row>*/}
        {/*    <Col>*/}
        {/*      <Item label={'输入框测试'} name='input '>*/}
        {/*        <Input />*/}
        {/*      </Item>*/}
        {/*      <Item label={'文本域测试'} name='textarea'>*/}
        {/*        <TextArea></TextArea>*/}
        {/*      </Item>*/}
        {/*      <Item label={'disabled属性测试'} name='disable'>*/}
        {/*        <Input disabled={true}/>*/}
        {/*      </Item>*/}
        {/*      <Item label={'占位符属性测试'} name={'getLength'}>*/}
        {/*        <Input placeholder={'占位符'} />*/}
        {/*      </Item>*/}
        {/*      <Item label={'validate测试'} name={'validateMaxLength'} rules={this.rules} validateTrigger={['onChange', 'onBlur']}>*/}
        {/*        <Input maxLength={10} />*/}
        {/*      </Item>*/}
        {/*    </Col>*/}
        {/*  </Row>*/}
        {/*  <Button type="primary" htmlType="submit">submit</Button>*/}
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
