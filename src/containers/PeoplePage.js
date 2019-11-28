import React, {useEffect } from 'react';
import ContentGrid from "./ContentGrid";
import FilterForm from "./FilterForm";
import {getAllPeopleSelector} from "../selectors/people";
import {getPeople} from "../actions";
import {withRouter} from "react-router-dom";
import filter from "lodash/fp/filter";
import identity from "lodash/fp/identity";
import flow from "lodash/fp/flow";
import {useQueryFilterParams} from "../hooks/filterQueryParams";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";


const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    spinner: {
        position: 'fixed',
        bottom: '50%',
        right: '50%',
        transform: 'translate(-50%, -50%)',
    }
}));

function PeoplePage(props) {
    const classes = useStyles();
    const filterQueryParams = useQueryFilterParams();
    const urlSearchParams = useQueryFilterParams().urlSearchParams;
    const [lowerMass, biggerMass] = filterQueryParams.mass;
    const [lowerHeight, biggerHeight] = filterQueryParams.height;
    const currentFilterStringForName = filterQueryParams.nameIncludes;
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
        <React.Fragment>
            <FilterForm/>
            <ContentGrid data={transformedPeople}/>
            < div
                className={classes.content}>
                < div
                    className={classes.toolbar}
                />
                {
                    props.loading && <CircularProgress className={classes.spinner}/>
                }
            </div>
        </React.Fragment>
    )
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PeoplePage));
