import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(() => ({
  paper: {
    paddingBottom: 50,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Grid direction="column" justify="center" alignItems="center" container spacing={1}>
              <Grid item xs>
                <Typography>&copy; Copyright : 2021 Sherwin Roger </Typography>
              </Grid>
          </Grid>
          <Grid direction="row" justify="center" alignItems="center" container spacing={1}>
              <Grid item xs>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<LinkedInIcon/>}
                ><a href="https://www.linkedin.com/in/sherwin-roger-9863b31b6">LinkedIn</a>
                </Button>
              </Grid>
              <Grid item xs>
              <Button
                variant="contained"
                color="primary"
                endIcon={<MailIcon/>}
                ><a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=sherwinroger02@gmail.com">Email</a>
              </Button>
              </Grid>
          </Grid>


        </Toolbar>
      </AppBar>
  );
}
