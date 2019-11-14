import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

// Redux
import { setLocation } from "actions/quizActions"

// Material UI
import {
  Box,
  FormControl,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core"

const STATES = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
]

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
        Select the state you live in (the state where the harm occurred).
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
          {STATES.map(state => (
            <MenuItem key={state} value={state}>
              {state}
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
