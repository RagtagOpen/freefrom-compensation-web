import React from "react"
import { Box, Container, Typography } from "@material-ui/core";

const TermsAndConditions = () => {
  return (
    <Container maxWidth="lg">
      <Box mb={2.5} display="flex" p={1} justifyContent={"center"}>
        <Typography variant="h1">Terms and Conditions</Typography>
      </Box>

      <Typography variant="body1" paragraph={true}>
        This website (the “Website”) is a service made available by Freefrom.org. The content on this site is offered only as a public service to the web community and does not constitute solicitation or provision of legal advice. This site should not be used as a substitute for obtaining legal advice from an attorney licensed or authorized to practice in your jurisdiction. You should always consult a qualified attorney regarding any specific legal problem or matter.
      </Typography>
      <Typography variant="body1" paragraph={true}>
        This Website provides general information related to the law, domestic violence and compensatory resources for victims of domestic violence and is designed to help users educate themselves about these issues. Although we go to great lengths to make sure our information is accurate and useful, we recommend you consult a lawyer if you want legal advice.
      </Typography>
      <Typography variant="body1" paragraph={true}>
        If you choose to email anyone through this site, do not include any confidential, secret or otherwise sensitive information concerning any potential or actual legal matter in the email transmission. Unsolicited emails do not create an attorney-client relationship, and confidential or secret information included in such emails cannot be protected from disclosure. The owners of and contributors to this site have no duty to keep confidential any information you provide them.
      </Typography>
      <Typography variant="body1" paragraph={true}>
        Since legal advice must be tailored to the specific circumstances of each case, and laws are constantly changing, nothing on this site should be used as a substitute for the advice of competent legal counsel.
      </Typography>
      <Typography variant="body1" paragraph={true}>
        This organization assumes no responsibility to any person who relies on information contained on this site and disclaims all liability in respect to such information. You should not act upon information in this Website without seeking professional counsel from an attorney admitted or authorized to practice in your jurisdiction.
      </Typography>
      <Typography variant="body1" paragraph={true}>
        This Website may contain hyperlinks to other resources maintained by third parties on the Internet. These links are provided solely as a convenience to you to help you identify related information. Our reference to other resources is not meant to imply an approval, endorsement, affiliation, sponsorship or other relationship to the linked site or its operator, contents, or trade names, logos, symbols, service marks or other intellectual property rights associated with the hyperlinks, citations or URLs we provide.
      </Typography>

      <Box height={60} />
    </Container>
  )
}

export default TermsAndConditions
