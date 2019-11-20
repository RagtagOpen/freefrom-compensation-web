import React from "react"
import Markdown from "markdown-to-jsx"
import { Box, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  sectionTitle: {
    marginBottom: 20,
  },
}))

const WhatIfIDontAgree = ({ resource, resourceCategory }) => {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h3" className={classes.sectionTitle}>
        WHAT IF I DON'T AGREE WITH THE JUDGE'S DECISION?
      </Typography>

      {resource.what_if_i_disagree !== null ? (
        resourceCategory === "small-claims-court" ? (
          <Box ml={3}>
            {resource.what_if_i_disagree.map(step => {
              return <Markdown>{step}</Markdown>
            })}
          </Box>
        ) : (
          resource.what_if_i_disagree.map(step => {
            return (
              <ul>
                <li>
                  <Markdown>{step}</Markdown>
                </li>
              </ul>
            )
          })
        )
      ) : null}
    </>
  )
}

export default WhatIfIDontAgree
