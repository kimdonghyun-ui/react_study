import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
//import Link from '@material-ui/core/Link';
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  sub_list_wrap: {
    backgroundColor: '#f6f6f6',
  },
  sub_item: {
    display: 'block',
    color: '#666',
  },
  Summary: {
    '& .Mui-expanded svg': {
      color: '#d13030',
    },
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion square style={{ margin: '0' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className={classes.Summary}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            className={classes.heading}
            variant="h6"
            style={{ fontWeight: 'bold' }}
          >
            브랜드 소개
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          classes={{
            root: classes.sub_list_wrap,
          }}
        >
          <Typography variant="body1">
            <Link
              href="/react_study"
              component={Button}
              className={classes.sub_item}
              variant="body1"
              gutterBottom
            >
              - 메인으로 가기
            </Link>
            <Link
              href="/page1"
              component={Button}
              className={classes.sub_item}
              variant="body1"
              gutterBottom
            >
              - 브랜드 스토리
            </Link>
            <Link
              href="/page1"
              component={Button}
              className={classes.sub_item}
              variant="body1"
              gutterBottom
            >
              - 브랜드 경쟁력
            </Link>
            <Link
              href="/page1"
              component={Button}
              className={classes.sub_item}
              variant="body1"
              gutterBottom
            >
              - 인테리어 컨셉
            </Link>
            <Link
              href="/page1"
              component={Button}
              className={classes.sub_item}
              variant="body1"
              gutterBottom
            >
              - 본사 안내
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square style={{ margin: '0' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className={classes.Summary}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            className={classes.heading}
            variant="h6"
            style={{ fontWeight: 'bold' }}
          >
            바른 메뉴
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          classes={{
            root: classes.sub_list_wrap,
          }}
        >
          <Typography variant="body1">
            <Link
              to="/menu"
              component={Button}
              className={classes.sub_item}
              variant="body1"
              gutterBottom
            >
              - 메뉴 보기
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
