import React from "react";
import Header from "../containers/Header";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

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
            <Box>
                <div className="page-wrapper">
                    <Header label={this.props.title} onHelloClick={this.pageWrapperClick}/>
                    <div> {this.props.desc} </div>
                    <form>
                        <input type="text"/>
                        <button type="submit">Add Keep Note</button>
                    </form>
                    <Button variant="contained" color="primary">
                        Hello World
                    </Button>
                    <Box letterSpacing={6} m={1}>
                        Letter Spacing 6px.
                        <Button variant="contained" color="primary">
                            Hello World
                        </Button>
                    </Box>
                    <Box letterSpacing={10} m={1}>
                        Letter Spacing 10px.
                        <Button variant="contained" color="primary">
                            Hello World
                        </Button>
                    </Box>
                </div>
                <IconButton aria-label="delete">
                    <SvgIcon>
                        <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                    </SvgIcon>
                </IconButton>
            </Box>
        );
    }
}
