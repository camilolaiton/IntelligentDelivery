import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import orange from '@material-ui/core/colors/orange';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://github.com/camilolaiton">
          Intelligent Delivery
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    textAlign:'center',
    backgroundColor:
      theme.palette.type === 'light' ? orange[50] : orange[500],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="overline" >Porque tus sueños también pueden ir en una caja.</Typography>
        <Copyright />
      </Container>
    </footer>
  );
}