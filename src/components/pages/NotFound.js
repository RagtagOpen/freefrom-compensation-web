import React from "react"

// Material UI
import { Container, Typography } from "@material-ui/core"

// Components
import { Title } from "components/layout"

const NotFound = () => {
  return (
    <Container maxWidth="md">
      <Title />
      <Typography variant="h1">Page Not Found</Typography>
      <Typography variant="body1">Sorry, this page does not exist</Typography>
    </Container>
  )
}

export default NotFound
