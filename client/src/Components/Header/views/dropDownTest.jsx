import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

import AddIcon from '@material-ui/icons/Add';

const StyledMenu = withStyles({
  paper: {
    border: '0',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: 'none',
      '& .MuiListItemIcon-root, & .MuiListItemText-none': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus(openModal) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{color: 'white', marginTop: '1vh'}}
      >
        <AddIcon style={{fontSize: '15px'}}/> Add money?
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText onClick={this.openModal} primary="50$" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText onClick={this.openModal} primary="100$" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText onClick={this.openModal} primary="200$" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}