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
    padding: "3vw 2.5vw 3.5vw",
  },
  ftxt: {
    textAlign: "center",
    marginTop: "2vw",
    color: "#828282",
    fontSize: "1.8vw",
    "& p": {
      margin: "0",
    },
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img src={logoF} alt="" width="180" />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.ftxt}>
            <p>
              사업자번호 : 106-81-99019 &nbsp; 주소 : 서울특별시 용산구 원효로
              77길 10 엠케이빌딩 2층 &nbsp; 대표자명 : 송석현
            </p>
            <p>
              TEL : 02-714-8026 &nbsp; FAX : 02-706-8025 &nbsp; 이메일 :
              info@bizvalley.co.kr
            </p>
            <p class="fs12">
              Copyrights ⓒ 2017 All Rights Reserved. Designed By bizvalley.
            </p>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
