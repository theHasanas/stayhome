const path = require("path")
const locales = require("./src/i18n/locales")

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    deletePage(page)

    locales.map(locale => {
      const path = locale.default ? page.path : locale.id + page.path

      return createPage({
        ...page,
        path: path,
        context: {
          locale: locale,
        },
      })
    })

    resolve()
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const categoryTemplate = path.resolve("src/templates/category.js")
  const shopTemplate = path.resolve("src/templates/shop.js")

  const result = await graphql(`
    {
      categoriesJson: allCategoriesJson {
        categories: nodes {
          order
          id
          en {
            title
          }
          nl {
            title
          }
        }
      }
      shopsJson: allShopsJson {
        shops: nodes {
          categories
          id
          logo
          numbers
          title
          website
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const categories = result.data.categoriesJson.categories
  const shops = result.data.shopsJson.shops

  categories.forEach(category => {
    const path = `/categories/${category.id}/`

    locales.forEach(locale => {
      const localizedPath = locale.default ? path : locale.id + path

      createPage({
        path: localizedPath,
        component: categoryTemplate,
        context: {
          category,
          shops: shops.filter(shop => shop.categories.includes(category.id)),
          locale: locale,
        },
      })
    })
  })

  shops.forEach(shop => {
    const path = `/shops/${shop.id}/`

    locales.forEach(locale => {
      const localizedPath = locale.default ? path : locale.id + path

      createPage({
        path: localizedPath,
        component: shopTemplate,
        context: {
          shop,
          locale: locale,
        },
      })
    })
  })
}
