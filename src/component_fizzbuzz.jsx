import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/TomDuncan44221">
        TJDuncan
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      marginLeft: 30,
      marginTop: 0,
      padding: 0,
      listStyle: 'disc',
    },
    ol: {
      listStyle: 'lower-roman'
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  link2: {
    margin: 0
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));



export default function FizzBuzz() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          Traduality Language Solutions Inc
          </Typography>
          <nav>
          <Link variant="button" color="textPrimary" href="/" className={classes.link}>
              Home
            </Link>
          <Link variant="button" color="textPrimary"  href="GetStarted" className={classes.link}>
              Get Started 
            </Link>
            <Link variant="button" color="textPrimary"  href="FizzBuzz" className={classes.link}>
              FizzBuzz
            </Link>
            <Link variant="button" color="textPrimary" href="RPS" className={classes.link}>
              RPS
            </Link>
                      </nav>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Classic FizzBuzz
        </Typography>
        <Typography variant="h5" align="left" color="textSecondary" component="p">
        If this isn't your first coding test, you've probably encountered FizzBuzz before or (perhaps it appeared when you were in school). If you haven't, you can learn more <a href="https://en.wikipedia.org/wiki/Fizz_buzz"> here</a>.
        <br/>
        <br/>
        You have been given a broken FizzBuzz program (fizzbuzz.js) and the task is to fix and improve it  <br/>
        The main goals here are to ensure the following: <br/>
        <ol>
          <li> Ensure numbers divisible by 3 print "Fizz" </li>
          <li> Ensure numbers divisible by 5 print "Buzz"</li>
          <li> Ensure numbers divisible by both 3 and 5 print "FizzBuzz" instead </li>
          <li> Ensure any other numbers are just printed as normal</li> 
        </ol>
        <br/>
        </Typography>
      </Container>
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
