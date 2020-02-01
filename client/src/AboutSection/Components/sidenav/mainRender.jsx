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
        <Box textAlign='center' p={2} borderBottom='1px solid black' items><Link to='/about/philosophy'>Philosophy</Link></Box>
        <Box textAlign='center' p={2} borderBottom='1px solid black' items><Link>Our Program</Link></Box>
        <Box textAlign='center' p={2} borderBottom='1px solid black' items><Link>How It Works</Link></Box>
        <Box textAlign='center' p={2} borderBottom='1px solid black' items><Link>Features</Link></Box>
        <Box textAlign='center' p={2} borderBottom='1px solid black' items><Link>Get Started</Link></Box>
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