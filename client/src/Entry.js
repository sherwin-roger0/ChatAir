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
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import Footer from "./footer"
import {Authenticate} from "./authentication"
import CircularProgress from '@material-ui/core/CircularProgress';
import {Link} from "react-router-dom";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);



function Entry(){
  const [portal, setPortal] = React.useState(false);

  const handleClickOpen = () => {
    setPortal(true);
  };
  const handleClose = () => {
    setLoading(false);
    setPortal(false);
  };

  function CustomizedDialogs() {
    return (
      <div>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={portal}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            <Typography variant="h5" gutterBottom color="primary">ChatAir</Typography>
          </DialogTitle>
          <DialogContent dividers>
            <Typography color="secondary" gutterBottom>
              Keep the chat clean and Don't share the password to anyone if any Unwanted activities Detected You will be Banned from the Chat ....<br />
              Click on the below Button to enter the chat
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button href="/chat" variant="contained" autoFocus color="primary">
              Enter ChatAir
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  const emailRef = useRef("")
  const passRef = useRef("")
  const[message,setMessage]=useState("");
  const[open,setOpen]=useState();
  const[loading,setLoading]=useState(false);

  function CustomizedSnackbars() {
      return (
        <div>
          <br />
          <Alert severity="error">{message}</Alert>
          <br />
        </div>
      );
  }

  const {signin} = Authenticate();

  async function handleSubmit(event){
    event.preventDefault();
    try {
      setLoading(true);
      await signin(emailRef.current.value,passRef.current.value);
      window.localStorage.setItem('name', emailRef.current.value);
      setOpen(false);
      handleClickOpen();
    } catch (error) {
      setLoading(false);
      setMessage(error.message)
      console.log(error.message)
      setOpen(true)
    }
  }

  return(
    <div>
      <ThemeProvider theme={theme}>
        <Nav True={true} link="/login" name="login"/>
       <React.Fragment>
         <CssBaseline />
           <Container fixed>
             <Grid direction="column" justify="center" alignItems="center" container spacing={1}>
               <Grid item xs>
                 <Typography color="secondary" style={{ width: '100%',maxWidth: 500,padding:"5px"}}  align="center" variant="h4" gutterBottom>
                   <br />
                   Hello Welcome to Chat Air
                 </Typography>
                 <Typography color="secondary" style={{width: '100%',maxWidth: 500,padding:"1px"}}  align="center" variant="h6" gutterBottom>
                   Sign up to get into the Chat room
                 </Typography>
               </Grid>
              {open ? CustomizedSnackbars() : null}
              <CustomizedDialogs/>
             </Grid>
             <Grid direction="column" justify="center" alignItems="center" container spacing={1}>
              <Grid direction="column" justify="center" alignItems="center" container spacing={1}>{loading ? <CircularProgress/> : null}</Grid>
              <Grid item xs>
                    <form onSubmit={handleSubmit}>
                      <Grid direction="column" justify="center" alignItems="center" container spacing={1}>
                        <Grid item xs>
                          <TextField inputRef={emailRef} variant="outlined" type="email"  color="primary" label="email" required/>
                          <br />
                        </Grid>
                        <Grid item xs>
                          <br />
                          <TextField inputRef={passRef} variant="outlined" type="password"  color="primary" label="password" required/>
                          <br />
                        </Grid>
                        <Grid item xs>
                          <br />
                          <Button type="submit" variant="contained" color="primary" >enter</Button>
                          <br />     
                        </Grid>
                        <Grid item xs>
                            <br />
                            Already have an account ? <Link style={{color:"purple"}} to="/login">Login</Link>
                            <br />
                            <br />
                            <br />
                        </Grid>
                      </Grid>
                    </form>
              </Grid>
             </Grid>
             <Footer/>
            </Container>
        </React.Fragment>
      </ThemeProvider>
    </div>
  )
}

export default Entry;
