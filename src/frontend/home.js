import React from 'react';
import Navbar from './components/navbar';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { withStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image'

import image from "../public/background.png"

const styles = theme => ({
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    coverImage:{
        height:50,
    },
})

class Home extends React.Component{
    render(){
        const {classes} = this.props;
        return (
            <div className="App">
            <Container maxWidth="lg">
                <Navbar/>
                    <LazyLoadImage
                    src={image}
                    width={"100%"}/>
                <h1>hello</h1>
            </Container>
            </div>
        );
    }
}

export default withStyles(styles)(Home);
