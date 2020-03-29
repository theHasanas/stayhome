import CategoryCover from "../components/categoryCover"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import { loadIcons } from "../utils/fontAwesome"

loadIcons()

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const IndexPage = ({ data }) => {
  const categories = data.categoriesJson.categories

  return (
    <Layout>
      <SEO title="All" />
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
        {categories.map(category => {
          return (
            <CategoryCover
              key={category.order}
              title={category.title}
              icon="shopping-basket"
            />
          )
        })}
      </Grid>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    shops: allShopsJson {
      nodes {
        id
        logo
        title
        website
        numbers
        mainNumber
      }
    }
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
