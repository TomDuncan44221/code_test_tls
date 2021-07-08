import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
//import StarIcon from '@material-ui/icons/StarBorder';
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



export default function Home() {
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
          Welcome!
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
        Hello! Welcome to the coding test for Traduality Language Solutions LLC <br/>
<br/>
        Before we begin, let's outline what to expect from this test, direct you to the preliminary questions and see if we can get to know you and how you code. <br/>
<br/>
</Typography>
<Typography variant="h5" align="left" color="textSecondary" component="p">
        1) This test can be run timed or untimed, but I'd estimate it'll take 45 minutes <br/>
        2) This is a general coding test that will be looking for the following skills sets: <br/>
            <ol> 
            <li>Critical Thinking / Problem Solving</li>
            <li>Ability to: </li>
              <ul>
                <li> read anothers code; </li>
                <li> refactor code; </li>
                <li> write code; </li>
                <li> test code; </li>
                <li> spot errors, bugs, risks or problems; </li>
                <li> produce and maintain clean code; </li>
              </ul>
            <li> Programming Language Capability </li>
            </ol>
        3) There are no right or wrong answers to the questions, they are simply to find out more about you and your experiences! <br/>
        4) You are free to amend, reorganise, delete, add or otherwise tinker with the code - as long as it produces the end result! <br/>
        </Typography>
        <br/>
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
