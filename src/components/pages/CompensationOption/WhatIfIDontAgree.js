import React from "react"
import Markdown from "markdown-to-jsx"
import { Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  sectionTitle: {
    marginBottom: 20,
  },
}))

const WhatIfIDontAgree = ({ resource }) => {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h3" className={classes.sectionTitle}>
        WHAT IF I DON'T AGREE WITH THE JUDGE'S DECISION?
      </Typography>

      {resource.what_if_i_disagree !== null ? (
        resource.what_if_i_disagree.map((step, idx) => {
          return (
            <Typography
              variant="body1"
              paragraph={true}
              key={`what-if-i-dont-agree-${idx}`}
            >
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

export default WhatIfIDontAgree
