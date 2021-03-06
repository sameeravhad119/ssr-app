import React, { Component } from 'react'
import { connect } from 'react-redux';
import { add } from '../../../redux/actions/count';

class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div>Home</div>
                <div>Count:{this.props.count}</div>
                <button onClick={this.props.add}>Increment</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.counter.value
})

const mapDispatchToProps = (dispatch) => ({
    add: () => dispatch(add())
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);