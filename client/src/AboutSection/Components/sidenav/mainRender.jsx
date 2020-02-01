import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, Box, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >  
    <Grid container direction='column'>
        <Typography>
        <Link to='/about/philosophy'><Box textAlign='center' p={2} borderBottom='1px solid black' items>Philosophy</Box></Link>
        <Link to='/about/ourProgram'><Box textAlign='center' p={2} borderBottom='1px solid black' items>Our Program</Box></Link>
        <Link to='/about/HowItWorks'><Box textAlign='center' p={2} borderBottom='1px solid black' items>How It Works</Box></Link>
        <Link to='/about/Features'><Box textAlign='center' p={2} borderBottom='1px solid black' items>Features</Box></Link>
        <Link to='/about/GetStarted'><Box textAlign='center' p={2} borderBottom='1px solid black' items>Get Started</Box></Link>
        </Typography>
    </Grid>
      
    </div>
  );


  return (
    <div style={{background: 'none'}} className='sideNavOpener'>
      <Button onClick={toggleDrawer('left', true)}><MenuIcon fontSize='large' style={{color: 'white'}}  /></Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}