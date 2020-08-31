import React, { Component } from 'react'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    add = () => {
        this.setState(p => ({
            count: p.count + 1
        }))
    }

    render() {
        return (
            <div>
                <div>Home</div>
                <div>Count:{this.state.count}</div>
                <button onClick={this.add}>Increment</button>
            </div>
        )
    }
}

export default Home;