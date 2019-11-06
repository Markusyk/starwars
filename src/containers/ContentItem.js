import React, {useState} from "react";
import {makeStyles} from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 400,
        maxHeight: 400
    },
    tags: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: theme.spacing(0.5),
    },
        chip: {
            margin: theme.spacing(0.5),
        },
    }));

export default function ContentItem({title, date, description, tags}) {
    const classes = useStyles();
    const [tagItems, setTagData] = useState(tags);
    const handleDeleteClick = tagToDelete => () => {
        setTagData(tags => tags.filter(tag => tag.id !== tagToDelete.id));
    };
    let id = 0;
    const handleTagClick = clickedItem => () => {
        setTagData(tags => [...tags, { ...clickedItem, id: clickedItem.id + id++ }]);
    };
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
                        { tagItems.length > 0 &&
                            <Paper className={classes.tags}>
                                {tagItems.map((item) =>
                                    <Chip
                                        key={item.id}
                                        label={item.name}
                                        onClick={handleTagClick(item)}
                                        onDelete={handleDeleteClick(item)}
                                        className={classes.chip}
                                    />
                                )}
                            </Paper>
                        }
                    </CardContent>
                </Card>
            </Grid>
    );
}
