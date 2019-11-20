import React from "react"
import Markdown from "markdown-to-jsx"
import { Box, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  sectionTitle: {
    marginBottom: 20,
  },
}))

const WhatToExpect = ({ resource }) => {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h3" className={classes.sectionTitle}>
        WHAT TO EXPECT AFTER YOU APPLY
      </Typography>

      {resource.what_to_expect !== null ? (
        <ul>
          {resource.what_to_expect.map(step => {
            return (
              <li key={step}>
                <Typography variant="body1" paragraph={true}>
                  <Markdown>{step}</Markdown>
                </Typography>
              </li>
            )
          })}
        </ul>
      ) : null}
    </>
  )
}

export default WhatToExpect
