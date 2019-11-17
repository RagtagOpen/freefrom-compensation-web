import React, { useState } from "react"
import { Link } from "react-router-dom"

// Data
import { resourceSections } from "data"

// Material UI
import {
  Typography,
  makeStyles,
  Link as MuiLink,
  Grid,
  Button,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  sectionTitle: {
    marginBottom: 20,
    marginTop: 30,
  },
}))

const Footer = ({ currentSection, resource, category, state, slug, quiz }) => {
  const classes = useStyles()
  const [nextSection, setNextSection] = useState("")
  const [lastSection, setLastSection] = useState(false)

  return (
    <>
      {nextSection !== currentSection && !lastSection && (
        <Grid container alignItems="center" justify="center">
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to={`/compensations/${category}/${state}/${nextSection}`}
          >
            Next Section
          </Button>
        </Grid>
      )}
      <Typography variant="h3" className={classes.sectionTitle}>
        JUMP TO SECTION
      </Typography>
      {resourceSections
        .filter(section => !section.omitFor.includes(slug))
        .map((section, idx, filteredArray) => {
          if (currentSection !== section.slug) {
            return (
              <Typography paragraph={true}>
                <MuiLink
                  color="inherit"
                  component={Link}
                  to={`/compensations/${category}/${state}/${section.slug}`}
                >
                  {idx + 1}. {section.name}
                </MuiLink>
              </Typography>
            )
          } else {
            if (
              filteredArray.length > idx + 1 &&
              filteredArray[idx + 1].slug !== nextSection
            ) {
              setNextSection(filteredArray[idx + 1].slug)
            }

            if (filteredArray.length === idx + 1 && !lastSection) {
              setLastSection(true)
            } else if (lastSection && filteredArray.length > idx + 1) {
              setLastSection(false)
            }

            return (
              <Typography paragraph={true}>
                {idx + 1}. {section.name}
              </Typography>
            )
          }
        })}
      {quiz.completed && (
        <Grid container alignItems="center" justify="center">
          <Button
            color="primary"
            variant="outlined"
            component={Link}
            to={`/mindsets/${quiz.mindset.slug}/${state}`}
          >
            Back To Results
          </Button>
        </Grid>
      )}
    </>
  )
}

export default Footer
