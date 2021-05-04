import {useState,useEffect} from "react";
import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import axios from  "axios"
import {
  ThemeProvider,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {useHistory} from "react-router"
import theme from './color';
import Footer from "./footer";
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { auth } from "./firebase";
import ChatIcon from '@material-ui/icons/Chat';
import Nav from "./Nav";

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

function Chat(){
  const classes = useStyles();
  const email=window.localStorage.getItem('name')
  const nam = email.replace("@gmail.com","");
  const word = nam.charAt(0)
  const[chat,setChat]=useState("");  
  const[state,setState] = useState("");
  const [call,setCall] = useState(3000);
  useEffect(() => {
    const interval = setInterval(() => {
      fetchUser()
    }, call);
    return () => clearInterval(interval);
  });

  function fetchUser(){
      axios.get('/f')
       .then((response) => {
         const data = response.data;
         setState(data);
         console.log('Data has been received!!',state);
       })
       .catch(() => {
         alert('Error retrieving data!!!');
       });
  }

  function GetChats(){
    const it=state
    if (!it.length) return null;
    return (
      <div>
       <div id="up"></div>
       <Grid direction="column" justify="center" alignItems="center" container spacing={1}>
        <Grid item xs>
          <Button href="#bottom" variant="contained" color="primary"><ExpandMoreIcon/></Button>
        </Grid>
       </Grid>
        {it.map((chat,index) => (
          <Grid item xs>
           <Card style={{margin: "10px",padding: "0"}}>
            <CardHeader avatar={<Avatar style={{paddingLeft:"1px"}}>{chat.profile}</Avatar>}/>
            <CardContent>
              <Typography color="primary"  align="center" variant="caption" >{chat.name}</Typography><br />
              <Typography color="secondary"  align="center" variant="overline" >{chat.chat}</Typography>
            </CardContent>
            </Card>
          </Grid>
      ))}
      <Grid direction="column" justify="center" alignItems="center" container spacing={1}>
       <Grid item xs>
         <Button href="#up" variant="contained" color="primary"><ExpandLessIcon/></Button>
       </Grid>
      </Grid>
      <div id="bottom"></div>
    </div>
    )
  }

  function handleChat(event){
    setChat(event.target.value);
    console.log(event.target.value)
  }

  function submit(event){
    event.preventDefault();
    const payload ={
      profile: word,
      name: nam,
      chat : chat
    }
    console.log(payload);
    axios({
      url :"/",
      method: "POST",
      data: payload
    })
    .then(() => {
        setChat("")
        console.log('Data has been sent to the server');
        fetchUser();
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  }


  function ChatInput(){
    return(
      <Grid direction="row" justify="center" alignItems="center" container>
        <Grid item xl>
          <form noValidate>
            <TextField multiline value={chat} color="primary" onChange={handleChat}  label="Chat " />
          </form>
        </Grid>
        <Grid item xl>
              <Button
                onClick={submit}
                variant="contained"
                color="primary"
                endIcon={<SendIcon/>}
              >
              </Button>
        </Grid>
      </Grid>
   )
  }

  const history = useHistory()

  async function logout(){
    await auth.signOut();
    await window.localStorage.clear();
    history.push("/login");
  } 

  return (
    <div>
     <ThemeProvider theme={theme}>
      <Nav />
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
            <div>
              <Grid direction="column" justify="center" alignItems="center" container spacing={1}>
                <Grid item xs>
                  <Typography color="secondary" style={{ width: '100%',maxWidth: 500,padding:"5px"}}  align="center" variant="h4" gutterBottom>
                    <br />
                    Hello {nam} Welcome to ChatAir
                  </Typography>
                  <Typography color="secondary" style={{width: '100%',maxWidth: 500,padding:"1px"}}  align="center" variant="h6" gutterBottom>
                    Enter something in the chat field and start to chat
                  </Typography>
                </Grid>
              </Grid>
              <Grid direction="column" justify="center" alignItems="center" container spacing={1}>
                <Grid item xs>
                  {GetChats()}
                </Grid>
              </Grid>
              { ChatInput() }
              <br />
              <br />
              <br />
              <br />
            <br />
            <br />
            <br />
            <br />
            </div>
          <Footer/>
          </Container>
        </React.Fragment>
       </ThemeProvider>
      </div>
  )
}

export default Chat
