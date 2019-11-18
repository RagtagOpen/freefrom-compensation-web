import React, { Fragment } from "react"
import { Grid } from "@material-ui/core"
import loading from "images/general/loading.svg"

export default () => (
  <Fragment>
    <Grid container alignItems="center" justify="center">
      <img
        src={loading}
        style={{ width: "150px", marginTop: "32px" }}
        alt="Loading..."
      />
    </Grid>
  </Fragment>
)
