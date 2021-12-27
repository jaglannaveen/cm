import React, { Component } from "react";

class test extends Component {
    state={
        title:'',
        body:''
    };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({
        title:data.title,
        body:data.body
    }))
  }
  /*componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }*/
  render() {
      const{title,body}=this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
export default test;
