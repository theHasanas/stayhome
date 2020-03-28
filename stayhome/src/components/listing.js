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

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  margin-right: 15px;
`

const Logo = styled.img`
  max-height: 30px;
  max-width: 60px;
  margin: 0;
`

const Title = styled.h4`
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
  font-size: 20px;
  margin-left: 15px;
`

const Listing = ({ shop }) => (
  <Box>
    <LogoBox>
      <Logo src={shop.logo} />
    </LogoBox>
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
