import React from "react"

// Material UI
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

const NotFound = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1">Page Not Found</Typography>
      <Typography variant="body1">Sorry, this page does not exist</Typography>
    </Container>
  )
}

export default NotFound
