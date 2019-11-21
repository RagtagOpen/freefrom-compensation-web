import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

// Redux
import { setLocation } from "actions/quizActions"

// Data
import { states } from "data"

// Material UI
import {
  Box,
  FormControl,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 200,
    marginTop: 10,
  },
}))

const StateQuestion = ({ quiz, setLocation }) => {
  const classes = useStyles()

  const handleChange = e => {
    setLocation(e.target.value)
  }

  return (
    <>
      <Box mb={1}>
        <Typography variant="h2">
          Question 1 of 8: Location
        </Typography>
      </Box>

      <Box mb={1}>
        <Typography variant="body1">
          Where do you live?
        </Typography>
      </Box>

      <FormControl className={classes.formControl}>
        <Select
          id="select"
          onChange={handleChange}
          value={quiz.location}
          displayEmpty
        >
          <MenuItem value="">Select State</MenuItem>
          {states.map(state => (
            <MenuItem key={state.id} value={state.id}>
              {state.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}

StateQuestion.propTypes = {
  quiz: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  quiz: state.quiz,
})

export default connect(
  mapStateToProps,
  { setLocation }
)(StateQuestion)
