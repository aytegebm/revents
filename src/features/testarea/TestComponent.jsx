import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Button } from 'semantic-ui-react';
import {incrementCounter, decrementCounter} from "./testActions"

const mapState = (state) => ({
    data: state.test.data
})

const actions = {
    incrementCounter,
    decrementCounter
}

class TestComponent extends Component {
    render() {
        const {data, incrementCounter, decrementCounter} = this.props; 
        return (
            <div>
                <h1>Test Component</h1>
                <h3>the answer is: {data} </h3>
                <Button onClick={incrementCounter} positive content='Increment'  />
                <Button onClick={decrementCounter} negative content='Decrement'  />
            </div>
        )
    }
}

export default connect(mapState, actions)(TestComponent)