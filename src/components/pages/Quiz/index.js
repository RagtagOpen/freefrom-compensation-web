import React from "react"
import { Redirect, Link } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"

// Material UI
import {
  Box,
  Button,
  Container,
  Grid,
} from "@material-ui/core"

// Components
import StateQuestion from "components/pages/Quiz/StateQuestion"
import QuizQuestion from "components/pages/Quiz/QuizQuestion"
import { Title } from "components/layout"
import { isEmpty } from "utils/helpers"

// Redux
import { setQuestion, getQuizQuestionData } from "actions/quizActions"

const Quiz = ({ quiz, match, setQuestion, getQuizQuestionData }) => {

  // If agreement is not agreed to, or cookies are not answered, return to home
  if (!quiz.agreement || !quiz.cookies) {
    return <Redirect to="/" />
  }

  // If the quiz.questions hasn't been populated yet, retrieve them and randomize them as well as the associated answers
  if (quiz.questions.length === 0) {
    getQuizQuestionData()
  }

  // If the quiz.question the user is on in the store does not match the id in the url, change it
  if (quiz.question !== match.params.id - 1) {
    // Update our store to match
    setQuestion(parseInt(match.params.id - 1))
  }

  // Switch case to check whether or not the user can continue on to the next question, defaulting to always true so they can proceed if there is something weird happening
  const canContinue = () => {
    switch (quiz.question) {
      case 0:
        return quiz.location === ""
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        debugger;
        // Quiz - 1 so we don't count location
        return isEmpty(quiz.questions[quiz.question - 1].tally)
      default:
        return true
    }
  }

  return (
    <Container maxWidth="md">
      <Title />

      <Box mt={4} mb={4}>
        {quiz.question === 0 ? <StateQuestion /> : <QuizQuestion />}
      </Box>

      <Grid container justify="space-around" alignItems="center">
        <Button
          color="primary"
          variant="outlined"
          component={Link}
          to={quiz.question === 0 ? "/" : "/quiz/question/" + quiz.question}
        >
          Back
        </Button>

        <Button
          color="primary"
          variant="contained"
          component={Link}
          disabled={canContinue()}
          to={
            quiz.question === 7
              ? "/quiz/results"
              : "/quiz/question/" + (quiz.question + 2)
          }
        >
          Next
        </Button>
      </Grid>
    </Container>
  )
}

Quiz.propTypes = {
  quiz: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  quiz: state.quiz,
})

export default connect(
  mapStateToProps,
  { setQuestion, getQuizQuestionData }
)(Quiz)
