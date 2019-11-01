import React from 'react';
import { connect } from 'react-redux';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onHelloClick({
            target: event.target,
            clientX: event.clientX
        });
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <h1>Hello, world! {this.props.label}</h1>
            </div>
        );
    }
}


