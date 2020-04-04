import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import TileGrid from "../components/tiles/tileGrid"
import ShopTile from "../components/tiles/shopTile"

const Category = ({ pageContext: { category, shops, locale } }) => {
  return (
    <Layout locale={locale}>
      <SEO title={category[locale.id].title} />
      <h2>{category[locale.id].title}</h2>
      <TileGrid>
        {shops.map(shop => (
          <ShopTile
            key={shop.id}
            shop={shop}
            category={category}
            locale={locale}
          />
        ))}
      </TileGrid>
    </Layout>
  )
}

export default Category
