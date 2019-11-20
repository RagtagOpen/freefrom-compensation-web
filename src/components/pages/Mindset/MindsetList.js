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
  descriptionParagraph: {
    width: "100%",
  },
  lastExpandBox: {
    borderBottom: "2px solid #47CCCC",
  },
}))

const MindsetList = props => {
  const classes = useStyles()
  const { allMindsets, allResourceCategories, completedQuiz, slug } = props

  const generateButton = () => {
    if (completedQuiz) {
      return (
        <Button
          color="primary"
          variant="outlined"
          component={Link}
          to={`/mindsets/${slug}`}
        >
          Back To Results
        </Button>
      )
    } else {
      return (
        <Button
          color="primary"
          variant="outlined"
          component={Link}
          to="/questions/1"
          to="/questions"
        >
          Take Our Quiz
        </Button>
      )
    }
  }

  return (
    <Fragment>
      <Box mb={2}>
        {allMindsets.map((mindset, index) => {
          const category = allResourceCategories.find(c => c.id === mindset.resource_category_id).name

          return (
            <ExpansionPanel
              key={`panel-${mindset.slug}`}
              className={index === 3 && classes.lastExpandBox}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h2" className={classes.heading}>
                  {mindset.name}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Box display="flex" flexDirection="column">
                  <Typography
                    variant="body1"
                    paragraph={true}
                    className={classes.descriptionParagraph}
                  >
                    {mindset.description}
                  </Typography>

                  <Typography variant="body1" paragraph={true} className={classes.descriptionParagraph}>
                    {mindset.name}'s goals and priorities are best matched with {category}.
                  </Typography>
                </Box>
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
