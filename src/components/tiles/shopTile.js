import React from "react"
import Tile from "./tile"
import { navigate } from "gatsby"

const ShopTile = ({ shop, category, locale }) => {
  const path = `/shops/${shop.id}/`
  const localizedPath = locale.default ? path : locale.id + path

  return (
    <Tile
      title={shop.title}
      image={shop.logo}
      icon={category.icon}
      color={shop.color}
      onClick={() => navigate(localizedPath)}
    />
  )
}

export default ShopTile
