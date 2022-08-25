import { Component } from "react";

// class Input extends Component {
//   render(){
//     return (
//       <input type="text" />
//     )
//   }
// }

const HOC = (WrapComponent) => {
  return class NewComponent extends Component {
    render(){
      return <WrapComponent name={'dsdfaasf'}></WrapComponent>
    }
  }
}

export default HOC