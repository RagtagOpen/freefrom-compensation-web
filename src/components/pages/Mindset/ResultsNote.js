import React, { Fragment } from "react"
import { Link } from "react-router-dom"

// Data
import { states } from "data"

// Material UI
import { Typography, Box, Link as MuiLink } from "@material-ui/core"

const ResultsNote = ({ resource, quiz }) => {
  const { categories, feature } = resource
  const { location } = quiz

  const leftoverCategories = categories.filter(
    category => category.id !== feature.resourceCategory.id
  )
  const state = states.filter(state => state.id === location)[0].name

  const buildCategoryBox = category => {
    return (
      <Typography
        variant="body1"
        paragraph={true}
        key={`category-${category.id}`}
      >
        <MuiLink
          color="primary"
          component={Link}
          to={`/resources/${category.id}`}
          underline="always"
        >
          {category.name}
        </MuiLink>
        : {category.description}
      </Typography>
    )
  }

  return (
    <>
      <Box mb={2}>
        <Typography variant="h2">A Note About Your Results</Typography>
      </Box>
      <Typography variant="body1" paragraph={true}>
        No person fits perfectly within only one Compensation Mindset. You must
        decide which type of compensation is best for you. Below, you can find
        information about the other compensation options in {state}.
      </Typography>
      {leftoverCategories.map(category => buildCategoryBox(category))}
    </>
  )
}

export default ResultsNote
