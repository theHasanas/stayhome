import { FontAwesomeIcon as FIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styled from "@emotion/styled"
import { navigate } from "gatsby"
import { typography, media, colors, units } from "../utils/styles"

const Box = styled.div`
  position: relative;
  flex-basis: calc(25% - ${units.doubleGridMargins});
  ${media.l} {
    flex-basis: calc(33.33% - ${units.doubleGridMargins});
  }
  ${media.m} {
    flex-basis: calc(50% - ${units.doubleGridMargins});
  }
  ${media.s} {
    flex-basis: calc(100% - ${units.doubleGridMargins});
  }
  /* This is to keep 1:1 aspect ratio by creating a pseudo element */
  ::before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  margin: ${units.gridMargin};
  background-color: ${colors.offblack};

  user-select: none;
  cursor: pointer;
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
  overflow: hidden;
`

const Icon = styled(FIcon)`
  font-size: 4em;
  color: white;
  opacity: 0.4;
`

const Image = styled.img`
  margin: 0;
`

const Title = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  font-family: ${typography.sansSerif};
  color: white;

  margin-top: 15px;
`

const Tile = ({ title, icon, image, url }) => {
  return (
    <Box onClick={() => navigate(url)}>
      <Content>
        {image ? <Image src={image} /> : <Icon icon={icon} />}
        <Title>{title}</Title>
      </Content>
    </Box>
  )
}

export default Tile
