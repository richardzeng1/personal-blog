import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    content:{
        marginTop:"30px",
        marginBottom:"30px"
    },

    image:{
        marginTop:"15px",
        marginBottom:"15px"
    },

    text:{
        marginTop:"25px",
    }
})

class Blogs extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <div>
                <Container maxWidth="lg">
                    <Navbar/>

                    <div className={classes.content}>
                        <LazyLoadImage
                        src="https://i.imgur.com/UPXUVLK.jpg"
                        width={"80%"}
                        className={classes.image}
                        effect="blur"/>

                        <Typography variant="h4" gutterBottom>
                            My Failed Presentation
                        </Typography>

                        <Typography variant="h6" gutterBottom>
                            Let's talk about my shit presentation to the entire engineering department where I work
                        </Typography>

                        <Typography varian="subtitle1" color="textSecondary" gutterBottom>
                            July 2019
                        </Typography>

                        <div className={classes.text}>
                            <Typography varian="subtitle1" color="textSecondary">
                                July 2019
                            </Typography>
                        </div>
                    </div>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default withStyles(styles)(Blogs);
