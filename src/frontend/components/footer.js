import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { withStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Button from "@material-ui/core/Button"

const styles = theme => ({
    styling:{
        backgroundColor: "#F6F6F6",
        paddingTop:"25px",
        paddingBottom:"25px",
    }
})

class Footer extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.styling}>
                <Grid container>
                    <Grid item sm={2}></Grid>
                    <Grid item sm={8}>
                        <Typography variant="h6" gutterBottom>
                            Sponsor me
                        </Typography>

                        <Button color="primary">
                            <Typography variant="h8">
                                Help sponsor me so I don't need to do consulting
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item sm={2}></Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Footer);
