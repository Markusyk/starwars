import React, {useEffect, useState} from "react";
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
import isEmpty from 'lodash/isEmpty';
import {Link, useParams} from "react-router-dom";
import {basePathForImages } from "../constants/routing.constants";
import axios from "../http/star-wars-default-config";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    link: {
        textDecoration: 'none',
    },
    spinner: {
        position: 'fixed',
        bottom: '50%',
        right: '50%',
        transform: 'translate(-50%, -50%)',
    },
    media: {
        height: 220,
        width: 253,
    },
    card: {
        width: 400,
        height: 525
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));

 export default function DetailedGridPerson({content, fetchPersonById}) {
    const classes = useStyles();
    let { id } = useParams();
    const [person, setPerson] = useState({} );
     const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const result =  await axios.get(`/people/${id}/`);
                setPerson(result.data);
            } catch (e) {
                console.err(e);
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [id]);

    return (
     <React.Fragment>
         {!isEmpty(person) &&
        <Grid item>
            <Card className={classes.card}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title={person.name}
                    subheader={person.created.slice(0, 10)}
                />
                <CardMedia
                    className={classes.media}
                    image={`${basePathForImages}Yoda.webp`}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Mass of Person: {person.mass}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Height of Person: {person.height}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Hair color of Person: {person.hair_color}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Skin color of Person: {person.skin_color}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Eye color of Person: {person.eye_color}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link className={classes.link} to={`/people`} >
                        <Button  variant="contained" color="primary" className={classes.button}>
                            Go back
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid> }
         <div className={classes.content}>
             <div className={classes.toolbar}/>
             {
                 isLoading   && <CircularProgress className={classes.spinner}/>
             }
         </div>
     </React.Fragment>
    );
}

