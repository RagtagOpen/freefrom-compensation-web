import React from "react"
import renderer from "react-test-renderer"

import { Welcome } from "./Welcome"

describe("Welcome", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Welcome hasAcknowledged="true" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})