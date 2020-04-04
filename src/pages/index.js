import { graphql, useStaticQuery } from "gatsby"
import CategoryTile from "../components/tiles/categoryTile"
import TileGrid from "../components/tiles/tileGrid"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import { loadIcons } from "../utils/icons"

loadIcons()

const IndexPage = ({
  pageContext: {
    locale,
    texts: { homePage: texts },
  },
}) => {
  const { json } = useStaticQuery(graphql`
    query {
      json: allCategoriesJson(sort: { order: ASC, fields: order }) {
        categories: nodes {
          order
          color
          icon
          id
          en {
            title
          }
          nl {
            title
          }
        }
      }
    }
  `)

  return (
    <Layout locale={locale}>
      <SEO title="All categories" />
      <h3>{texts["General help"]}</h3>
      <p>{texts["#GeneralDisclaimer"]}</p>
      <p>{texts["#EmergencyContact"]}</p>

      <h1>{texts["Rotterdam businesses"]}</h1>
      <TileGrid>
        {json.categories.map(category => (
          <CategoryTile
            key={category.order}
            category={category}
            locale={locale}
          />
        ))}
      </TileGrid>
    </Layout>
  )
}

export default IndexPage
