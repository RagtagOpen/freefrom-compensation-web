import React, { Fragment } from "react"
import PropTypes from "prop-types"

// Material UI
import { Grid, Typography, Box, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  image: {
    maxWidth: 150,
  },
  titleUppercase: {
    textTransform: "uppercase",
  },
}))

const MindsetBody = ({ mindset }) => {
  const classes = useStyles()

  return (
    <Fragment>
      <Typography variant="h2" gutterBottom={true}>
        Your Compensation Mindset
      </Typography>
      <Box mb={2}>
        <Grid container justify="center" alignItems="center">
          <img className={classes.image} src={mindset.image} />
        </Grid>
      </Box>
      <Typography
        className={classes.titleUppercase}
        variant="h2"
        align="center"
        gutterBottom={true}
      >
        {mindset.name}
      </Typography>
      <Typography variant="body1" paragraph={true}>
        {mindset.description}
      </Typography>
    </Fragment>
  )
}

MindsetBody.propTypes = {
  mindset: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
}

export default MindsetBody
