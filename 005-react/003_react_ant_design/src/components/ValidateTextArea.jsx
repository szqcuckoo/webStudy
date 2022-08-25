import React, {Component} from "react";
import {Form} from "antd";
import TextArea from "antd/lib/input/TextArea"
const {Item} = Form

export default class ValidateTextArea extends Component {

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
        required:this.props.required,
        validator: (_, value) => {
            const {status, msg} = this.validateLength(value, _.maxLength, _.required)
            return  status ?  Promise.reject(msg) :   Promise.resolve()
        }
    }]

    render() {
        return (
            <div className="App">
              <Item label={'validate测试'} name={'validateMaxLength'} rules={this.rules} validateTrigger={['onChange', 'onBlur']}>
                <TextArea />
              </Item>
            </div>
        )
    }
}