import React, {useEffect, useState} from 'react';
import Header from "./Header";
import debounce from 'lodash/debounce';
import filter from 'lodash/fp/filter';
import flow from 'lodash/fp/flow'
import identity from 'lodash/fp/identity';
import {connect} from 'react-redux';
import {makeStyles} from "@material-ui/core";

import {getPeople} from "../actions";
import {BrowserRouter as Router,
    withRouter, Route, Switch, useRouteMatch,
    Link, useHistory,
Redirect} from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import TabPanel from "./TabPanel";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ContentGrid from "./ContentGrid";
import FilterForm from "./FilterForm";
import {useQueryFilterParams} from "../hooks/filterQueryParams";
import DetailedGridPerson from "./DetailedPerson";
import {basePathForRouting} from "../constants/routing.constants";
import {getAllPeopleSelector} from "../selectors/people";

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

function tabAttributes(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function StarWarsPageWrapper(props) {
    const classes = useStyles();
    const [tabValue, setTabValue] = useState(0);
    const filterQueryParams = useQueryFilterParams();
    const urlSearchParams = useQueryFilterParams().urlSearchParams;
    const [lowerMass, biggerMass] = filterQueryParams.mass;
    const [lowerHeight, biggerHeight] = filterQueryParams.height;
    const currentFilterStringForName = filterQueryParams.nameIncludes;
    const {path, url} = useRouteMatch();
    const history = useHistory();
    const mappingOfURLandTabIndexes = [
        '/people',
        '/starships',
        '/planets'
    ];
    const handleTabChange = (event, tabIndex) => {
        setTabValue(tabIndex);
        history.push(mappingOfURLandTabIndexes[tabIndex])
    };

    const isBetweenNumbers = (current, lowerLimit, biggerLimit) => {
        return Number(current) >= Number(lowerLimit) &&
            Number(current) <= Number(biggerLimit);
    };
    const flowableFilterByMass = urlSearchParams.has('mass') ?
        filter((person) => isBetweenNumbers(person.mass, lowerMass, biggerMass))
        : identity;
    const flowableFilterByHeight = urlSearchParams.has('height') ?
        filter((person) => isBetweenNumbers(person.height, lowerHeight, biggerHeight))
        : identity;
    const fllowableFillterByIncludeText = currentFilterStringForName === '' ? identity :
        filter((person) => person.name.toLowerCase().includes(currentFilterStringForName.toLowerCase()));

    const transformedPeople = flow(
        flowableFilterByMass,
        flowableFilterByHeight,
        fllowableFillterByIncludeText
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
                    <Switch>
                        <Redirect exact from={'/'} to={'/people'}/>
                        <Route exact path={'/people'}>
                            <FilterForm/>
                            <ContentGrid data={transformedPeople}/>
                        </Route>
                        <Route path={`/people/:id`}>
                            <DetailedGridPerson content={transformedPeople}/>
                        </Route>
                    </Switch>
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    <ContentGrid data={props.people}/>
                </TabPanel>
                <TabPanel value={tabValue} index={2}>
                    <ContentGrid data={props.people}/>
                </TabPanel>
            </div>


            < div
                className={classes.content}>
                < div
                    className={classes.toolbar}
                />
                {
                    props.loading && <CircularProgress className={classes.spinner}/>
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        people: getAllPeopleSelector(state),
        loading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetPeople: () => dispatch(getPeople()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StarWarsPageWrapper));
