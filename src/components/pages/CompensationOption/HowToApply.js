import React from "react"
import Markdown from "markdown-to-jsx"
import { Box, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  sectionTitle: {
    marginBottom: 20,
  },
}))

const HowToApply = ({ resource }) => {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h3" className={classes.sectionTitle}>
        HOW TO APPLY
      </Typography>

      <Box ml={3}>
        {resource.steps.map((step, idx) => {
          return (
            <Typography
              variant="body1"
              paragraph={true}
              key={`how-to-apply-${idx}`}
            >
              <Markdown>{step}</Markdown>
            </Typography>
          )
        })}
      </Box>
    </>
  )
}

export default HowToApply
