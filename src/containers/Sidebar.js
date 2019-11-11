import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider";


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
}));

export default function Sidebar() {
    const classes = useStyles();

    return (
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar} />
                <List>
                    <ListItem button>
                        <ListItemText primary="General" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Star Wars" />
                    </ListItem>
                    <Divider />
                    {['Travelling', 'Knowledge', 'Organizatinal', 'Work'].map((text) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                    <Divider />
                </List>
                <ListItem button>
                    <ListItemText primary="Edit Tags" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Archived" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Deleted" />
                </ListItem>
            </Drawer>
    );
}
