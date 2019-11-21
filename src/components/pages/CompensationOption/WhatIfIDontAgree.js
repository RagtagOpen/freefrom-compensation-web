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
        WHAT IF I DON'T AGREE WITH THE DECISION?
      </Typography>

      {resource.what_if_i_disagree !== null ? (
        resourceCategory === "small-claims-court" ? (
          <Box ml={3}>
            {resource.what_if_i_disagree.map((step, idx) => {
              return (
                <Typography
                  varient="body1"
                  key={step}
                  paragraph={true}
                  key={`what-if-i-dont-agree-${idx}`}
                >
                  <Markdown>{step}</Markdown>
                </Typography>
              )
            })}
          </Box>
        ) : (
          <ul>
            {resource.what_if_i_disagree.map((step, idx) => {
              return (
                <li key={step}>
                  <Typography
                    varient="body1"
                    paragraph={true}
                    key={`what-if-i-dont-agree-${idx}`}
                  >
                    <Markdown>{step}</Markdown>
                  </Typography>
                </li>
              )
            })}
          </ul>
        )
      ) : null}
    </>
  )
}

export default WhatIfIDontAgree
