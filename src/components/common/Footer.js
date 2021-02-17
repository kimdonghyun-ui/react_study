import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import logoF from "../../images/f_logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#2f2f2f",
    textAlign: "center",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img src={logoF} alt="" />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div>xs=12</div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
