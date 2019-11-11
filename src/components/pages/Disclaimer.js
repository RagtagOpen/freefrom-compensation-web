import React from "react"

// Material UI
import { Container, Typography, Box } from "@material-ui/core"

// Components
import { Title } from "components/layout"

const Disclaimer = () => {
  return (
    <Container maxWidth="md">
      <Title />
      <Box mb={2}>
        <Typography variant="h1">Disclaimer</Typography>
      </Box>
      <Typography variant="body2">
        This is an educational and informational tool and the information
        contained within it does in no way constitute legal advice. Any person
        who intends to use the information in this tool in any way is solely
        responsible for independently verifying the information and obtaining
        independent legal or other expert advice if necessary.
      </Typography>
    </Container>
  )
}

export default Disclaimer
