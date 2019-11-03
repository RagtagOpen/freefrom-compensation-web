import React from "react"
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux"
import PropTypes from "prop-types"

import Compass from '../../../images/compass.png'

// Redux
import { setLocation } from '../../../actions/quizActions'

// Material UI
import { Box, Card, CardMedia, Container, Typography } from "@material-ui/core"

// Components
import StateQuestion from './StateQuestion';

const Quiz = ({ quiz, setLocation }) => {
  if(!quiz.agreement) {
    return <Redirect to='/' />
  }

  return(
    <Container maxWidth="lg">
      <Box display={"flex"} alignItems={"center"} mb={2}>
        <CardMedia src={Compass}>
          <img src={Compass} />
        </CardMedia>

        <Box ml={2}>
          <Typography variant={"h1"}>Compensation Compass</Typography>
        </Box>
      </Box>
      {
        quiz.question == 0 ? ( // TODO: set something here
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
