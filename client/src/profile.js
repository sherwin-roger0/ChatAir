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

function Profile(){
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
                  <Typography color="primary"  align="center" variant="h6" gutterBottom>Profile</Typography>
                </Grid>
               <Grid item xs>
                  <Avatar style={{paddingLeft:"1px"}} color="primary">{name.charAt(0)}</Avatar>
                </Grid>
               <Grid item xs>
               <Typography color="primary"  align="center" variant="h6" gutterBottom>
                  Email:
               </Typography>
                <Typography color="secondary"   align="center" variant="h6" gutterBottom>
                   {email}
                </Typography>
                <Typography color="primary"   align="center" variant="h6" gutterBottom>
                <br />   
                  Name:
               </Typography>
                <Typography color="secondary"   align="center" variant="h6" gutterBottom>
                   {name}
                </Typography>
               </Grid>
             </Grid>
             <Footer/>
            </Container>
        </React.Fragment>
      </ThemeProvider>
    </div>
  )
}

export default Profile;
