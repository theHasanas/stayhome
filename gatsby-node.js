const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const categoryTemplate = path.resolve("src/templates/category.js")
  const shopTemplate = path.resolve("src/templates/shop.js")

  const result = await graphql(`
    {
      categoriesJson: allCategoriesJson {
        categories: nodes {
          title
          icon
        }
      }
      shopsJson: allShopsJson {
        shops: nodes {
          title
          id
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.categoriesJson.categories.forEach(category => {
    createPage({
      path: `/categories/${_.kebabCase(category.title)}/`,
      component: categoryTemplate,
      context: {
        category,
        categoryTitle: category.title,
      },
    })
  })

  result.data.shopsJson.shops.forEach(shop => {
    createPage({
      path: `/shops/${_.kebabCase(shop.id)}/`,
      component: shopTemplate,
      context: {
        shop,
        shopId: shop.id,
      },
    })
  })
}
