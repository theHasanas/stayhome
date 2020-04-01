const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const categoryTemplate = path.resolve("src/templates/categories.js")

  const result = await graphql(`
  {
    categoriesJson: allCategoriesJson {
      categories: nodes {
        title
      }
    }
  }
  `)

  // handle kkerrors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.categoriesJson.categories.forEach(category => {
    createPage({
      path: `/categories/${_.kebabCase(category.title)}/`,
      component: categoryTemplate({ category }),
      context: {
        category,
      },
    })
  })
}
