import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    }
})

class Navbar extends React.Component{
    constructor(props){
        super(props);

    }
    navigateTo(page){
        console.log(page)
    }

    render(){
        const {classes} = this.props;
        return (
            <div>
            <CssBaseline />
                <Toolbar className={classes.toolbar}>
                    <Typography
                    component="h2"
                    variant="h4"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}>
                        test
                    </Typography>
                </Toolbar>

                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                    <Link
                    color="inherit"
                    noWrap
                    variant="h6"
                    href="#"
                    className={classes.toolbarLink}>
                    Hello</Link>

                    <Link
                    color="inherit"
                    noWrap
                    variant="h6"
                    href="#"
                    className={classes.toolbarLink}>
                    Hello</Link>

                    <Link
                    color="inherit"
                    noWrap
                    variant="h6"
                    href="#"
                    className={classes.toolbarLink}>
                    Hello</Link>
                </Toolbar>
            </div>
        )
    }
}

export default withStyles(styles)(Navbar);
