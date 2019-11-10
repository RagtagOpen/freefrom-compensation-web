import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { pageQuizData } from "utils/selectors"

// Material UI
import {
  FormControl,
  makeStyles,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Box,
} from "@material-ui/core"

// Redux
import { setQuizTally } from "actions/quizActions"

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 200,
    marginTop: 10,
  },
}))

const QuizQuestion = ({ question, quizData, setQuizTally }) => {
  const classes = useStyles()

  const selectAnswer = e => {
    const response = quizData.responses.filter(
      resp => resp.id === parseInt(e.target.value)
    )[0]

    // question - 1 because it's the first of the tallyable questions (we don't count location)
    setQuizTally(question - 1, response)
  }

  return (
    <>
      <Box mb={1}>
        <Typography variant="h2">
          Question {question + 1} of 8: {quizData.title}
        </Typography>
      </Box>

      <Box mb={1}>
        <Typography variant="body1">{quizData.description}</Typography>
      </Box>

      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          aria-label="answer"
          name={`question-${question + 1}`}
          value={quizData.tally.id || ""}
          onChange={selectAnswer}
        >
          {quizData.responses.map((response, index) => (
            <FormControlLabel
              key={`answer-${index}`}
              value={response.id}
              control={<Radio color="primary" />}
              label={response.text}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  )
}

QuizQuestion.propTypes = {
  question: PropTypes.number.isRequired,
  quizData: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  question: state.quiz.question,
  quizData: pageQuizData(state),
})

export default connect(
  mapStateToProps,
  { setQuizTally }
)(QuizQuestion)
