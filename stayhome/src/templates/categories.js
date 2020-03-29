import { graphql } from "gatsby"
import CategoryCover from "../components/categoryCover"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Categories = ({ data }) => {
  const shops = data.allShopsJson.nodes

  return (
    <Layout>
      <SEO title="All" />
      <Grid>
        {shops.map(shop => (
          <CategoryCover
            title={shop.title}
            icon="shopping-basket"
            key={shop.id}
          />
        ))}
      </Grid>
    </Layout>
  )
}

export default Categories

export const pageQuery = graphql`
  query Bottle {
    allShopsJson(filter: { categories: { eq: "Grocery" } }) {
      nodes {
        categories
        id
        mainNumber
        logo
        title
        website
      }
    }
  }
`
