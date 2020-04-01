import React from "react"
import { kebabCase } from "lodash"
import Tile from "./tile"
import { navigate } from "gatsby"

const ShopTile = ({ shop, category }) => (
  <Tile
    title={shop.title}
    image={shop.logo}
    icon={category.icon}
    color={shop.color}
    onClick={() => navigate(`/shops/${kebabCase(shop.title)}/`)}
  />
)

export default ShopTile
