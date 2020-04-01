import { graphql } from "gatsby"
import CategoryTile from "../components/tiles/categoryTile"
import TileGrid from "../components/tiles/tileGrid"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import { loadIcons } from "../utils/icons"

loadIcons()

const IndexPage = ({ data }) => {
  const categories = data.categoriesJson.categories

  return (
    <Layout>
      <SEO title="All categories" />
      <h3>General Help</h3>
      <p>
        At the top here there should be emergency contacts, general advice,
        links to govermental stuff, and situation summary.
      </p>

      <h1>Do it from home</h1>
      <p>
        There is a big chance that whatever you are going to risk yourself and
        others to do can be done from home.
      </p>

      <TileGrid>
        {categories.map(category => (
          <CategoryTile key={category.order} category={category} />
        ))}
      </TileGrid>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    categoriesJson: allCategoriesJson(sort: { order: ASC, fields: order }) {
      categories: nodes {
        color
        icon
        title
        order
      }
    }
  }
`
