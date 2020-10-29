import React from 'react';
import Editor from './Editor'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Style from './AdminPanel.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        zIndex: 1000,
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        zIndex: 1000,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        zIndex: 1000,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function PermanentDrawerLeft() {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            Admin Panel
          </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="left"
                >
                    <div className={classes.toolbar} />
                    <Divider />
                    <List>
                        {[{
                            text: 'Редактор',
                            link: '/admin/editor',
                            src: 'https://image.flaticon.com/icons/png/512/16/16941.png'
                        },
                        {
                            text: 'Happy Hour',
                            link: '/admin/happyhour',
                            src: 'https://static.thenounproject.com/png/204832-200.png'
                        }, {
                            text: 'Сообщения',
                            link: '/admin/messages',
                            src: 'https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/messages-512.png'
                        }].map((item, index) => (
                            <ListItem button key={index}>
                                <img style={{ width: '30px', marginRight: '20px' }} src={item.src}></img>
                                <Link style={{ textDecoration: 'none', color: 'black' }} to={item.link}><ListItemText primary={item.text} /></Link>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Switch>
                        <Route exact path="/admin/editor">
                            <Editor/>
                        </Route>
                        <Route path="/admin/messages">
                            MESSAGES
                        </Route>
                        <Route path="/admin/happyhour">
                            SELLER
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}