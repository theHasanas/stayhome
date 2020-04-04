import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

const Box = styled.div`
  background: #141414;
  margin-bottom: 1.45rem;
`
const InnerBox = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const WhiteLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Title = styled.h1`
  margin: 0;
`

const Language = styled.h5`
  margin: 0;
`

const Header = ({ siteTitle, locale }) => (
  <Box>
    <InnerBox>
      <Title>
        <WhiteLink to={locale.default ? "/" : "/" + locale.id + "/"}>
          {siteTitle}
        </WhiteLink>
      </Title>

      <Language>
        <WhiteLink to={locale.default ? "/en/" : "/"}>
          {locale.default ? "🇬🇧 English" : "🇳🇱 Nederlands"}
        </WhiteLink>
      </Language>
    </InnerBox>
  </Box>
)

export default Header
