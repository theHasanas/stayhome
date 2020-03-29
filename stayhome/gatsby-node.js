const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const categoryTemplate = path.resolve("src/templates/categories.js")

  const result = await graphql(`
    categories: allShopsJson {
      distinct(field: categories)
    }
  `)

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.categories.distinct.forEach(category => {
    console.log(category)

    createPage({
      path: `/categories/${_.kebabCase(category)}/`,
      component: categoryTemplate,
      context: {
        category,
      },
    })
  })
}
