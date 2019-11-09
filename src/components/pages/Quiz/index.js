import React from "react"
import { Redirect, Link } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"

// Image
import Compass from "images/general/compass.png"

// Material UI
import {
  Box,
  Button,
  CardMedia,
  Container,
  Typography,
  Grid,
  makeStyles,
} from "@material-ui/core"

// Components
import StateQuestion from "components/pages/Quiz/StateQuestion"
import QuizQuestion from "components/pages/Quiz/QuizQuestion"

// Redux
import { setQuestion } from "actions/quizActions"

const useStyles = makeStyles(theme => ({
  compass: {
    maxWidth: 150,
  },
}))

const Quiz = ({ quiz, match, setQuestion }) => {
  const classes = useStyles()

  if (!quiz.agreement) {
    //return <Redirect to="/" />
  }

  if (quiz.question !== match.params.id - 1) {
    // Update our store to match
    setQuestion(match.params.id - 1);
  }

  const canContinue = () => {
    switch (quiz.question) {
      case 0:
        return quiz.location == ""
      default:
        return true
    }
  }

  const linkAndUpdate = () => {}

  return (
    <Container maxWidth="md">
      <Grid container maxWidth="sm" alignItems="center">
        <Grid item sm={2} xs={3}>
          <CardMedia
            component="img"
            src={Compass}
            className={classes.compass}
          />
        </Grid>

        <Grid item sm={10} xs={9}>
          <Box ml={2}>
            <Typography variant={"h1"}>Compensation Compass</Typography>
          </Box>
        </Grid>
      </Grid>

      <Box mt={4} mb={4}>
        {quiz.question === 0 ? <StateQuestion /> : <QuizQuestion />}
      </Box>

      <Grid container maxWidth="sm" justify="space-around" alignItems="center">
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

export default connect(mapStateToProps, { setQuestion })(Quiz)
