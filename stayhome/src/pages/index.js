import {
  faDumbbell,
  faPills,
  faPrescriptionBottleAlt,
  faShoppingBasket,
  faTabletAlt,
  faUtensils,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons"

import CategoryBox from "../components/categoryBox"
import Listing from "../components/listing"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import { library } from "@fortawesome/fontawesome-svg-core"
import styled from "@emotion/styled"

// Load used FA icons
library.add(
  faShoppingBasket,
  faPrescriptionBottleAlt,
  faPills,
  faUtensils,
  faDumbbell,
  faTabletAlt,
  faPhone,
  faGlobe
)

const List = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 20px;
  }
`

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
    <List>
      <Listing shop={data.allShopsJson.nodes[0]} />

      <CategoryBox title="Grocery" icon="shopping-basket" color="skyblue" />
      <CategoryBox title="Pharmacy" icon="pills" color="olivedrab" />
      <CategoryBox title="Food" icon="utensils" color="tomato" />
      <CategoryBox title="Wellbeing" icon="dumbbell" color="mediumslateblue" />
      <CategoryBox title="Electronics" icon="tablet-alt" color="orange" />
    </List>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    allShopsJson {
      nodes {
        id
        logo
        title
        website
        numbers
        mainNumber
      }
    }
  }
`
