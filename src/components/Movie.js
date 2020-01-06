import React, { useEffect, useState, useRef } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
  movieContainer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  textPadding: {
    paddingTop: theme.spacing(2)
  }
}));
export default function Movie(props) {
  const classes = styles();
  const [movie, updateMovie] = useState({});
  const hasRetrievedMovie = useRef(false);
  useEffect(() => {
    async function getPageById() {
      try {
        const response = await fetch(`/api/movies/${props.match.params.id}`);
        const resp = await response.json();
        console.log("resp:", resp);
        updateMovie(resp.data);
        hasRetrievedMovie.current = true;
      } catch (err) {
        console.error(err);
      }
    }
    if (!hasRetrievedMovie.current) {
      getPageById();
    }
  });

  return (
    <Container className={classes.movieContainer}>
      <Grid container spacing={2}>
        <Grid item>
          <img
            className={classes.img}
            src="https://source.unsplash.com/800x600"
            alt=""
          />
        </Grid>
        <Grid item>
          <Typography
            className={classes.textPadding}
            component="h2"
            variant="h2"
            align="left"
            color="textPrimary"
          >
            {movie.title}
          </Typography>
          <Typography
            className={classes.textPadding}
            component="h3"
            variant="subtitle1"
            align="left"
            color="textPrimary"
          >
            By {movie.director}
          </Typography>
          <Typography
            className={classes.textPadding}
            component="h3"
            variant="subtitle1"
            align="left"
            color="textPrimary"
          >
            By {movie.plot}
          </Typography>
          <Typography
            className={classes.textPadding}
            component="p"
            variant="body1"
            align="left"
            color="textPrimary"
          >
            {movie.comment}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
