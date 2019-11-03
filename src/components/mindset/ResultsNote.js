import React, { Fragment } from "react"

// Material UI
import Typography from "@material-ui/core/Typography"

const ResultsNote = () => {
  return (
    <Fragment>
      <Typography variant="h2">A Note About Your Results</Typography>
      <Typography variant="body1" paragraph={true}>No person fits perfectly within only one
      Compensation Mindset. You must decide which type of compensation is best
      for you. Below, you can find information about the other compensation
      options in Arizona.</Typography>

      <Typography variant="body1" paragraph={true}>
        <strong>Small Claims Court:</strong> Small claims court deals with
        financial claims for $[TBD] or less. Cases in small claims court can
        be heard and decided relatively quickly and cheaply, without legal
        representation.</Typography>

      <Typography variant="body1" paragraph={true}>
        <strong>Criminal Restitution:</strong> Criminal Restitution is
        given during a criminal sentence issued by a judge. It requires the
        defendant to pay for the damages they have caused.</Typography>

      <Typography variant="body1" paragraph={true}>
        <strong>VOCA:</strong> Victims of Crime Act (VOCA) funds are
        available to compensate victims of crime for certain crime-related
        expenses.</Typography>
    </Fragment>
  )
}

export default ResultsNote
