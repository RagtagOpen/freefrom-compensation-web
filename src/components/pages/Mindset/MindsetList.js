import React, { Fragment } from "react"
import { Link } from "react-router-dom"

// Material UI
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  makeStyles,
  Grid,
  Button,
  Box,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  descriptionParagraph: {
    width: "100%",
  },
}))

const MindsetList = props => {
  const classes = useStyles()
  const { allMindsets, completedQuiz } = props

  const generateButton = () => {
    if (completedQuiz) {
      return (
        <Button color="primary" variant="outlined" className={classes.button}>
          Back To Results
        </Button>
      )
    } else {
      return (
        <Button
          color="primary"
          variant="outlined"
          component={Link}
          to="/quiz"
          className={classes.button}
        >
          Take Our Quiz
        </Button>
      )
    }
  }

  return (
    <Fragment>
      <Box mb={2}>
        {allMindsets.map(mindset => {
          return (
            <ExpansionPanel key={`panel-${mindset.slug}`}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  {mindset.name}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography
                  variant="body1"
                  paragraph={true}
                  className={classes.descriptionParagraph}
                >
                  {mindset.description}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )
        })}
      </Box>
      <Grid container justify="center">
        {generateButton()}
      </Grid>
    </Fragment>
  )
}

export default MindsetList
