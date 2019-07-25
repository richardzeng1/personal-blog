import React from 'react';
import Navbar from './components/navbar';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { withStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import image from "../public/background.png"

const styles = theme => ({
    coverImage:{
        height:50,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
      position: 'relative',
      padding: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(8),
        paddingRight: 0,
      },
    },
    coverImage:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    coverImageParent:{
        position:'relative',
    },
    coverImageText:{
        color: "#FFFFFF"
    }
})

class Home extends React.Component{
    render(){
        const {classes} = this.props;
        return (
            <div className="App">
            <Container maxWidth="lg">
                <Navbar/>
                    <div className={classes.coverImageParent}>
                        <LazyLoadImage
                        src={image}
                        width={"100%"}
                        height={"100%"}
                        className={classes.coverImage}/>

                        <Grid container>
                          <Grid item md={6}>
                            <div className={classes.mainFeaturedPostContent}>
                              <Typography component="h1" variant="h3" className={classes.coverImageText} gutterBottom>
                                Noob Programs Stuff
                              </Typography>
                              <Typography variant="h5" className={classes.coverImageText} paragraph>
                                Watch me break stuff and learn the hard way so you don't have to
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                    </div>
                <h1>hello</h1>
            </Container>
            </div>
        );
    }
}

export default withStyles(styles)(Home);
