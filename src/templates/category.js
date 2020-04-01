import { graphql } from "gatsby"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import TileGrid from "../components/tiles/tileGrid"
import ShopTile from "../components/tiles/shopTile"

const Category = ({ pageContext, data }) => {
  const category = pageContext.category
  const shops = data.shopsJson.shops

  return (
    <Layout>
      <SEO title={category.title} />
      <h2>{category.title}</h2>
      <TileGrid>
        {shops.map(shop => (
          <ShopTile key={shop.id} shop={shop} category={category} />
        ))}
      </TileGrid>
    </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query($categoryTitle: String) {
    shopsJson: allShopsJson(filter: { categories: { eq: $categoryTitle } }) {
      shops: nodes {
        id
        logo
        title
      }
    }
  }
`
