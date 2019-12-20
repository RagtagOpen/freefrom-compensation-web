import React, { Fragment } from "react"
import { Redirect, Link, useParams } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"

// Material UI
import { Box, Button, Container, Grid } from "@material-ui/core"

// Components
import StateQuestion from "components/pages/Quiz/StateQuestion"
import QuizQuestion from "components/pages/Quiz/QuizQuestion"
import { Title, Spinner } from "components/layout"

// Redux
import {
  setMindset,
  setQuestion,
  getQuizQuestionData,
  setCompleted,
} from "actions/quizActions"
import { loadMindsets } from "actions/mindsetActions"

// Data
import { hierarchy } from "data"

// Helpers
import { isEmpty, mode, scrollToTop } from "utils/helpers"

const Quiz = ({
  quiz,
  mindset,
  match,
  setQuestion,
  setMindset,
  setCompleted,
  getQuizQuestionData,
  loadMindsets,
}) => {
  const id = parseInt(useParams().id)

  // If agreement is not agreed to
  if (!quiz.agreement) {
    return <Redirect to="/" />
  }

  // If quiz questions are not loaded yet, they should be at the State Question
  if (quiz.questions.length === 0 && quiz.question !== 0) {
    return <Redirect to="/questions/1" />
  }

  // If the quiz.questions hasn't been populated yet, retrieve them and randomize them as well as the associated answers
  if (quiz.questions.length === 0 && quiz.question === 0) {
    getQuizQuestionData()
    loadMindsets()
  }

  // If the quiz.question the user is on in the store does not match the id in the url, change it
  if (quiz.question !== id - 1) {
    // Update our store to match
    setQuestion(parseInt(id - 1))
  }

  // Switch case to check whether or not the user can continue on to the next question, defaulting to always true so they can proceed if there is something weird happening
  const canContinue = () => {
    switch (id) {
      case 1:
        return quiz.location === ""
      default:
        // Id - 2 so we don't count location
        return isEmpty(quiz.questions[id - 2].tally)
    }
  }

  const tallyResults = () => {
    const results = []
    quiz.questions.map(question => {
      question.tally.mindset_ids.forEach(mindsetId => results.push(mindsetId))
    })

    // We can only have one result. So, if mode returns more than one, we need to use the following hierarchy
    // Thoughtful Pursuer > Resourceful Strategist > Reimbursement Boss > Justice Seeker.
    let result = mode(results)

    // If we have a tie, find the tie breaker
    if (result.length > 1) {
      result.forEach(res => {
        switch (mindset.all.filter(mindset => mindset.id === res)[0].name) {
          case hierarchy.first:
            result = res
            return
          case hierarchy.second:
            result = res
            return
          case hierarchy.third:
            result = res
            return
          case hierarchy.fourth:
            result = res
            return
        }
      })
    }

    const currentMindset = mindset.all.filter(
      mindset => mindset.id === result
    )[0]

    if (quiz.mindset === null || quiz.mindset.id !== currentMindset.id) {
      setMindset(currentMindset)
    }

    if (!quiz.completed) {
      setCompleted(true)
    }

    return `/mindsets/${currentMindset.slug}/${quiz.location}`
  }

  // Quiz not loaded yet, show loading

  return (
    <Container maxWidth="md">
      <Title />
      {quiz.loaded ? (
        <>
          <Box mt={4} mb={4}>
            {id === 1 ? <StateQuestion /> : <QuizQuestion />}
          </Box>

          <Grid container justify="space-around" alignItems="center">
            <Button
              color="primary"
              variant="outlined"
              component={Link}
              to={id === 1 ? "/" : "/questions/" + quiz.question}
            >
              Back
            </Button>

            <Button
              color="primary"
              variant="contained"
              component={Link}
              disabled={canContinue()}
              to={
                id === 8 && !canContinue()
                  ? tallyResults()
                  : "/questions/" + (quiz.question + 2)
              }
              onClick={scrollToTop}
            >
              Next
            </Button>
          </Grid>
        </>
      ) : (
        <Spinner />
      )}
    </Container>
  )
}

Quiz.propTypes = {
  quiz: PropTypes.object.isRequired,
  mindset: PropTypes.object.isRequired,
  setQuestion: PropTypes.func.isRequired,
  setQuizQuestionData: PropTypes.func,
  setCompleted: PropTypes.func,
  useParams: PropTypes.func,
  loadMindsets: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  quiz: state.quiz,
  mindset: state.mindset,
})

export default connect(
  mapStateToProps,
  {
    setQuestion,
    getQuizQuestionData,
    loadMindsets,
    setMindset,
    setCompleted,
  }
)(Quiz)
