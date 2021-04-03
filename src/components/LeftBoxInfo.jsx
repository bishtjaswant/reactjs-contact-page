import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import MailIcon from '@material-ui/icons/Mail';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';

const useSyles = makeStyles((theme) => ({

    box: {
        background: "#311b92",
        width: "90%",
        height: "90%",
        margin: "0 auto",
        padding: "0px",
        position: "relative",
    },
    typo: {
        color: "#fff",
        paddingTop: "20px"
    },
    svg: {
        position: 'absolute',
        bottom: "-116px",
        zIndex: '2',
    },
    msg: {
        color: grey[400],
        fontSize: "18px",
    },
    div: {
        width: "90%",
        margin: "0 auto"
    },

    mini: {
        color: "#fff",
        display: "flex", margin: "20px 0 5px 0"
    },
    social: {
        position: "absolute",
        bottom: "0",
        left: "44px",
        zIndex: 1,
        //  border: "4px solid",
        height: "40px",
        width: "90%",
        margin:"0 auto",
        display: 'flex',
        justifycontent: "center",
        alignItems: 'center',
    }

}));

const LeftBoxInfo = () => {
    let classes = useSyles();
    return (
        <Box boxShadow={12} borderRadius={12} p={0} m={0} className={classes.box}>
            <div className={classes.div}>
                <Typography className={classes.typo} variant="h4"> Contact Infomation </Typography>
                <Typography variant='h6' className={classes.msg}>Fill the form and  our team get back  to you within 24 hours</Typography>

                <Container>
                    <Container className={classes.mini} >
                        <div className="">
                            <PhoneIcon color="secondary" />
                        </div>
                        <Typography style={{ marginLeft: "23px" }}>+91 9784537666</Typography>
                    </Container>


                    <Container className={classes.mini} >
                        <div className="">
                            <MailIcon color='secondary' />
                        </div>
                        <Typography style={{ marginLeft: "23px" }}> hello@flowbase.com </Typography>
                    </Container>



                    <Container className={classes.mini} >
                        <div className="">
                            <RoomIcon color="secondary" />
                        </div>
                        <Typography style={{ marginLeft: "23px" }}>102 Street 2714 Don </Typography>
                    </Container>
                </Container>

            </div>
            <div className={classes.social}>
            <i style={{padding:"0 12px ", color:"#f50057"}} className="fab fa-2x fa-facebook-f"></i>
            <i style={{padding:"0 12px ", color:"#f50057"}} className="fab fa-2x fa-instagram"></i>
            <i style={{padding:"0 12px ", color:"#f50057"}} className="fab fa-2x fa-linkedin-in"></i>
            <i style={{padding:"0 12px ", color:"#f50057"}} className="fab fa-2x fa-youtube"></i>
            <i style={{padding:"0 12px ", color:"#f50057"}} className="fab fa-2x fa-twitter"></i>
            <i style={{padding:"0 12px ", color:"#f50057"}} className="fab fa-2x fa-git-alt"></i>
                </div>
            <svg style={{ position: "absolute", bottom: "-153px", left: "0" }} height="100%" width="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,166 0,166 C 67.4937407952872,189.76969808541975 134.9874815905744,213.53939617083947 194,195 C 253.0125184094256,176.46060382916053 303.5438144329897,115.61211340206187 360,112 C 416.4561855670103,108.38788659793813 478.8372606774668,162.01215022091307 548,184 C 617.1627393225332,205.98784977908693 693.1071428571429,196.33928571428572 745,184 C 796.8928571428571,171.66071428571428 824.7341678939617,156.63070692194404 876,156 C 927.2658321060383,155.36929307805596 1001.9561855670104,169.13788659793812 1075,162 C 1148.0438144329896,154.86211340206188 1219.4410898379972,126.81774668630338 1280,124 C 1340.5589101620028,121.18225331369662 1390.2794550810013,143.5911266568483 1440,166 C 1440,166 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#0693e388" class="transition-all duration-300 ease-in-out delay-150"></path><path d="M 0,500 C 0,500 0,333 0,333 C 51.53387334315168,364.7875552282769 103.06774668630337,396.5751104565538 169,385 C 234.93225331369663,373.4248895434462 315.2628865979381,318.4871134020619 372,298 C 428.7371134020619,277.5128865979381 461.8807069219441,291.4764359351988 521,290 C 580.1192930780559,288.5235640648012 665.2142857142857,271.60714285714283 730,293 C 794.7857142857143,314.39285714285717 839.2621502209131,374.09499263622973 900,375 C 960.7378497790869,375.90500736377027 1037.7371134020616,318.0128865979381 1093,318 C 1148.2628865979384,317.9871134020619 1181.7893961708396,375.8534609720177 1236,388 C 1290.2106038291604,400.1465390279823 1365.1053019145802,366.57326951399114 1440,333 C 1440,333 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#0693e3ff" class="transition-all duration-300 ease-in-out delay-150"></path></svg>
        </Box>

    );
};

export default LeftBoxInfo;