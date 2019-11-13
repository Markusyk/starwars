import React, {useEffect} from 'react';
import Header from "./Header";
import Content from "./Content";
import axios from "../http/star-wars-default-config";
import { connect } from 'react-redux';
import {makeStyles} from "@material-ui/core";
import AddIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Fab from "@material-ui/core/Fab";
import {getPeople} from "../actions";
import { withRouter } from "react-router-dom"

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(4),
        right: theme.spacing(6),
    },
}));

function StarWarsPageWrapper(props) {
    const classes = useStyles();
    const handleClick = () => {
        props.buttonClicked(true);
    };
    return (
        <React.Fragment>
            <Content/>
            <div className={classes.content}>
                <div className={classes.toolbar}/>
                <Fab color="primary" aria-label="add" className={classes.fab} onClick={handleClick}>
                    <AddIcon/>
                </Fab>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = (state /*, ownProps*/) => {
    console.log(state);
    return {
        people: state.people
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        buttonClicked: () => dispatch(getPeople())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StarWarsPageWrapper));
