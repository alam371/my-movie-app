import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import Tile from './Tile';
import Form from './Form';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
        Your Website
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
</Typography>
);
}

const styles = theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
});

//const cards = [1, 2, 3, 4, 5, 6];

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            movies: []
        }
    }

    async componentDidMount(){
        const response = await fetch('/api/movies');
        const resp = await response.json()
        console.log(resp)
        this.setState({
            movies: resp.data
        })

    }

    // pushToTile = (id) => {
    //     this.props.history.push(`/movies/${id}`)
    // }

    render(){
        const { classes, history } = this.props;
        return (
            <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
            <Toolbar>
            <EmojiEmotionsIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
        Movie layout
        </Typography>
        </Toolbar>
        </AppBar>
        <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
            <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
        >
        Movie List
        </Typography>
        <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        paragraph
        >
        Films Watched
        </Typography>
        <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
            <Grid item>
        <Button
        variant="contained"
        color="primary"
        onClick={() => {history.push('/create')}}>
        Add a movie
        </Button>
        </Grid>
        </Grid>
        </div>
        </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>

            {this.state.movies.map(movie => (
                    <Grid item key={movie._id} xs={12} sm={6} md={4}>
                <Tile
                id={movie._id}
                title={movie.title}
                subtitle={movie.director}
                comment={movie.comment}
                plot={movie.plot}
                pushToTile={this.pushToTile}
                />
        </Grid>
    ))}
    </Grid>
    </Container>
        </main>
        {/* Footer */}
    <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
        Footer
        </Typography>
        <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
            >
            Something here to give the footer a purpose!
        </Typography>
        <Copyright />
        </footer>
        {/* End footer */}
    </React.Fragment>
    );
    }
}

export default withStyles(styles)(Dashboard);