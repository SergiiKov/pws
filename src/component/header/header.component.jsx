import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';


import logo from '../../img/logo.png';

const useStyles = makeStyles(theme => ({
  // tabContainer: {
  //   marginLeft: 'auto'
  // },
  // tab:{
  //   ...theme.typography.tab,
  //   textTransform: 'uppercase',
  //   minWidth:10,
  //   marginLeft:'10px',
  //   paddingLeft: '20px',
  //   paddingRight: '20px',
  //   '&:hover': {
  //     opacity: 0.9
  //   }
  // },
  iconButton: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent'
    }},
    drawer: {
     backgroundColor: '#29b6f6',
     marginTop: '50px'
    },
    drawerItem: {
      ...theme.typography.tab,
      color: 'white',
      marginTop:'10px',
      opacity: 0.7
    },
    drawerItemSelected: {
      opacity:1
    },
    drawerButton:{
    marginTop:'20px',
    marginLeft: '10px',
    marginRight: '10px',
  },
    appBar: {
      zIndex: theme.zIndex.modal + 1
    }
    
}));


export default function Header(checked1, onChange1) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  };

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer 
         disableBackdropTransition={!iOS} 
         disableDiscovery={iOS} 
         open={openDrawer} 
         onClose={()=>setOpenDrawer(false)}
         onOpen={()=>setOpenDrawer(true)}
         classes={{paper: classes.drawer}}
      > 
      <div className={classes.toolbarMargin} />
     
      <List disablePadding>
  
                  <ListItem divider button selected={value===0} onClick={()=>{setOpenDrawer(false); setValue(0) }} component={Link} to='/about'  >
                      <ListItemText className={value === 0 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}>
                      About
                      </ListItemText>
                  </ListItem>
                  <ListItem divider button selected={value===1} onClick={()=>{setOpenDrawer(false); setValue(1) }} component={Link} to='/resume'  >
                      <ListItemText className={value === 1 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}>
                      Resume
                      </ListItemText>
                  </ListItem>
                  <ListItem divider button selected={value===2} onClick={()=>{setOpenDrawer(false); setValue(2) }} component={Link} to='/projects'  >
                      <ListItemText className={value === 2 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}>
                      Projects
                      </ListItemText>
                  </ListItem>
                  <ListItem divider button selected={value===3} onClick={()=>{setOpenDrawer(false); setValue(3) }} component={Link} to='/contact'  >
                      <ListItemText className={value === 3 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}>
                      Contact
                      </ListItemText>
                  </ListItem>
              </List>    
          <Button variant="contained" color="secondary" className={classes.drawerButton} href='https://github.com/SergiiKov/pws'>Sourse</Button>
      </SwipeableDrawer>
        <IconButton onClick={()=>setOpenDrawer(!openDrawer)} className={classes.iconButton}>
            <MenuIcon />
        </IconButton>
    </React.Fragment>
  )

  const tabs = (
    <React.Fragment>
      <div className='header_nav'>
    <div className="logo-container">
    <Link to='/'>
      <div ><img src={logo} className='logo' alt="Logo" /></div>
    </Link>
    </div>
    <div className='nav'>
    <div className="nav__item">
      <Link className='nav__link' to='/about'>
        About
      </Link>
      </div>
      <div className="nav__item">
      <Link className='nav__link' to='/resume'>
        Resume
      </Link>
      </div>
      <div className="nav__item">
      <Link className='nav__link' to='/projects'>
        Projects
      </Link>
      </div>
      <div className='nav__item'>
      <Link className='nav__link' to='/contact'>
        Contact
      </Link>
      </div>

      </div> 
 </div>
    </React.Fragment>
  )

  return(
   <React.Fragment>
         <div className='header_nav'>
    <div className="logo-container">
    <Link to='/'>
      <div ><img src={logo} className='logo' alt="Logo" /></div>
    </Link>
    </div>
    { matches ? drawer : tabs}
    </div>
      
   </React.Fragment>
    

  );
}

