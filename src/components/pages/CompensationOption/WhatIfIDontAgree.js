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
        resource.what_if_i_disagree.map((step, idx) => {
          return (
            <Box ml={3}>
              <Typography variant="body1" paragraph={true}>
                {resourceCategory === "small-claims-court" ? (
                  <Markdown>{step}</Markdown>
                ) : (
                  <>
                    • <Markdown>{step}</Markdown>
                  </>
                )}
              </Typography>
            </Box>
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
