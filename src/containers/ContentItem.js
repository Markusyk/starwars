import React from "react";
import {makeStyles} from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 400,
        maxHeight: 400
    },
}));

export default function ContentItem({title, date, description}) {
    const classes = useStyles();
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
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
    );
}
