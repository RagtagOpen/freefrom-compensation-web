import React from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom";

// Material UI
import {
  Box,
  Button,
  Container,
  Typography,
  CardMedia,
  Grid,
  makeStyles,
} from "@material-ui/core"

// Helpers
import { CODES_TO_STATES } from 'utils/helpers'

// Components
import { Title } from "components/layout"
import Image from "../../images/resources/victims-of-crime-act.png"

const useStyles = makeStyles(theme => ({
  image: {
    width: 264,
  },
}))

const CompensationOption = ({}) => {
  const { state, slug } = useParams();
  const classes = useStyles();

  return(
    <Container maxWidth="md">
      <Title />
      <Typography variant={"h2"}>For {CODES_TO_STATES[state]} Residents</Typography>

      <Box display="flex" flexDirection="column" alignItems="center">
        <CardMedia
          component="img"
          src={Image}
          className={classes.image}
        />
        <Typography variant={"h2"}>VICTIMS OF CRIME ACT</Typography>
      </Box>

    </Container>
  )
}

const mapStateToProps = () => ({
})

export default connect(
  mapStateToProps,
  {}
)(CompensationOption)
