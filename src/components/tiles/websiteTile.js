import React from "react"
import Tile from "./tile"

const WebsiteTile = ({ url }) => (
  <Tile
    title="Website"
    icon={"external-link-alt"}
    color="mediumturquoise"
    onClick={() => window.open(url)}
  />
)

export default WebsiteTile
