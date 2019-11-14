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
import CircularProgress from "@material-ui/core/CircularProgress";
import TabPanel from "./TabPanel";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ContentGrid from "./ContentGrid";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    tabs: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    spinner: {
        position: 'fixed',
        bottom: '50%',
        right: '50%',
        transform: 'translate(-50%, -50%)',
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(6),
    },
}));
function tabAttributes(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function StarWarsPageWrapper(props) {
    const classes = useStyles();
    useEffect(() => {
        props.onGetPeople();
    }, []);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Header title={'Star Wars'}/>
            <div className={classes.tab}>
                <div className={classes.toolbar}/>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="People" {...tabAttributes(0)} />
                    <Tab label="Starships" {...tabAttributes(1)} />
                    <Tab label="Planet" {...tabAttributes(2)} />
                </Tabs>

                <TabPanel value={value} index={0}>
                    <ContentGrid data={props.people}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ContentGrid data={props.people}/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ContentGrid data={props.people}/>
                </TabPanel>
            </div>


            <div className={classes.content}>
                <div className={classes.toolbar}/>
                { props.loading && <CircularProgress className={classes.spinner} /> }
            </div>
        </div>
    );
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        people: state.people.all.results,
        loading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onGetPeople: () => dispatch(getPeople())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StarWarsPageWrapper));
