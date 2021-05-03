import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Count:''
        }
        
    }
    Increment(){
        const {Count}=this.state;
        this.setState({Count:Count+1})
    }
    componentDidMount(){
        const IncrementHandler=this.Increment.bind(this);
        setInterval(IncrementHandler,2000)
    }
    
    render() {
        return (
            <div>
                <h1>Counter {this.state.Count}</h1>
            </div>
        )
    }
}
