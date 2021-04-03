import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {},
    marginal: {
        margin: '15px 0',
    },
    fullwidth: {
        width: "80%"
    },
    btn:{
    margin: "22px 0",
    background:"#311b92",
    }
}))

const RightBoxInfo = () => {

    const classes = useStyles();

    const [selectedValue, setSelectedValue] = useState('web');

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
        console.log(e.target.value);
    }

    return (
        <>
            <form action="" method="post">
                <Grid container>
                    <Grid className={classes.marginal} item lg={6}>
                        <TextField label='First Name'></TextField>
                    </Grid>

                    <Grid className={classes.marginal} item lg={6}>
                        <TextField label='Last Name'></TextField>
                    </Grid>


                    <Grid item className={classes.marginal} lg={6}>
                        <TextField label='Mail'></TextField>
                    </Grid>
                    <Grid item className={classes.marginal} lg={6}>
                        <TextField label='Phone'></TextField>
                    </Grid>


                    <Grid  container>
                        <Typography  className={classes.marginal} variant="h6">What  the of website do you need ? </Typography>
                        <Grid  item={true} lg={12}>


                            <RadioGroup value={selectedValue} onChange={handleChange} row>

                                <FormControlLabel value="design" name='web' control={<Radio color="primary" />} label="web design" />

                                <FormControlLabel value="web" name='web' control={<Radio color="primary" />} label="web development" />


                                <FormControlLabel value="logo" name='web' control={<Radio color="primary" />} label="Logo design " />


                                <FormControlLabel value="other" name='web' control={<Radio color="primary" />} label="Other" />



                            </RadioGroup>


                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item className={classes.marginal} lg={12}>
                            <Typography variant='subtitle2' >Message</Typography>
                            <TextField className={classes.fullwidth} label="Write a Message"></TextField>
                        </Grid>
                    </Grid>



                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="flex-end"
                        className={classes.fullwidth}
                    >             
                    
                           <Button variant="contained" className={classes.btn} color="primary">Send Message</Button>


                    </Grid>

                </Grid>
            </form>
        </>
    );
};

export default RightBoxInfo;