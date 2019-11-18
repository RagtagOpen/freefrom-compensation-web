// Because this is hardcoded markdown, formatting gets screwed up with eslint
import React from "react"
import Markdown from "markdown-to-jsx"

// Material UI
import { Container, Typography, Box } from "@material-ui/core"

// Components
import { Title } from "components/layout"

// Data
import { pages } from "data"

const PrivacyPolicy = () => {
  // TODO these override options should be global
  const markdownOptions = {
    overrides: {
      h1: {
        component: Typography,
        props: {
          className: "test",
          variant: "h1",
          style: { margin: "16px 0px 16px 0px" },
        },
      },
      h2: {
        component: Typography,
        props: {
          className: "test",
          variant: "h2",
          style: { margin: "32px 0px 16px 0px" },
        },
      },
      h3: {
        component: Typography,
        props: {
          className: "test",
          variant: "h3",
          style: { margin: "16px 0px" },
        },
      },
      p: {
        component: Typography,
        props: {
          variant: "body2",
          style: { margin: "16px 0px" },
        },
      },
    },
  }

  return (
    <Container maxWidth="md">
      <Title />
      <Typography paragraph={true}>
        <Markdown options={markdownOptions} skipHtml={true}>
          {pages.privacypolicy}
        </Markdown>
      </Typography>
    </Container>
  )
}

export default PrivacyPolicy
