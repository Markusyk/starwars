import React, {useEffect, useState} from 'react';
import Header from "./Header";
import debounce from 'lodash/debounce';
import filter from 'lodash/fp/filter';
import flow from 'lodash/fp/flow'
import identity from 'lodash/fp/identity';
import {connect} from 'react-redux';
import {makeStyles} from "@material-ui/core";

import {getPeople} from "../actions";
import {withRouter, useLocation} from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import TabPanel from "./TabPanel";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ContentGrid from "./ContentGrid";
import FilterForm from "./FilterForm";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    slider: {
        width: 400
    },
    formPaper: {
        display: 'flex'
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

function useQueryParams() {
    return new URLSearchParams(useLocation().search);
}

function tabAttributes(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function StarWarsPageWrapper(props) {
    const classes = useStyles();
    const [tabValue, setTabValue] = useState(0);
    const query = useQueryParams();
    const [lowerMass, biggerMass] = query.has('mass') ?
        query.get('mass').split(',') : [0, 200];
    const [lowerHeight, biggerHeight] = query.has('height') ? query.get('height').split(',')
        : [0, 250];

    const currentFilterStringForName = query.has('nameIncludes') ? query.get('nameIncludes') : '';

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const isBetweenNumbers = (current, lowerLimit, biggerLimit) => {
        return Number(current) >= Number(lowerLimit) &&
            Number(current) <= Number(biggerLimit);
    };

    const filterByCurrentFilterStringForName = filter((person) => person.name.includes(currentFilterStringForName));

    const filteredPeople = flow(
        filter((person) => isBetweenNumbers(person.mass, lowerMass, biggerMass)),
        filter((person) => isBetweenNumbers(person.height, lowerHeight, biggerHeight)),
        currentFilterStringForName  === '' ?  identity : filterByCurrentFilterStringForName
    )(props.people);

    useEffect(() => {
        const getPeople = props.onGetPeople;
        getPeople();
    }, [props.onGetPeople]);

    return (
        <div className={classes.root}>
            <Header title={'Star Wars'}/>
            <div className={classes.tab}>
                <div className={classes.toolbar}/>
                <div>

                </div>
                <Tabs value={tabValue} onChange={handleTabChange} aria-label="simple tabs example">
                    <Tab label="People" {...tabAttributes(0)} />
                    <Tab label="Starships" {...tabAttributes(1)} />
                    <Tab label="Planet" {...tabAttributes(2)} />
                </Tabs>

                <TabPanel value={tabValue} index={0}>
                    <FilterForm/>
                    <ContentGrid data={filteredPeople}/>
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    <ContentGrid data={props.people}/>
                </TabPanel>
                <TabPanel value={tabValue} index={2}>
                    <ContentGrid data={props.people}/>
                </TabPanel>
            </div>


            <div className={classes.content}>
                <div className={classes.toolbar}/>
                {props.loading && <CircularProgress className={classes.spinner}/>}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        people: state.people.all.results,
        loading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    const log = debounce(console.log, 300);
    return {
        onGetPeople: () => dispatch(getPeople()),
        onMassFilterChange: (filter) => log('Filter')
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StarWarsPageWrapper));
