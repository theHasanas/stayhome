import {FontAwesomeIcon as FIcon} from "@fortawesome/react-fontawesome"
import React from "react"
import styled from "@emotion/styled"

const Title = styled.h2`
  color: white;
  font-size: 1.5em;
  margin: 0;
  z-index: 2;
`
const Icon = styled(FIcon)`
  opacity: 0.4;
  z-index: 1;
  
  color: white;
  font-size: 40px;
`

const Box = styled.div`
  user-select: none;
  cursor: pointer;
  
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  
  background-color: #141414;
  overflow: hidden;

  &:hover ${Icon} {
   opacity: 1;
  }

  border-left: solid 30px;
  border-color: ${props => props.color};
`

const CategoryBox = ({ icon, title, color }) => (
  <Box color={color}>
    <Title>{title}</Title>
    <Icon icon={icon} />
  </Box>
)

export default CategoryBox
