import React from "react"
import Markdown from "markdown-to-jsx"
import { Box, Typography, makeStyles } from "@material-ui/core"

// Data
import { compensation } from "data"

const useStyles = makeStyles(theme => ({
  sectionTitle: {
    marginBottom: 20,
  },
}))

const TheDetails = ({ resource }) => {
  const { details } = compensation
  const classes = useStyles()

  const titleCase = str => {
    return str
      .toLowerCase()
      .split("_")
      .map(x => x[0].toUpperCase() + x.slice(1))
      .join(" ")
  }

  return (
    <>
      <Typography variant="h3" className={classes.sectionTitle}>
        THE DETAILS
      </Typography>

      <Box ml={3}>
        {details.map(section => {
          return resource[section] ? (
            <>
              <Typography variant="body1" paragraph={true}>
                <Markdown>{`**${titleCase(section)}:** ${
                  resource[section]
                }`}</Markdown>
              </Typography>
            </>
          ) : null
        })}
      </Box>
    </>
  )
}

export default TheDetails
