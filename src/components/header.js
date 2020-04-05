import React from "react"
import styled from "@emotion/styled"
import allTexts from "../i18n/texts"
import { localisePath, changeLocale } from "../utils/helpers"
import { Link } from "gatsby"

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

  * {
    margin: 0;
  }
`

const Title = styled(Link)`
  color: white;
  text-decoration: none;
`

const Locale = styled.h5`
  cursor: pointer;
  color: white;
  text-decoration: none;
`

const Header = ({ locale }) => (
  <Box>
    <InnerBox>
      <Title to={localisePath("/", locale)}>
        <h2>
          {allTexts[locale.id]["AlleenSamen"]}
          <sup>010</sup>
        </h2>
      </Title>

      {locale.id === "nl" ? null : (
        <Locale onClick={() => changeLocale("")}>{"🇳🇱 NL"}</Locale>
      )}
      {locale.id === "en" ? null : (
        <Locale onClick={() => changeLocale("en")}>{"🇬🇧 EN"}</Locale>
      )}
    </InnerBox>
  </Box>
)

export default Header
