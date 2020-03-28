import { FontAwesomeIcon as FIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styled from "@emotion/styled"

const Box = styled.div`
  flex-wrap: wrap;
  padding: 15px;
  user-select: none;
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  height: 50px;
  max-height: 50px;
  max-width: 70px;
  margin: 0;
  margin-right: 15px;
`

const Title = styled.h3`
  margin: 0;
`

const Contacts = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
  flex-grow: 1;
  align-items: center;
`

const Icon = styled(FIcon)`
  font-size: 30px;
  margin-left: 20px;
`

const Listing = ({ shop }) => (
  <Box>
    <Logo src={shop.logo} />
    <Title>{shop.title}</Title>
    <Contacts>
      <a href={`tel:${shop.mainNumber}`}>
        <Icon icon="phone" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={shop.website}>
        <Icon icon="globe" />
      </a>
    </Contacts>
  </Box>
)

export default Listing
