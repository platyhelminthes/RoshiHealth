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
    maxHeight:500,
    margin: '1vw 1vw 0 0',
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.card}>
        <div>
        <img className='cardImage' src={props.item.metadata.img}/>
        <h2>{props.item.name}</h2>
        <h2>* * * * *</h2>
        </div>
        <Button style={{width: '250px', float: 'bottom'}} variant='outlined'>Purchase</Button>
    </div>
  );
}