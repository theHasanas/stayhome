import CategoryTile from "../components/categoryTile"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import { loadIcons } from "../utils/fontAwesome"
import { units } from "../utils/styles"

loadIcons()

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${units.gridMargin};
`

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

      <Grid>
        {categories.map(category => (
          <CategoryTile key={category.order} category={category} />
        ))}
      </Grid>
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
