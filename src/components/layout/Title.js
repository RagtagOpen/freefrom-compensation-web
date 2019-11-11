import React from "react"

// Material UI
import { Grid, CardMedia, Box, Typography, makeStyles } from "@material-ui/core"

// Image
import Compass from "images/general/compass.png"

const useStyles = makeStyles(theme => ({
  compass: {
    maxWidth: 100,
  },
}))

export default () => {
  const classes = useStyles()
  return (
    <Box mb={2}>
      <Grid container alignItems="center">
        <Grid item sm={1} xs={3}>
          <CardMedia
            component="img"
            src={Compass}
            className={classes.compass}
          />
        </Grid>

        <Grid item sm={11} xs={9}>
          <Box ml={2}>
            <Typography variant={"h1"}>Compensation Compass</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
