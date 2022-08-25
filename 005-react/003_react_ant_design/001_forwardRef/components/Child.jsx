import React from "react";
import {Input} from "antd";
/*
* 函数组件
* */
export const Child = React.forwardRef((props, inputRef) => {
    return (
        <>
            <Input ref={inputRef} {...props} />
        </>
    )
})