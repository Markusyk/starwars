import React from "react";
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ContentItem from "./ContentItem";
import { contentData } from "../mocked/content.constant";
import TextField from "@material-ui/core/TextField";
import Slide from "@material-ui/core/Slide";
import Header from "./Header";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
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


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function Content() {
    const classes = useStyles();
    const contentItems = contentData.map( ({title, date, description, tags}, index) => {
        return (
            <ContentItem key={index} tags={tags}  title={title} date={date} description={description}/>
        );
    });
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container>
                {contentItems}
            </Grid>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <Header/>
                <DialogContent>
                    <Paper>
                    <form>
                        <TextField
                            id="standard-required"
                            label="Required"
                            defaultValue="Hello World"
                            margin="normal"
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Multiline"
                            multiline
                            rowsMax="6"
                            defaultValue="Default Value"
                            margin="normal"
                        />
                    </form>
                    </Paper>
                </DialogContent>

            </Dialog>
            <Fab color="primary" aria-label="add" className={classes.fab} onClick={handleClickOpen}>
                <AddIcon/>
            </Fab>
        </main>
    )
}
