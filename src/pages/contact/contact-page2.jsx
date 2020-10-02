import React from 'react';
import {useState} from 'react';
import axios from 'axios';

import LeftArea from  '../../component/left-area/left-area.component';



import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    contactPage:{
      marginTop: '20px',
      marginBottom: '20px'
    },
    textField:{
      border:`2px solid ${theme.palette.common.blue}`,
      marginTop:'2em',
      borderRadius: 5,
      width:'240px'
    },
    sendButton: {
      marginTop:'2em',
      minWidth: '150px'
    },
    widthForm:{
      width:'240px'
    },
    cardContent:{
      paddingLeft:'4em', 
      paddingRight:'4em',
      [theme.breakpoints.down("md")]: {
        paddingLeft:'1em', 
      paddingRight:'1em'
      },
      [theme.breakpoints.down("xs")]: {
        paddingLeft:'1em', 
        paddingRight:'1em'
      }
    }

  }));
  
  export default function Contact2() {
    const classes = useStyles();
    const theme= useTheme(); 

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [emailHelper, setEmailHelper] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneHelper, setPhoneHelper] = useState('');

    const [message,setMessage] = useState('');

    const [loading, setLoading] = React.useState(false);
    const [alert, setAlert] =  React.useState({message: '', backgroundColor: ''});
    const [alertMessage, setAlertMesssage] = useState("");

    const onChange = event => {
        let valid;
    
        switch (event.target.id) {
          case "email":
            setEmail(event.target.value);
            valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
              event.target.value
            );
    
            if (!valid) {
              setEmailHelper("Invalid email");
            } else {
              setEmailHelper("");
            }
            break;
          case "phone":
            setPhone(event.target.value);
            valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
              event.target.value
            );
    
            if (!valid) {
              setPhoneHelper("Invalid phone");
            } else {
              setPhoneHelper("");
            }
            break;
          default:
            break;
        }
      };

  const onConfirm = () =>{
    setLoading(true);
    axios.get('https://us-central1-material-ui-5daa2.cloudfunctions.net/sendMail', 
    {params: {
      name: name,
      email: email,
      phone: phone,
      message: message
    }}
    )
    .then(res =>{
      setLoading(false);
      setName('');
      setEmail('');
      setPhone('');
      setMessage("");
        setAlert({ open: true, color: "#4BB543" });
        setAlertMesssage("Message sent successfully!");

    })
    .catch(err =>{setLoading(false); 
      setAlert({message: "sonting wrong", backgroundColor:'#FF3232' })
      setAlertMesssage("Something went wrong! Please try again.");
      console.error(err); })
  };

  const buttonContent = (
    <React.Fragment>
      <SendIcon fontSize="small" style={{marginRight:'0.5em'}}/>Send Message 
    </React.Fragment>
  )

    return (
      <React.Fragment>
         <Grid container direction='row' className={classes.contactPage}>
              <Grid item container             
                    direction="column"
                    justify="center"
                    alignItems='center'
                    className={classes.contactPart}
              >                    
            <Grid item>
              <Grid container direction='column' justify="center" alignItems='center'>          
                <Grid item>
                     MY CONTACT
                </Grid>       
          <Card>
            <CardContent className={classes.cardContent}>
                  <Grid item container style={{marginTop:'1em'}}>
                      <Grid item>
                        <PhoneAndroidIcon style={{marginRight:'0.5em'}} />
                      </Grid>
                      <Grid item>
                        <Typography 
                        color='primary'>
                          <a   style={{color: theme.palette.common.blue, fontSize:'1rem'}} 
                          href='tel:0680030695'>+380680030695</a>
                        </Typography>
                      </Grid>
                  </Grid>
                <Grid item container style={{marginTop:'0.4em', marginBottom:'1em'}}>
                    <Grid item>
                    <MailOutlineIcon style={{marginRight:'0.5em'}} />
                    </Grid>
                    <Grid item>
                       <Typography 
                          variant='body1'><a 
                          style={{color: theme.palette.common.blue, fontSize:'1rem'}} 
                          href='mailto:sergiikovtun.vn@gmail.com'>sergiikovtun.vn@gmail.com</a>
                       </Typography>
                    </Grid>
                </Grid>
                <Grid item container direction='column' justify="center" alignItems='center'>
                    <Grid item>
                        <TextField 
                        variant="filled"
                        className={classes.widthForm}
                        label='Name'
                        id='name' 
                        value={name} 
                        onChange={(event)=> setName(event.target.value)} />
                    </Grid>
                    <Grid item>
                        <TextField  
                        variant="filled"                       
                        className={classes.widthForm}
                          label='Email' 
                          id='email' 
                          error={emailHelper.length !==0} 
                          helperText={emailHelper} 
                          value={email} 
                          onChange={onChange} />
                          
                    </Grid>
                    <Grid item>
                      <TextField 
                       variant="filled"
                      className={classes.widthForm}
                        label='Phone' 
                        id='phone' 
                        error={phoneHelper.length !==0} 
                        helperText={phoneHelper} 
                        value={phone} 
                        onChange={onChange} />
                    </Grid>
                </Grid>           
                <Grid item >
                    <TextField 
                      variant="filled"
                      className={classes.textField}
                      InputProps={{ disableUnderline: true }} 
                      multiline rows={8} 
                      id='message' 
                      value={message} 
                      onChange={(event)=> setMessage(event.target.value)} 
                    />                    
               
                </Grid>
                <Grid item container> 
                    <Button 
                    className={classes.sendButton}
                      variant="contained" color="secondary"
                      disabled={name.length===0 || message.length===0 || phoneHelper.length !==0 || emailHelper.length !==0 } 
                      onClick={onConfirm}>{loading ? <CircularProgress size={30}/> : buttonContent}
                    </Button>
                  </Grid>
          </CardContent>
            </Card>  
              </Grid>
            </Grid>
            </Grid>
            <Snackbar
              open={alert.open}
              ContentProps={{
                style: {
                  backgroundColor: alert.color
                }
              }}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              message={alertMessage}
              autoHideDuration={4000}
              onClose={() => setAlert(false)}
            />
        </Grid>   
      </React.Fragment>   
    );
  }
