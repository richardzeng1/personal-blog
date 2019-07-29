import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Navbar from './components/navbar';
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
    }
})

class Sponsor extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <div>
                <Container maxWidth="lg">
                    <Navbar/>

                    <div className={classes.content}>
                        <LazyLoadImage
                        src="https://www.marylandzoo.org/wp-content/uploads/2014/02/Main-Penguin-Holding.jpg"
                        width={"75%"}
                        className={classes.image}
                        effect="blur"/>

                        <Typography variant="h4" gutterBottom>
                            Thank You for the Support
                        </Typography>

                        <Typography variant="body1" gutterBottom>
                            I haven't had time to implement this page so please check back at a later time.
                        </Typography>
                    </div>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(Sponsor);
