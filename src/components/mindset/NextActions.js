import React, { Fragment } from "react"
import { makeStyles } from '@material-ui/core/styles';

// Material UI
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const ResultsNote = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Button variant="outlined" href="/mindsets" key='see-all' className={classes.button}>
        See All Mindsets
      </Button>
      <Button variant="outlined" href="/" key='start-over' className={classes.button}>
        Start Over
      </Button>
    </Fragment>
  )
}

export default ResultsNote
