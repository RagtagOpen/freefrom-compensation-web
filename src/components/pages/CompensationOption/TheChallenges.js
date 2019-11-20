import React from "react"
import Markdown from "markdown-to-jsx"
import { Box, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  sectionTitle: {
    marginBottom: 20,
  },
}))

const TheChallenges = ({ resource }) => {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h3" className={classes.sectionTitle}>
        THE CHALLENGES
      </Typography>

      <Box ml={3}>
        {resource.challenges.map((challenge) => {
          return (
            <Typography variant="body1" paragraph={true} key={challenge}>
              <Markdown>{challenge}</Markdown>
            </Typography>
          )
        })}
      </Box>
    </>
  )
}

export default TheChallenges
