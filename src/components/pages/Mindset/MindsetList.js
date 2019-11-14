import React, { Fragment } from "react"

// Material UI
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  makeStyles,
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
  const { allMindsets } = props

  return (
    <Fragment>
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
              <Typography>
                {mindset.description.map((graf, idx) => (
                  <Typography
                    variant="body1"
                    paragraph={true}
                    key={`graf-${mindset.slug}-${idx}`}
                    className={classes.descriptionParagraph}
                  >
                    {graf}
                  </Typography>
                ))}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )
      })}
    </Fragment>
  )
}

export default MindsetList
