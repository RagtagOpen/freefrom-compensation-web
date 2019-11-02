import React from "react"
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux"
import PropTypes from "prop-types"

// Redux
import { setLocation } from '../../../actions/quizActions'

// Material UI
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

// Components
import StateQuestion from './StateQuestion';

const Quiz = ({ quiz, setLocation }) => {
  if(!quiz.agreement) {
    return <Redirect to='/' />
  }

  return(
    <Container maxWidth="lg">
      {
        quiz.location == 0 ? (
          <StateQuestion />
        ) : null
      }

    </Container>
  )
}

Quiz.propTypes = {
  quiz: PropTypes.object,
}

const mapStateToProps = state => ({
  quiz: state.quiz,
})

export default connect(mapStateToProps, { setLocation })(Quiz);
