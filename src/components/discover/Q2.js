import React, { Component } from 'react'
import Cards from './QQ2'



export default class first extends Component {
    render() {
        return (
            <div>
                <Cards history={this.props.history}/>

            </div>
        )
    }
}