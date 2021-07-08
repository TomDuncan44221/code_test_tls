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
      listStyle: 'number'
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
          Traduality Language Solutions LLC
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
       <Typography variant="h2" align="center" color="textPrimary" component="p">
          How to get started
        </Typography>
        <Typography variant="h5" align="left" color="textSecondary" component="p">
          <ol>
          <li>Head to the directory where you forked the code to. </li> <br/>
          <li>In that folder, locate the README.md file, follow the instructions and answer the questions </li><br/>
          <li>Once that's done, return here and use the header to navigate to the challenge you want to complete first</li> <br/>
          <li>After completing both the challenges, navigate to the Post-Test Questions.md in your directory and answer the contents</li> <br/>
          <li>Finally, push your completed project to your repo and send a link to that repository to your TLS contact for assessment</li> <br/>
          </ol>
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
