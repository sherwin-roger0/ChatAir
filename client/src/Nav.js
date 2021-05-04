import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import {Link} from "react-router-dom";
import ChatIcon from '@material-ui/icons/Chat';
import {useHistory} from "react-router";
import { auth } from "./firebase";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import TransitEnterexitIcon from '@material-ui/icons/TransitEnterexit';
import ForumIcon from '@material-ui/icons/Forum';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  }
}));

export default function Nav(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const history = useHistory()

  async function logout(){
    await auth.signOut();
    await window.localStorage.clear();
    history.push("/login");
  } 

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <ChatIcon/>
          <Typography style={{padding: "5px"}} variant="h6" noWrap className={classes.title}>
            ChatAir
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
          <Link to='/' className={classes.link} >
            <List>
              <ListItem button key='Sign up'>
                <ListItemIcon><VpnKeyIcon/>
                </ListItemIcon>
                <ListItemText primary='Sign up' />
              </ListItem>
            </List>
          </Link>
          <Link to='/login' className={classes.link} >
            <List>
              <ListItem button key='login'>
                <ListItemIcon><TransitEnterexitIcon/>
                </ListItemIcon>
                <ListItemText primary='login' />
              </ListItem>
            </List>
          </Link>
          <Link to='/chat' className={classes.link} >
            <List>
              <ListItem button disabled={props.True} key='Chat'>
                <ListItemIcon><ForumIcon/>
                </ListItemIcon>
                <ListItemText primary='Chat' />
              </ListItem>
            </List>
          </Link>
          <Link to='/profile' className={classes.link} >
            <List>
              <ListItem button disabled={props.True} key='Profile'>
                <ListItemIcon><AssignmentIndIcon/>
                </ListItemIcon>
                <ListItemText primary='Profile' />
              </ListItem>
            </List>
          </Link>
          <Link className='disabled-link' to='/about' className={classes.link} >
            <List>
              <ListItem button  disabled={props.True} key='about'>
                <ListItemIcon><InfoIcon/>
                </ListItemIcon>
                <ListItemText primary='about' />
              </ListItem>
            </List>
          </Link>
            <List>
              <ListItem button onClick={logout} disabled={props.True} key='Logout'>
                <ListItemIcon><ExitToAppIcon/>
                </ListItemIcon>
                <ListItemText primary='Logout' />
              </ListItem>
            </List>
        <Divider />
      </Drawer>
    </div>
  );
}
