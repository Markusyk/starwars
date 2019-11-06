import React from "react";
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ContentItem from "./ContentItem";
import { contentData } from "../mocked/content.constant";

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(1),
        right: theme.spacing(2),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    toolbar: theme.mixins.toolbar,
}));

export default function Content() {
    const classes = useStyles();
    const contentItems = contentData.map( ({title, date, description}, index) => {
        return (
            <ContentItem key={index}  title={title} date={date} description={description}/>
        );
    });
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container>
                {contentItems}
            </Grid>
            <Fab color="primary" aria-label="add" className={classes.fab}>
                <AddIcon/>
            </Fab>
        </main>
    )
}
