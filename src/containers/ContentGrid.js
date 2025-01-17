import React from "react";
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/fp/map';
import ContentGridItem from "./ContentGridItem";


const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));

export default function ContentGrid(props) {
    const classes = useStyles();
    const contentItems = map((item) => {
        return (
            <ContentGridItem key={item.name} id={item.id} title={item.name} date={item.created.slice(0, 10)} content={item}/>
        );
    }, props.data);
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            {isEmpty(props.data) && <div>No data for Filters</div>}
            <Grid container>
                {contentItems}
            </Grid>
        </main>
    )
}
