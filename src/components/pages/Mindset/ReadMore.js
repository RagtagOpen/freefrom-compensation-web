import React, { Fragment } from "react"
import { Link } from "react-router-dom"

// Data
import { states } from "data"

// Material UI
import { Typography, Link as MuiLink, Box } from "@material-ui/core"

const ReadMore = ({ featureResource, quiz }) => {
  const { resource, resourceCategory } = featureResource
  const state = states.filter(state => state.id === quiz.location)[0].name

  return (
    <>
      <Box mb={2}>
        <Typography variant="body1">
          {quiz.mindset.name}'s goals and priorities are best matched with
          {` <strong>${resourceCategory.name}</strong>`} as a compensation
          option.
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="body1">{resourceCategory.description}</Typography>
      </Box>
      <Box mb={2}>
        <MuiLink
          color="inherit"
          component={Link}
          to={`/resources/${resource.id}`}
          underline="always"
        >
          Read more about {resourceCategory.name} in {state}
        </MuiLink>
      </Box>
    </>
  )
}

export default ReadMore
