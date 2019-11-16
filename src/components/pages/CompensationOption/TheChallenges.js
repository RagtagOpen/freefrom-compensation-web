import React from "react"
import Markdown from "markdown-to-jsx"
import { Typography, makeStyles } from "@material-ui/core"

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

        {resource.challenges.map((challenge, idx) => {
          return (
            <Typography variant="body1" paragraph={true}>
              {idx + 1}. <Markdown>{challenge}</Markdown>
            </Typography>
          )
        })}
    </>
  )
}

export default TheChallenges
