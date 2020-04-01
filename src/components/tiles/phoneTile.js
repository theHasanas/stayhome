import React from "react"
import Tile from "./tile"
import { localisePhoneNumber } from "../../utils/helpers"

const PhoneTile = ({ number }) => (
  <Tile
    title={localisePhoneNumber(number)}
    icon={"phone"}
    color="limegreen"
    onClick={() => (window.location.href = `tel:${number}`)}
  />
)

export default PhoneTile
