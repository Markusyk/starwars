import React from "react";
import {makeStyles} from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardMedia from "@material-ui/core/CardMedia";
import Button from '@material-ui/core/Button';
import {Link, useRouteMatch} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    media: {
        height: 220,
        width: 253,
    },
    card: {
        width: 400,
        height: 425
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));
export default function DetailedGridPerson({title, date, id, content}) {
    const classes = useStyles();
    let { url } = useRouteMatch();
    return (
        <Grid item>
            <Card className={classes.card}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title={title}
                    subheader={date}
                />
                <CardMedia
                    className={classes.media}
                    image="/Yoda.webp"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Mass of Person: {content.mass}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Height of Person: {content.height}
                    </Typography>

                </CardContent>
                <CardActions>
                    <Link to={`${url}/${id}`} >
                        <Button variant="contained" color="primary" className={classes.button}>
                            Go to Details
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
}
