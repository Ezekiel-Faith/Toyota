import React, { Component } from "react";

class ErrorBound extends Component{
  constructor(props){
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedstateFromError(error){
    this.state = {hasError: true};
  }

  componentDidCatch(error, errorInfo){
    console.error('something went wrong:', error, errorInfo);
  }

  render(){
    if(this.state.hasError){
      return <h2>this component has an issue</h2>
    }
    return this.props.children;
  }
}
export default ErrorBound;
