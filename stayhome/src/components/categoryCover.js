import { FontAwesomeIcon as FIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styled from "@emotion/styled"
import { navigate } from "gatsby"
import { kebabCase } from "lodash"

const Box = styled.div`
  position: relative;
  flex-basis: calc(25% - 10px);
  background-color: #141414;

  user-select: none;
  margin: 5px;
  box-sizing: border-box;
  cursor: pointer;

  ::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

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
  font-size: 4em;
`

const CategoryCover = ({ title, icon }) => {
  const goToCategory = () => {
    navigate(`/categories/${kebabCase(title)}/`)
  }

  return (
    <Box onClick={goToCategory}>
      <Content>
        <Icon icon={icon} />
        <Title>{title}</Title>
      </Content>
    </Box>
  )
}

export default CategoryCover
