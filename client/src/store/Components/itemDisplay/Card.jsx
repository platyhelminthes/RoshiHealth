import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 325,
    minHeight: 500,
    maxHeight: 650,
    margin: '1vw 1vw 0 0',
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  let price = props.item.products[0].price
  let priceStr = price.toString()
   priceStr = priceStr.slice(0, -2)
   price = parseInt(priceStr)
  console.log(props.item.products)
  return (
    <div className={classes.card}>
        <div>
        <img className='cardImage' onClick={()=>{props.info(props.item.id)}} src={props.item.metadata.img}/>
        <h2>{props.item.name}</h2>
        <h2>* * * * *</h2>
        <h2>${price}.00</h2>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <Button onClick={()=>{props.info(props.item.id)}} style={{width: '250px', float: 'bottom'}} variant='outlined'>info</Button>
        <Button onClick={()=>{props.addToCart(props.item)}}style={{width: '250px', float: 'bottom'}} variant='outlined'>Add to cart</Button>
        </div>
        
    </div>
  );
}