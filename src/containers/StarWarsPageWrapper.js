import React, { useState} from 'react';
import Header from "./Header";
import {makeStyles} from "@material-ui/core";
import {withRouter, Route, Switch, useHistory, Redirect} from "react-router-dom";
import TabPanel from "./TabPanel";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DetailedGridPerson from "./DetailedPerson";

import PeoplePage from "./PeoplePage";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    slider: {
        width: 400
    },
    formPaper: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    tabs: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function tabAttributes(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function StarWarsPageWrapper(props) {
    const classes = useStyles();
    const [tabValue, setTabValue] = useState(0);
    const history = useHistory();
    const mappingOfURLandTabIndexes = [
        '/people',
        '/starships',
        '/planets'
    ];
    const handleTabChange = (event, tabIndex) => {
        setTabValue(tabIndex);
        history.push(mappingOfURLandTabIndexes[tabIndex])
    };


    return (
        <div className={classes.root}>
            <Header title={'Star Wars'}/>
            <div className={classes.tab}>
                <div className={classes.toolbar}/>
                <div>

                </div>
                <Tabs value={tabValue} onChange={handleTabChange} aria-label="simple tabs example">
                        <Tab label="People" {...tabAttributes(0)} />
                        <Tab label="Starships" {...tabAttributes(1)} />
                        <Tab label="Planet" {...tabAttributes(2)} />
                </Tabs>

                <TabPanel value={tabValue} index={0}>
                    <Switch>
                        <Redirect exact from={'/'} to={'/people'}/>
                        <Route exact path={'/people'}>
                            <PeoplePage/>
                        </Route>
                        <Route path={`/people/:id`}>
                            <DetailedGridPerson/>
                        </Route>
                    </Switch>
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    <div>Somme StarWars to be here</div>
                </TabPanel>
                <TabPanel value={tabValue} index={2}>
                   <div>Some planets to be here</div>
                </TabPanel>
            </div>
        </div>
    );
}


export default withRouter(StarWarsPageWrapper);
