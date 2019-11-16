import React from "react"
import { Link } from "react-router-dom"
import { Typography, makeStyles, Link as MuiLink } from "@material-ui/core"
import resourceSections from "data/resourceSections"

const useStyles = makeStyles(theme => ({
  sectionTitle: {
    marginBottom: 20,
    marginTop: 30,
  },
}))

const Footer = ({ currentSection, resource, state, slug }) => {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h4" className={classes.sectionTitle}>
        JUMP TO SECTION
      </Typography>

      {resourceSections
        .filter(section => !section.omitFor.includes(slug))
        .map((section, idx) => {
          return currentSection !== section.slug ? (
            <Typography paragraph={true}>
              <MuiLink
                color="inherit"
                component={Link}
                to={`/compensations/${slug}/${state}/${section.slug}`}
              >
                {idx + 1}. {section.name}
              </MuiLink>
            </Typography>
          ) : (
            <Typography paragraph={true}>
              {idx + 1}. {section.name}
            </Typography>
          )
        })}
    </>
  )
}

export default Footer
