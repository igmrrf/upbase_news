import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));
export default function NotFound() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h1>URL NOT FOUND</h1>
        <br />
        <h5>
          Why not go{" "}
          <Link variant="button" color="textPrimary" href="/">
            Home
          </Link>
          ?{" "}
        </h5>
      </div>
    </div>
  );
}
