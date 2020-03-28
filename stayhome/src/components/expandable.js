import React, { useState } from "react"
import styled from "@emotion/styled"

const ExpandableBox = styled.div``

const Head = styled.div`
  cursor: pointer;
`

const Body = styled.div`
  border: solid #141414;
  border-width: 0 3px 3px 3px;
  margin: 0;
`

const Expandable = ({ head, body }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <ExpandableBox>
      <Head onClick={() => setExpanded(!expanded)}>{head}</Head>
      {expanded ? <Body>{body}</Body> : null}
    </ExpandableBox>
  )
}

export default Expandable
