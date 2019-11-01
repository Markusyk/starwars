import React from "react";
import Header from "../containers/Header";


export default class PageWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.pageWrapperClick = this.pageWrapperClick.bind(this);
    }
    pageWrapperClick(event) {

        this.props.onWrapperClick(event);
    }
    render() {
        return (
            <div className="page-wrapper">
                <Header label={this.props.title} onHelloClick={this.pageWrapperClick} />
                <div> {this.props.desc} </div>
                <form>
                    <input type="text" />
                    <button type="submit">Add Keep Note</button>
                </form>
            </div>
            );
    }
}
