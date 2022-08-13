const path = require(`path`);

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/app/)) {
    page.matchPath = `/app/*`;
    createPage(page);
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query MyProducts {
      allSanityProduct {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  data.allSanityProduct.nodes.forEach((node) => {
    actions.createPage({
      path: "/products/" + node.slug.current,
      component: path.resolve(`./src/templates/product-details.jsx`),
      context: { slug: node.slug.current },
    });
  });
};
