import React from 'react'
import { Component } from 'react/cjs/react.production.min';
import './Counter.css'
import PropTypes from 'prop-types'

class Counter extends Component {
    //define initial state of the counter
    constructor(){
        super();
        this.state = {
            //represents total counter
            counter : 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(by) {
        console.log(`increment from parent ${by}`);
        this.setState({counter : this.state.counter + by})
    }

    decrement(by) {
        console.log(`decrement from parent ${by}`);
        this.setState({counter : this.state.counter - by})
    }

    reset = () => {
        this.setState({counter: 0})
    }

    render(){
        return(
            <div>
            <CounterButton by={1} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
            <CounterButton by={5} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
            <CounterButton by={10} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
            <span className='counter' style={{fontSize:"30px"}}>{this.state.counter}</span>
            <div><button className='reset' onClick={this.reset}>RESET</button></div>          
            </div>
        );
    }
}


class CounterButton extends Component {
    //initial state should be defined in a constructor
    constructor(){
        super()
        // this.state = {
        //     //represents specific counter
        //     counter : 0
        // }
        //Arrow function allows us to remove the below line
        //this.increment = this.increment.bind(this)
    }

    render() {
    return (
        <div className='counter'>
            <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
            <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            {/*<span className='count'>{this.state.counter}</span> */}
        </div>
    );
    }

    //to make this available to method, we will have to bind the method inside the class
    // increment = () => {
    //     //console.log(this.state.counter++); Bad Practice!
    //     //in react you dont update the state directly
    //     //this.setState({counter: this.state.counter + this.props.by});
    //     this.props.incrementMethod(this.props.by)
    // }

    // decrement = () => {
    //     this.props.decrementMethod(this.props.by)
    // }
}
CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default Counter;