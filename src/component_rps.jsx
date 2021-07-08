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



export default function RPS() {
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
          Rock Paper Scissors
        </Typography>
        <Typography variant="h5" align="left" color="textSecondary" component="p">
          Create a new file called rps.js (or use another programming language if you so desire and have the tools. Just name the file so we can find it!). <br/>
          In this file, build and test the classic game Rock Paper Scissors. (If you need to, you can read about the game <a href="https://en.wikipedia.org/wiki/Rock_paper_scissors">here</a>.)<br/>
          <br/>
          The minimum requirements for this are: <br/>
          <ol>
              <li>The program must accept at least one argument from the player</li>
              <li>There must be at least 3 choices that include; rock, paper and scissors</li> 
              <li>There must be an opponent (examples: a rigged AI, a second input or a random number generator)</li>
              <li>The program must be capable of resolving the contest (be it fairly or unfairly)</li>
          </ol>
          <br/>
          <br/>
          Anything else you add is entirely optional and would assist us in assessing your capabilities. 
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
