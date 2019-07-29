import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { withStyles } from '@material-ui/core/styles';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from "react-markdown";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import github from '../public/github.png';
import linkedIn from '../public/linkedin-logo.png';
import post from '../public/markdowns/about';

const styles = theme => ({
    missionStatement:{
        marginTop: "50px",
        marginBottom: "50px"
    },

    textBlock:{
        marginTop: "20px",
        marginBottom: "20px"
    },

    coverImage:{
        height:"400px",
        overflow:"hidden"
    }
})

class About extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <div>
                <Container maxWidth="lg">
                    <Navbar/>

                    <div className={classes.coverImage}>
                        <LazyLoadImage
                        src="https://source.unsplash.com/user/erondu"
                        width={"100%"}
                        effect="blur"/>
                    </div>

                    <div className={classes.missionStatement}>

                        <Grid container className={classes.textBlock}>
                            <Grid item sm={3}></Grid>
                            <Grid item sm={6}>
                                <Typography variant="h4" gutterBottom>
                                    - The Mission -
                                </Typography>

                                <Typography variant="h6" gutterBottom>
                                    Learn from my mistakes
                                </Typography>

                                <Typography variant="body1" paragraph>
                                    <Markdown source={post}></Markdown>
                                </Typography>
                            </Grid>
                            <Grid item sm={3}></Grid>
                        </Grid>

                        <Divider/>

                        <Grid container className={classes.textBlock} spacing={3}>
                            <Grid item sm={6}>
                                <LazyLoadImage
                                src="https://cdn-2.returnofthecaferacers.com/wp-content/uploads/2018/03/bullitt-monster-821R-7-1-e1528087956742.jpg"
                                width={"100%"}
                                effect="blur"/>
                            </Grid>

                            <Grid item sm={6}>
                            <Typography variant="h4" gutterBottom>
                                Who Am I
                            </Typography>

                            <Typography variant="body1" gutterBottom>
                                I "graduated" with a computer science degree from a well known university. Well I'm about to. I'm pretty much done. I was a full stack developer and a
                                site reliability engineer. I've work for big companies, small companies and a university. I'm not your usual Silicon Valley developer and I hope
                                you guys gain something of value from me.
                            </Typography>
                            </Grid>
                        </Grid>

                        <Divider/>

                        <Grid container className={classes.textBlock} spacing={3}>

                            <Grid item sm={2}></Grid>
                            <Grid item sm={8}>
                                <Typography variant="h4" gutterBottom>
                                    Connect with me
                                </Typography>

                                <Button href="https://github.com/richardzeng1">
                                    <LazyLoadImage
                                    src={github}
                                    />
                                </Button>

                                <Button href="https://www.linkedin.com/in/richardzeng337/">
                                    <LazyLoadImage
                                    src={linkedIn}
                                    />
                                </Button>
                            </Grid>
                            <Grid item sm={2}></Grid>

                        </Grid>
                    </div>
                </Container>

                <Footer/>
            </div>
        )
    }
}

export default withStyles(styles)(About);
