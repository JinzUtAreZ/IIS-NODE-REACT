import React, { Component, Fragment } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

class MenuButton extends Component {
  state = {
    anchorEl: null
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    //const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const Wrapper = this.props.iconType;
    const NavName = this.props.NavName;
    const listItems = this.props.items.map((link, index) => (
      <MenuItem key={index} onClick={this.handleClose}>
        {link}
      </MenuItem>
    ));

    return (
      <Fragment>
        <Button
          aria-owns={open ? 'menu-appbar' : null}
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary"
          onClick={this.handleMenu}
        >
          {NavName}
          {<Wrapper />}
        </Button>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={open}
          onClose={this.handleClose}
        >
          {listItems}
        </Menu>
      </Fragment>
    );
  }
}

export default MenuButton;
