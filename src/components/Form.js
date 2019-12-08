import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);


const useStyles = makeStyles(theme => ({
    content: {
        padding: theme.spacing(8, 0, 6),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    buttonField: {
        marginTop: theme.spacing(1),
    },
}));

export default function Form(props) {
    const classes = useStyles();
    // const [rating, updateRating] = useState(1);
    const [title, updateTitle] = useState('');
    const [director, updateDirector] = useState('');
    const [comment, updateComment] = useState('');
    const [plot, updatePlot] = useState('');

    async function createMovie() {
        try{
            const response = await fetch('/api/movies/', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    director,
                    comment,
                    plot
                })
            });
            const resp = await response.json();
            if( resp.status !== 200) {
                throw new Error(resp.error);
            }
            // console.log('createMovie form-resp::', resp );
        } catch (err) {
            console.error(err);
            console.log('there is an error');
        }

    }

    return (
        <Container className={classes.content} maxWidth="md">
        <form>
        <div>
        <Typography component="h6" variant="h6" align="left" color="textPrimary">
        Add a Movie
    </Typography>
    </div>
    <div>
    <TextField
        id="standard-multiline-flexible"
        label="Movie Title"
        multiline
        rowsMax="2"
        className={classes.textField}
        margin="normal"
        value={title}
        onChange={(e) => {updateTitle(e.target.value)}}
        />
        <TextField
        id="standard-multiline-flexible"
        label="Director Name"
        multiline
        rowsMax="2"
        className={classes.textField}
        margin="normal"
        value={director}
        onChange={(e) => {updateDirector(e.target.value)}}
        />
        </div>
        <div>
        <TextField
        id="outlined-multiline-static"
        label="Plot Summary"
        multiline
        rowsMax="4"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        value={plot}
        onChange={(e) => {updatePlot(e.target.value)}}
        />
        <TextField
        id="outlined-multiline-static"
        label="Comments"
        multiline
        rowsMax="4"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        value={comment}
        onChange={(e) => {updateComment(e.target.value)}}
        />
        </div>
        <div>
        <Button
    className={classes.buttonField}
    size="small"
    variant="outlined"
    color="primary"
    onClick={() => {
        createMovie()
        props.history.push("/");
    }}
>
    Add Movie
    </Button>
    </div>
    </form>
    </Container>
);
}