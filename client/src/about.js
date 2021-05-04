import {useState,useRef} from "react";
import Nav from './Nav';
import {
  ThemeProvider,
} from '@material-ui/core/styles';
import theme from './color';
import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Footer from "./footer"
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router"
import { auth } from "./firebase"
import ChatIcon from '@material-ui/icons/Chat';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function About(){
  const history=useHistory();
  const classes = useStyles();
  const email=window.localStorage.getItem('name')
  const name = email.replace("@gmail.com","");

  async function logout(){
    await auth.signOut();
    await window.localStorage.clear();
    history.push("/login");
  }

  return(
    <div>
      <ThemeProvider theme={theme}>
        <Nav />
       <React.Fragment>
         <CssBaseline />
           <Container fixed>
             <Grid direction="column" justify="center" alignItems="center" container spacing={1}>
                <Grid item xs>
                  <br />
                  <Typography color="primary"  align="center" variant="h4" gutterBottom>About me and this website</Typography>
                </Grid>
               <Grid item xs>
                  <Typography color="primary"  align="center" variant="h6" gutterBottom>This website is made with React for Client side,Node for Backend,FireBase for login and Material-UI for Styling</Typography>
               </Grid>
               <Grid item xs>
                <Typography color="secondary"   align="center" variant="h4" gutterBottom>
                    This Website uses,
                </Typography>
                <Typography color="secondary"   align="center" variant="h5" gutterBottom>
                    React
                </Typography>
                <LinearProgress style={{backgroundColor:"red"}} variant="determinate" value={80} />
                <Typography color="secondary"   align="center" variant="h5" gutterBottom>
                  <br />
                    Node
                </Typography>
                <LinearProgress style={{backgroundColor:"brown"}} variant="determinate" value={70} />
                <Typography color="secondary"   align="center" variant="h5" gutterBottom>
                  <br />
                    Mongo DB
                </Typography>
                <LinearProgress style={{backgroundColor:"green"}} variant="determinate" value={60} />
                <Typography color="secondary"   align="center" variant="h5" gutterBottom>
                  <br/>
                    FireBase
                </Typography>
                <LinearProgress style={{backgroundColor:"yellow"}} variant="determinate" value={50} />
                <Typography color="secondary"   align="center" variant="h5" gutterBottom>
                  <br/>
                    Material-UI
                </Typography>
                <LinearProgress style={{backgroundColor:"blue"}} variant="determinate" value={95} />
                <br />
                <br/>
                <br />
               </Grid>
               <Grid item xs>
                <Typography color="secondary"   align="center" variant="h4" gutterBottom>
                    My skills
                </Typography>
                <Typography color="secondary"   align="center" variant="h5" gutterBottom>
                    Python
                </Typography>
                <LinearProgress style={{backgroundColor:"blue"}} variant="determinate" value={90} />
                <Typography color="secondary"   align="center" variant="h5" gutterBottom>
                  <br />
                    JavaScript
                </Typography>
                <LinearProgress style={{backgroundColor:"yellow"}} variant="determinate" value={70} />
                <Typography color="secondary"   align="center" variant="h5" gutterBottom>
                  <br />
                    Web Development
                </Typography>
                <LinearProgress style={{backgroundColor:"red"}} variant="determinate" value={80} />
                <Typography color="secondary"   align="center" variant="h5" gutterBottom>
                  <br/>
                    DataBase Management
                </Typography>
                <LinearProgress style={{backgroundColor:"green"}} variant="determinate" value={60} />
                <br />
                <br/>
                <br />
                <br/>
                <br />
               </Grid>
             </Grid>
             <Footer/>
            </Container>
        </React.Fragment>
      </ThemeProvider>
    </div>
  )
}

export default About;
