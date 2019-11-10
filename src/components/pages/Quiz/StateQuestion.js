import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

// Redux
import { setLocation } from "actions/quizActions"

// Material UI
import {
  FormControl,
  InputLabel,
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
      <Typography variant="h2" gutterBottom={1}>Question 1 of 8: Location</Typography>

      <Typography variant="body1" gutterBottom={1}>
        Select the state you live in (the state where the harm occurred).
      </Typography>

      <FormControl className={classes.formControl}>
        <Select
          labelId="state" // TODO: silence warning created by this prop
          id="select"
          onChange={handleChange}
          value={quiz.location}
          displayEmpty
        >
          <MenuItem value="">
            Select State
          </MenuItem>
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

const mapStateToProps = state => ({
  quiz: state.quiz,
})

export default connect(
  mapStateToProps,
  { setLocation }
)(StateQuestion)
