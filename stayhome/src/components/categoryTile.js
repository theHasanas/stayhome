import React from "react"
import { kebabCase } from "lodash"
import Tile from "./tile"

const CategoryTile = ({ category }) => (
  <Tile
    title={category.title}
    icon={category.icon}
    url={`/categories/${kebabCase(category.title)}/`}
  />
)

export default CategoryTile
