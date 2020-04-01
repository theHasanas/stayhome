import { graphql } from "gatsby"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import TileGrid from "../components/tiles/tileGrid"
import PhoneTile from "../components/tiles/phoneTile"
import WebsiteTitle from "../components/tiles/websiteTile"

const Shop = ({ data: { shop } }) => (
  <Layout>
    <SEO title={shop.title} />
    <h2>{shop.title}</h2>
    <TileGrid>
      {shop.numbers.map((number, index) => (
        <PhoneTile number={number} key={index} />
      ))}
      <WebsiteTitle url={shop.website} />
    </TileGrid>
  </Layout>
)

export default Shop

export const pageQuery = graphql`
  query($shopId: String) {
    shop: shopsJson(id: { eq: $shopId }) {
      id
      numbers
      logo
      title
      website
    }
  }
`
