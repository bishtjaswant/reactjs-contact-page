import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';
import RightBoxInfo from './components/RightBoxInfo';
import { makeStyles } from '@material-ui/core/styles';
import LeftBoxInfo from './components/LeftBoxInfo';


const useStyles= makeStyles((theme)=>({
  root:{},
  subtitle:{
    color:theme.palette.grey[400]
  },
}));


function App() {
  const classes=useStyles();

  return (
    <>
    <CssBaseline/>
      <Container maxWidth="lg" >

        <Box  my="68" boxShadow={12}>
          <Grid container justify="center" >
            <Grid item md={12}>

              <Box mb={6}>
              <Typography variant="h3"  align="center">Contact us</Typography>
              <Typography variant="subtitle1" className={classes.subtitle} align="center">Any question or remarks? just write us a message</Typography>
        
              </Box>
               </Grid>


            <Grid item md={5}>
              <LeftBoxInfo/>
            </Grid>
            <Grid item md={7}>
               <RightBoxInfo></RightBoxInfo>

            </Grid>


          </Grid>
        </Box>

      </Container>
    </>
  );
}

export default App;
