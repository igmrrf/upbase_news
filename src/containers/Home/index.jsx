import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MainFeaturedPost from "../../components/Main";
import FeaturedPost from "../../components/Featured";
import API from "../../helpers/api";

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

const News = () => {
  const classes = useStyles();
  const [articles, setArticles] = useState([]);
  const [mainArticle, setMainArticle] = useState({});
  useEffect(() => {
    API.get(
      `top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_UPBASE_NEWS_KEY}`
    ).then(res => {
      const data = res.data;
      setArticles(data.articles);
      setMainArticle(data.articles[0]);
    });
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.mainGrid}>
        <main>
          <MainFeaturedPost post={mainArticle} />
          <Grid container spacing={4}>
            {articles.map(article => (
              <FeaturedPost key={article.title} article={article} />
            ))}
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
};
export default News;
