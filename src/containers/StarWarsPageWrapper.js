import React, {useEffect} from 'react';
import Header from "./Header";
import debounce from 'lodash/debounce';

import filter from 'lodash/filter';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
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
    const [sliderVal, setSliderVal] = React.useState([50, 140]);
    useEffect(() => {
        props.onGetPeople();
    }, []);
    const [value, setValue] = React.useState(0);
    const onMassFilterChange = (event, value) => {

        setSliderVal(value);
        props.onMassFilterChange({mass: value})
    };
    const debouncedonMassFilterChange = debounce(onMassFilterChange, 100);
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
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="People" {...tabAttributes(0)} />
                    <Tab label="Starships" {...tabAttributes(1)} />
                    <Tab label="Planet" {...tabAttributes(2)} />
                </Tabs>

                <TabPanel value={value} index={0}>
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

const getVisiblePeople = (people, filterObj) => {
    if (isEmpty(filterObj)) {
        return filter(v => v.visible,  people);
    } else {
        return filter(v => v.visible,  people);
    }
};
const mapStateToProps = (state) => {
    const  filters = get(state, 'people.filters.mass', [50, 140]);
    console.log('mapStateToProps', {state, filters, people: state.people.all.results});
    /*
    *
    *  filter((item) => {
            console.log('item and filters', {item, filters});
          return +item.mass >=  filters[0] &&  + item.mass <= filters[1];
        }, state.people.all.results)
    * */
    return {
        people: getVisiblePeople(state.people.all.results, state.people.filters),
        filters: state.people.filters.mass,
        loading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const debouncedDispatch = debounce(dispatch, 300);
    return {
        onGetPeople: () => dispatch(getPeople()),
        onMassFilterChange: (filter)=> debouncedDispatch(filterPeopleByMASS(filter))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StarWarsPageWrapper));
