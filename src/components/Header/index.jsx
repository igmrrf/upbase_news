import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },

  link: {
    margin: theme.spacing(1, 1.5)
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}));

export default function Header() {
  const classes = useStyles();
  const sections = [
    { title: "Technology", url: "/category/technology" },
    { title: "Business", url: "/category/business" },
    { title: "Politics", url: "/category/politics" },
    { title: "Science", url: "/category/science" },
    { title: "Health", url: "/category/health" }
  ];

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Link
            variant="button"
            color="textPrimary"
            href="/"
            className={classes.toolbarTitle}
          >
            <Typography variant="h6" component="h2" color="inherit" noWrap>
              UPBASE NEWS
            </Typography>
          </Link>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Upload
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              View Uploads
            </Link>
          </nav>
          <Button
            href="/sign_up"
            color="primary"
            variant="outlined"
            className={classes.link}
          >
            Sign
          </Button>
          <Button
            href="/sign_in"
            color="primary"
            variant="outlined"
            className={classes.link}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbarSecondary}
        >
          {sections.map(section => (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              className={classes.toolbarLink}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </Container>
    </React.Fragment>
  );
}
