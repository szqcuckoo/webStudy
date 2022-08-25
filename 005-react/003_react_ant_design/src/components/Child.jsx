import React, {Component} from "react";
import {Form, Input, Button} from "antd";
import TextArea from "antd/lib/input/TextArea";
// import Item from "antd/es/list/Item";
const {Item} = Form

export default class Child extends Component {
    constructor(props) {
        super(props);
        this.onClearTextValue = this.onClearTextValue.bind(this)
    }
    state = {
        textValue: ''
    }
    onTextValueChange = (e) => {
        let value = e.target.value
        this.setState({textValue: value})
        // this.props.onChangeValue(value)
    }
    onClearTextValue = () => {
        this.testRef.resizableTextArea.textArea.value = ''
        // console.log(this.textRef)
        console.log(this.testRef)
        // this.textRef.value = ''
    }
    onGetRef = () => {
        console.log(this.testRef.resizableTextArea.textArea.value)
        // console.log(this.textRef)
    }

    render() {
        const {type} = this.props
        return (
            <>
                <Item label={'输入框'}>
                    {/*{*/}
                    {/*    type && type === 'input' ? (*/}
                    {/*        <Input ref={ref => this.textRef = ref} value={this.state.textValue}*/}
                    {/*               onChange={this.onTextValueChange}/>) : (*/}
                    {/*        <TextArea ref={ref => this.textRef = ref} value={this.state.textValue}*/}
                    {/*                    onChange={this.onTextValueChange}></TextArea>*/}
                    {/*    )*/}
                    {/*}*/}
                    <TextArea ref={ref=>this.testRef = ref}></TextArea>

                </Item>
            </>
        )
    }
}