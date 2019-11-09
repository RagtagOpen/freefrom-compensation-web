import React from "react"

// Material UI
import { Container, Typography } from "@material-ui/core"

const Disclaimer = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1">Disclaimer</Typography>
      <Typography variant="body1">
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
