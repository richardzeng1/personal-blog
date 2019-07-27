import React from 'react';
import Navbar from './components/navbar';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { withStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import image from "../public/background.png"
import 'react-lazy-load-image-component/src/effects/blur.css';

const styles = theme => ({

})

class Footer extends React.Component{
    render(){
        return(
            <div>
                <Grid container>
                    <Grid item></Grid>
                    <Grid item >
                    <Grid>
                    <Grid item></Grid>
                <Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Footer);
