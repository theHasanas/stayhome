import { graphql, useStaticQuery } from "gatsby"
import CategoryTile from "../components/tiles/categoryTile"
import TileGrid from "../components/tiles/tileGrid"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import allTexts from "../i18n/texts"
import GeneralInfo from "../components/generalInfo"

const IndexPage = ({ pageContext: { locale } }) => {
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
  const texts = allTexts[locale.id]

  return (
    <Layout locale={locale}>
      <SEO title="All categories" />
      <GeneralInfo message={texts["#ContactRIVM"]} />
      <h1>{texts["Local businesses"]}</h1>
      <h4>{texts["#SupportLocalBusinesses"]}</h4>
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
