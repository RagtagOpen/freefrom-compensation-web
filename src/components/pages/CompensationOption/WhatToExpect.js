import React from "react"
import Markdown from "markdown-to-jsx"
import { Typography, makeStyles } from "@material-ui/core"

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
        resource.what_to_expect.map((step, idx) => {
          return (
            <Typography variant="body1" paragraph={true}>
              • <Markdown>{step}</Markdown>
            </Typography>
          )
        })
      ) : (
        <Typography variant="body1" paragraph={true}>
          TODO: have some copy if this resource doesn't have this section?
        </Typography>
      )}
    </>
  )
}

export default WhatToExpect
