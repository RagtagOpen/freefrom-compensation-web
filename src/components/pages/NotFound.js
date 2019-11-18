import React from "react"
import { Link } from "react-router-dom"

// Material UI
import { Container, Typography, Button, Box } from "@material-ui/core"

// Components
import { Title } from "components/layout"

const NotFound = () => {
  return (
    <Container maxWidth="md">
      <Title />
      <Typography variant="h1" gutterBottom={true}>
        404: Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom={true}>
        Sorry, this page does not exist.
      </Typography>
      <Button color="primary" variant="contained" component={Link} to="/">
        Go to Home
      </Button>
    </Container>
  )
}

export default NotFound
