import { Component } from "react";


export default class LifecycleClassComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            counter : 0
        }
    }

    increment = () => {
        this.setState((state) => ({
            counter : state.counter + 10
        }))
    }

    decrement = () => {
        this.setState((state) => ({
            counter : state.counter - 10
        }))
    }

    render() {
        return(
            <div className="container">
                <span>Class Component</span>
                <h1>{this.state.counter}</h1>
                <br />

                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}