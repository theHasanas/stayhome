import { units } from "../../utils/styles"
import styled from "@emotion/styled"

const TileGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${units.gridMargin};
`

export default TileGrid
