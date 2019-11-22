import React, { useState} from 'react';

import debounce from 'lodash/debounce';
import {makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles(theme => ({
    slider: {
        width: 400
    },
    formPaper: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: theme.spacing(2)
    },
    formInput: {
        width: 400,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(4),
        marginBottom: theme.spacing(4)
    },
    formInputText: {
        width: 400,
        marginRight: theme.spacing(4),
        marginBottom: theme.spacing(4)
    },
    formInputTextControl: {
        width: 400,
        marginRight: theme.spacing(4),
    },
    button: {
        marginRight: theme.spacing(4),

    },
    toolbar: theme.mixins.toolbar,
}));



export default function FlterForm(props) {
    const classes = useStyles();
    const defaultMassSliderValues = [0, 200];
    const defaultHeightSliderValues = [0, 250];
    const [massSliderValue, setMassSliderValue] = useState(defaultMassSliderValues);
    const [heightSliderValue, setHeightSliderValue] = useState(defaultHeightSliderValues);
    const [nameFilter, setNameFilterValue] = useState('');
    const [lowerMass, biggerMass] = massSliderValue;
    const [lowerHeight, biggerHeight] = heightSliderValue;

    const debouncedSetName = debounce(setNameFilterValue);
    const onNameFilterChange = (event) => {
        debouncedSetName(event.target.value);
    };
    const onMassFilterChange = (event, value) => {
        setMassSliderValue(value);
    };

    const onHeightFilterChange = (event, value) => {
        setHeightSliderValue(value);
    };


    function massSliderLabel(value) {
        return `${value} Mass`;
    }

    function heightSliderLabel(value) {
        return `${value} Height`;
    }

    const createButton = () => {
        const isFilterApplied = true;
        const massAndHeighQueryString = `?mass=${lowerMass},${biggerMass}&height=${lowerHeight},${biggerHeight}`;
        const queryParamString  = nameFilter === '' ? massAndHeighQueryString
            : `${massAndHeighQueryString}&nameIncludes=${nameFilter}`;
        return (
            <React.Fragment>
                {isFilterApplied ?
                    (<Link to={location => ({...location, search: queryParamString })}>
                        <Button variant="contained" color="primary"
                                className={classes.button}>
                            Apply Filters
                        </Button>
                    </Link>) :
                    (<Button disabled={isFilterApplied} variant="contained" color="primary" className={classes.button}>
                            Apply Filters
                        </Button>
                    )}
            </React.Fragment>
        );
    };

    return (
        <>
            <Paper className={classes.formPaper}>
                <Box className={classes.formInput}>
                    <Typography d="range-slider" gutterBottom>
                        Mass is between
                    </Typography>
                    <Slider
                        className={classes.slider}
                        value={massSliderValue}
                        getAriaValueText={massSliderLabel}
                        aria-labelledby="range-slider"
                        valueLabelDisplay="auto"
                        onChange={onMassFilterChange}
                        step={10}
                        marks
                        min={0}
                        max={200}
                    />
                </Box>
                <Box className={classes.formInput}>
                    <Typography d="range-slider" gutterBottom>
                        Height is between
                    </Typography>
                    <Slider
                        className={classes.slider}
                        value={heightSliderValue}
                        getAriaValueText={heightSliderLabel}
                        aria-labelledby="range-slider"
                        valueLabelDisplay="auto"
                        onChange={onHeightFilterChange}
                        step={10}
                        marks
                        min={0}
                        max={250}
                    />
                </Box>
                <Box className={classes.formInputText}>
                    <TextField
                        id="standard-basic"
                        className={classes.formInputTextControl}
                        label="Name includes such letters"
                        margin="normal"
                        onChange={onNameFilterChange}
                    />
                </Box>
            </Paper>
            <Paper className={classes.formPaper}>
                {createButton()}
                <Button variant="contained" className={classes.button}>
                    Reset to default
                </Button>
            </Paper>
            <Paper className={classes.formPaper}>
                Filtering entered: Mass entered between {lowerMass} and {biggerMass} AND
                Height is entered between {lowerHeight} and {biggerHeight} AND
                {nameFilter === '' ? ' No Name Filters'  : ` Name filter is ${nameFilter}`}
            </Paper>
            <Paper className={classes.formPaper}>
                Filters applied: Mass entered between {lowerMass} and {biggerMass} AND
                Height is entered between {lowerHeight} and {biggerHeight} AND
                {nameFilter === '' ? ' No Name Filters'  : ` Name filter is ${nameFilter}`}
            </Paper>
        </>
    );
}
