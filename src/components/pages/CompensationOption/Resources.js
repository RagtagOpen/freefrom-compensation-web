import React from "react"
import Markdown from "markdown-to-jsx"
import { Box, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  sectionTitle: {
    marginBottom: 20,
  },
}))

const Resources = ({ resource }) => {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h3" className={classes.sectionTitle}>
        RESOURCES
      </Typography>

      <Box ml={3}>
        {resource.resources.map((resources, idx) => {
          return (
            <Typography variant="body1" paragraph={true}>
              <Markdown>{resources}</Markdown>
            </Typography>
          )
        })}
      </Box>
    </>
  )
}

export default Resources
