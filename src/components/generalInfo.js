import React from "react"
import { FontAwesomeIcon as FIcon } from "@fortawesome/react-fontawesome"
import { typography, media, animation } from "../utils/styles"
import styled from "@emotion/styled"

const Box = styled.div`
  display: flex;
  flex-direction: column;
  background: darksalmon;
  border: firebrick solid 2px;
  padding: 1em;
  margin-bottom: 1.45rem;
  font-family: ${typography.sansSerif};
`
const Resources = styled.div`
  margin-top: 20px;
  display: flex;
  align-self: flex-end;
`

const RedButton = styled.div`
  user-select: none;
  margin-left: 10px;
  padding: 10px;
  color: white;
  background: firebrick;
  border: darkred solid 2px;
  box-sizing: border-box;
  transition: background-color ${animation.easeOut};
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }

  * {
    margin: 0;
  }
`

const Icon = styled(FIcon)`
  margin-right: 10px;
  ${media.s} {
    display: none;
  }
`

const GeneralInfo = ({ message }) => (
  <Box>
    {message}
    <Resources>
      <RedButton
        onClick={() => (window.location.href = `tel:${"00318001351"}`)}
      >
        <h4>
          <Icon icon="phone-square" />
          0800-1351
        </h4>
      </RedButton>
      <RedButton onClick={() => window.open("https://www.rivm.nl/")}>
        <h4>
          <Icon icon="external-link-square-alt" />
          RIVM
        </h4>
      </RedButton>
    </Resources>
  </Box>
)

export default GeneralInfo
