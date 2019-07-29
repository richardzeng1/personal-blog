import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { withStyles } from '@material-ui/core/styles';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Container from '@material-ui/core/Container';

const styles = theme => ({

})

class About extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <div>
                <Container maxWidth="lg">
                    <Navbar/>
                    <h1>about</h1>
                </Container>

                <Footer/>
            </div>
        )
    }
}

export default withStyles(styles)(About);
