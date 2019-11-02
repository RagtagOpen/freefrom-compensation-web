import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

// Redux
import { setLocation } from '../../../actions/quizActions'

// Material UI
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography"
import {
  Select,
  MenuItem,
  InputLabel
} from '@material-ui/core';

const STATES = ['NY']

const StateQuestion = ({ quiz, setLocation }) => {
  handleChange = (val) => {

  }

  return(
    <>
      <Typography variant='h2' >
        Question 1: Location
      </Typography>

      <Box mt={2} ml={2}>
        <InputLabel id="state">Where do you live?</InputLabel>
        <Select labelId="state" id="select" onChange={handleChange}>
          {
            STATES.map(state =>
              <MenuItem value={state}>{state}</MenuItem>
            )
          }
        </Select>
      </Box>
    </>
  )
}

const mapStateToProps = state => ({
  quiz: state.quiz,
})

export default connect(mapStateToProps, { setLocation })(StateQuestion);
