import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Ads from './ads'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Ads/>
      <div style={{borderLeft: '2px solid #f5f5f5',borderRight: '2px solid #f5f5f5' , display: 'flex', height: '70px'}}>
        {/* <Toolbar style={{height: '100%', justifyContent: 'space-between'}}> */}
          <Link style={{textDecoration:'none', color: 'black'}} to='/store'>
            <Typography style={{paddingLeft: '20px', paddingTop: '20px'}} variant="h6">
            Roshi Health
          </Typography>
          </Link>
          <div className='shop-Categories'>
          <button style={{height: '100%'}} onClick={()=>{props.getProducts()}} className='shop-Category-Buttons'>All
              </button>
              <button onClick={()=>{props.getProducts('wearable')}} className='shop-Category-Buttons'>Wearable
              </button>
              <button onClick={()=>{props.getProducts('food')}} className='shop-Category-Buttons'>Food
              </button>
              <button onClick={()=>{props.getProducts('health')}} className='shop-Category-Buttons'>Health
              </button>
              <button onClick={()=>{props.getProducts('protein')}} className='shop-Category-Buttons'>Protein
              </button>
          </div>
          <Button onClick={props.openCart} color="inherit">Cart</Button>
          <Button color="inherit">Login</Button>
        {/* </Toolbar> */}
      </div>
    </div>
  );
}