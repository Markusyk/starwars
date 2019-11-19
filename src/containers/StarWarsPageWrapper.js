import React, {useEffect, useState} from 'react';
import Header from "./Header";
import debounce from 'lodash/debounce';
import {connect} from 'react-redux';
import {makeStyles} from "@material-ui/core";

import {getPeople} from "../actions";
import {Link, withRouter, useLocation} from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import TabPanel from "./TabPanel";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ContentGrid from "./ContentGrid";
import Paper from "@material-ui/core/Paper";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    slider: {
        width: 400
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

function useQueryParams() {
    return new URLSearchParams(useLocation().search);
}

function StarWarsPageWrapper(props) {
    const classes = useStyles();
    const [tabValue, setValue] = useState(0);
    const [massSliderValue, setMassSliderValue] = useState([50, 140]);
    const [minMass, maxMass] = massSliderValue;
    const query = useQueryParams();
    useEffect(() => {
        const getPeople = props.onGetPeople;
        getPeople();
    }, [props.onGetPeople]);

    const onMassFilterChange = (event, value) => {
        setMassSliderValue(value);
        props.onMassFilterChange({mass: value})
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function valuetext(value) {
        return `${value} Mass`;
    }

    return (
        <div className={classes.root}>
            <Header title={'Star Wars'}/>
            <div className={classes.tab}>
                <div className={classes.toolbar}/>
                <Tabs value={tabValue} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="People" {...tabAttributes(0)} />
                    <Tab label="Starships" {...tabAttributes(1)} />
                    <Tab label="Planet" {...tabAttributes(2)} />
                </Tabs>

                <TabPanel value={tabValue} index={0}>
                    <Paper>
                        <Typography d="range-slider" gutterBottom>
                            Mass is {query.get('mass')}
                        </Typography>
                        <Slider
                            className={classes.slider}
                            value={massSliderValue}
                            getAriaValueText={valuetext}
                            aria-labelledby="range-slider"
                            valueLabelDisplay="auto"
                            onChange={onMassFilterChange}
                            step={10}
                            marks
                            min={30}
                            max={200}
                        />
                    </Paper>
                    <Link to={`?mass=${minMass},${maxMass}`}>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Apply Filters
                        </Button>
                    </Link>

                    <ContentGrid filterChanged={massSliderValue} data={props.people}/>
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
