import React from "react"
import { kebabCase } from "lodash"
import Tile from "./tile"
import { navigate } from "gatsby"

const CategoryTile = ({ category }) => (
  <Tile
    title={category.title}
    icon={category.icon}
    color={category.color}
    onClick={() => navigate(`/categories/${kebabCase(category.title)}/`)}
  />
)

export default CategoryTile
