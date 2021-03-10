import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import { Home, Book, AccountBox } from '@material-ui/icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

// const Navbar = () => {
export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleClick1(event) {
    setAnchorEl1(event.currentTarget);
  }

  function handleClose1() {
    setAnchorEl1(null);
  }

  return (
    <div>
      <AppBar color="primary" position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <List component="nav">
            <ListItem component="div">
              <ListItemText inset>
                <Home style={{ paddingTop: '8%' }} />
                <TypoGraphy color="inherit" variant="title">
                  Home
                </TypoGraphy>
              </ListItemText>

              <ListItemText inset>
                <TypoGraphy
                  color="inherit"
                  variant="title"
                  style={{ cursor: 'pointer' }}
                >
                  Posts <Book />
                </TypoGraphy>
              </ListItemText>

              <ListItemText inset>
                <TypoGraphy color="inherit" variant="title">
                  Contact <AccountBox />
                </TypoGraphy>
              </ListItemText>

              <ListItemText inset>
                <Button
                  style={{ color: 'white' }}
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  Open Menu <AccountBox />
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </ListItemText>

              <ListItemText inset>
                <Button
                  style={{ color: 'white' }}
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick1}
                >
                  Open Menu 1<AccountBox />
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl1}
                  keepMounted
                  open={Boolean(anchorEl1)}
                  onClose={handleClose1}
                >
                  <MenuItem onClick={handleClose1}>Test</MenuItem>
                  <MenuItem onClick={handleClose1}>Tumetest</MenuItem>
                  <MenuItem onClick={handleClose1}>Tinesting</MenuItem>
                </Menu>
              </ListItemText>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'TEST TUTORIAL',
  icon: 'fas fa-id-card-alt'
};

//export default Navbar;
