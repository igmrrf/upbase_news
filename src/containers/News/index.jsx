import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Featured from "../../components/Featured";
import { useEffect } from "react";
import API from "../../helpers/api";

const useStyles = makeStyles(theme => ({
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  }
}));

export default function Pricing(props) {
  const classes = useStyles();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    API.get(
      `top-headlines?country=us&category=${props.match.params.category}&apiKey=${process.env.REACT_APP_UPBASE_NEWS_KEY}`
    ).then(res => {
      const data = res.data;
      setArticles(data.articles);
    });
  });
  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {props.match.params.category.toUpperCase()}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Latest News in {props.match.params.category.toLowerCase()}
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {articles.map(article => (
            <Featured key={article.title} article={article} />
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
