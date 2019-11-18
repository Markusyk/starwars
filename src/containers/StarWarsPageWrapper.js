import React, {useEffect, useState} from 'react';
import Header from "./Header";
import debounce from 'lodash/debounce';

import filter from 'lodash/fp/filter';
import { connect } from 'react-redux';
import {makeStyles} from "@material-ui/core";

import {filterPeopleByMASS, getPeople} from "../actions";
import { withRouter } from "react-router-dom"
import CircularProgress from "@material-ui/core/CircularProgress";
import TabPanel from "./TabPanel";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ContentGrid from "./ContentGrid";
import Paper from "@material-ui/core/Paper";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

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

function StarWarsPageWrapper(props) {
    const classes = useStyles();
    const [tabValue, setValue] = useState(0);
    const [sliderVal, setSliderVal] = useState([50, 140]);

    useEffect(() => {
      const getPeople =   props.onGetPeople;
      getPeople();
    }, [props.onGetPeople]);

    const onMassFilterChange = (event, value) => {
        setSliderVal(value);
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
                    <Paper >
                        <Typography d="range-slider" gutterBottom>
                            Mass
                        </Typography>
                        <Slider
                            className={classes.slider}
                            value={sliderVal}
                            getAriaValueText={valuetext}
                            aria-labelledby="range-slider"
                            valueLabelDisplay="auto"
                            onChange = {onMassFilterChange}
                            step={10}
                            marks
                            min={30}
                            max={200}
                        />
                    </Paper>
                        <ContentGrid filterChanged={sliderVal} data={props.people} />
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
                { props.loading && <CircularProgress className={classes.spinner} /> }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        people: filter(v => v.visible, state.people.all.results),
        loading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    const debouncedDispatch = debounce(dispatch, 300);
    return {
        onGetPeople: () => dispatch(getPeople()),
        onMassFilterChange: (filter)=> debouncedDispatch(filterPeopleByMASS(filter))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StarWarsPageWrapper));
