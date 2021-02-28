import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import logo from '../../images/common/logo.png';
import Lnblist from './lnb/Lnblist';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  wrap: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#d13030',
  },
  fabButton: {
    marginLeft: '12px',
    width: '35px',
    height: '35px',
    backgroundColor: '#fff',
    color: '#d13030',
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar disableGutters className={classes.wrap}>
          <Fab color="inherit" aria-label="add" className={classes.fabButton}>
            <MailOutlineIcon />
          </Fab>

          <img src={logo} alt="" width="140" />

          <Lnblist />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
