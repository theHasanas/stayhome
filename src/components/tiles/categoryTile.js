import React from "react"
import Tile from "./tile"
import { navigate } from "gatsby"

const CategoryTile = ({ category, locale }) => {
  const path = `/categories/${category.id}/`
  const localizedPath = locale.default ? path : locale.id + path

  return (
    <Tile
      title={category[locale.id].title}
      icon={category.icon}
      color={category.color}
      onClick={() => navigate(localizedPath)}
    />
  )
}

export default CategoryTile
