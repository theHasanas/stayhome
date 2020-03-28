import CategoryBox from "../components/categoryBox"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"

library.add(faShoppingBasket)

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="All" />
    <h3>General Help</h3>
    <p>
      At the top here there should be emergency contacts, general advice, links
      to govermental stuff, and situation summary.
    </p>

    <h1>Do it from home</h1>
    <p>
      There is a big chance that whatever you are going to risk yourself and
      others to do can be done from home.
    </p>
    <CategoryBox title="Grocery" icon="shopping-basket" color="#179EDA" />
    <CategoryBox title="Grocery" icon="shopping-basket" color="#179EDA" />
    <CategoryBox title="Grocery" icon="shopping-basket" color="#179EDA" />
    <CategoryBox title="Grocery" icon="shopping-basket" color="#179EDA" />
    <CategoryBox title="Grocery" icon="shopping-basket" color="#179EDA" />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
