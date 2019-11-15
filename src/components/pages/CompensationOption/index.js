import React from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"

// Material UI
import {
  Box,
  Button,
  Container,
  Typography,
  CardMedia,
  Link,
  makeStyles,
} from "@material-ui/core"

// Helpers
import { CODES_TO_STATES } from "utils/helpers"

// Components
import TheDetails from "./TheDetails"
import { Title } from "components/layout"
import Image from "images/resources/victims-of-crime-act.png"

const useStyles = makeStyles(theme => ({
  image: {
    width: 264,
  },
}))

const CompensationOption = ({}) => {
  const { section: currentSection, state, slug } = useParams()
  const classes = useStyles()

  const sections = [
    "The Details",
    "The Challenges",
    "How to Apply",
    "What to Expect After You Apply",
    "What if I don't Agree with the Judge's Decision?",
    "Resources",
  ]

  const renderContent = () => {
    switch (currentSection) {
      case "1":
        return <TheDetails />
      case "2":
      default:
        return null
    }
  }

  return (
    <Container maxWidth="md">
      <Title />
      <Typography variant={"h2"}>
        For {CODES_TO_STATES[state]} Residents
      </Typography>

      <Box display="flex" flexDirection="column" alignItems="center">
        <CardMedia component="img" src={Image} className={classes.image} />
        <Typography variant={"h2"}>VICTIMS OF CRIME ACT</Typography>
      </Box>

      {renderContent()}

      <Box display="flex" justifyContent="center">
        <Button disabled={currentSection == "7"}>Next Section</Button>
      </Box>

      <Typography variant={"h3"}>JUMP TO SECTION</Typography>
      {sections.map((section, idx) => {
        return idx + 1 == currentSection ? (
          <Typography variant={"paragraph"}>
            <>
              {idx + 1}. {section}
              <br />
            </>
          </Typography>
        ) : (
          <>
            <Link href={`/compensations/${state}/${slug}/sections/${idx + 1}`}>
              {idx + 1}. {section}
            </Link>
            <br />
          </>
        )
      })}

      {/* TODO: this button should probably be conditionally displayed?? */}
      <Box display="flex" justifyContent="center">
        <Button>Back To Results</Button>
      </Box>
    </Container>
  )
}

const mapStateToProps = () => ({})

export default connect(
  mapStateToProps,
  {}
)(CompensationOption)
