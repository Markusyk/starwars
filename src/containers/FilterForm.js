import React, { useState} from 'react';

import debounce from 'lodash/debounce';
import {makeStyles} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import {sliderDefault} from "../constants/filter.constants";
import {useQueryFilterParams} from "../hooks/filterQueryParams";


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


export default function FilterForm(props) {
    const classes = useStyles();
    const history = useHistory();
    const query = useQueryFilterParams();
    const [appliedLowerMass, appliedBiggerMass] = query.mass;
    const [appliedLowerHeight, appliedBiggerHeight] = query.height;
    const appliedNameIncludes = query.nameIncludes;
    const [massSliderValue, setMassSliderValue] = useState(query.mass);
    const [heightSliderValue, setHeightSliderValue] = useState(query.height);
    const [nameFilter, setNameFilterValue] = useState(query.nameIncludes);
    const [lowerMass, biggerMass] = massSliderValue;
    const [lowerHeight, biggerHeight] = heightSliderValue;
    const debouncedSetName = debounce(setNameFilterValue, 300);
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
    const handleApplyFiltersBtn = () => {
        const massAndHeighQueryString = `?mass=${lowerMass},${biggerMass}&height=${lowerHeight},${biggerHeight}`;
        const queryParamString  = nameFilter === '' ? massAndHeighQueryString
            : `${massAndHeighQueryString}&nameIncludes=${nameFilter}`;
        history.push(queryParamString);
    };

    const handleResetFiltersBtn = () => {
        const queryParamString  = `?mass=${sliderDefault.mass.lower},${sliderDefault.mass.bigger}&height=${sliderDefault.height.lower},${sliderDefault.height.bigger}`;
        history.push(queryParamString);
    };
    const createButton = () => {
        // TODO: add logic when you need to disable button
        const isFilterApplied = true;
        return (
            <React.Fragment>
                {isFilterApplied ?
                    (
                        <Button variant="contained" color="primary" onClick={handleApplyFiltersBtn}
                                className={classes.button}>
                            Apply Filters
                        </Button>) :
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
                        min={sliderDefault.mass.lower}
                        max={sliderDefault.mass.bigger}
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
                        min={sliderDefault.height.lower}
                        max={sliderDefault.height.bigger}
                    />
                </Box>
                <Box className={classes.formInputText}>
                    <TextField
                        id="standard-basic"
                        className={classes.formInputTextControl}
                        label="Name includes such letters"
                        defaultValue={appliedNameIncludes}
                        margin="normal"
                        onChange={onNameFilterChange}
                    />
                </Box>
            </Paper>
            <Paper className={classes.formPaper}>
                {createButton()}
                <Button variant="contained" onClick={handleResetFiltersBtn}  className={classes.button}>
                    Reset to default
                </Button>
            </Paper>
            <Paper className={classes.formPaper}>
                Filtering entered: Mass entered between {lowerMass} and {biggerMass} AND
                Height is entered between {lowerHeight} and {biggerHeight} AND
                {nameFilter === '' ? ' No Name Filters'  : ` Name filter is ${nameFilter}`}
            </Paper>
            <Paper className={classes.formPaper}>
                Filters applied: Mass entered between {appliedLowerMass} and {appliedBiggerMass} AND
                Height is entered between {appliedLowerHeight} and {appliedBiggerHeight} AND
                {appliedNameIncludes === '' ? ' No Name Filters'  : ` Name filter is ${appliedNameIncludes}`}
            </Paper>
        </>
    );
}
