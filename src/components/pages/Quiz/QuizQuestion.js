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

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 200,
    marginTop: 10,
  },
}))

const QuizQuestion = ({ quiz, setLocation }) => {
  const classes = useStyles()

  const handleChange = e => {
    setLocation(e.target.value)
  }

  return (
    <>
      <Typography variant="h2">Question {quiz.question + 1}: Title</Typography>

      <FormControl className={classes.formControl}>
        <InputLabel id="state">Where do you live?</InputLabel>
        <Select
          labelId="state" // TODO: silence warning created by this prop
          id="select"
          onChange={handleChange}
          value={quiz.location}
          displayEmpty
        >
          <MenuItem value=""></MenuItem>
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
)(QuizQuestion)
