import { graphql } from "gatsby"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import Tile from "../components/tile"

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Categories = ({ pageContext, data }) => {
  const shops = data.shopsJson.shops
  console.log(shops[0].title)

  return (
    <Layout>
      <SEO title={pageContext.category.title} />
      <Grid>
        {shops.map(shop => (
          <Tile
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
  {
    shopsJson: allShopsJson(filter: { categories: { eq: "Grocery" } }) {
      shops: nodes {
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
