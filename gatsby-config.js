require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

module.exports = {
  siteMetadata: {
    siteName: ' kindpost',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-anchor-links',
    {
      resolve: 'gatsby-source-datocms',
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'assets'),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/svg/,
        },
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'kindpost.',
        short_name: 'kindpost.',
        start_url: '/',
        background_color: '#FF1654',
        theme_color: '#FF1654',
        display: 'standalone',
        icon: 'src/assets/KP_Thumbnail.png',
      },
    },
    {
      resolve: 'gatsby-source-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: 'video',
        prefix: 'videos/',
      },
    },
    {
      resolve: 'gatsby-theme-shopify-manager',
      options: {
        shopName: 'Kindpost',
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: 'gatsby-plugin-gdpr-cookies',
      options: {
        googleAnalytics: {
          trackingId: process.env.GA_ID,
          // Setting this parameter is optional
          anonymize: true,
        },
        // facebookPixel: {
        //   pixelId: 'YOUR_FACEBOOK_PIXEL_ID'
        // },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development'],
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: process.env.SHOPIFY_SHOP_NAME,
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        apiVersion: '2020-07',
        verbose: true,
        paginationSize: 250,
        includeCollections: ['shop', 'content'],
        shopifyQueries: {
          products: `
          query GetProducts($first: Int!, $after: String) {
            products(first: $first, after: $after) {
              pageInfo {
                hasNextPage
              }
              edges {
                cursor
                node {
                  availableForSale
                  createdAt
                  description
                  descriptionHtml
                  handle
                  id
                  images(first: 250) {
                    edges {
                      node {
                        id
                        altText
                        originalSrc
                      }
                    }
                  }
                  metafields(first: 250) {
                    edges {
                      node {
                        description
                        id
                        key
                        namespace
                        value
                        valueType
                      }
                    }
                  }
                  onlineStoreUrl
                  options {
                    id
                    name
                    values
                  }
                  priceRange {
                    minVariantPrice {
                      amount
                      currencyCode
                    }
                    maxVariantPrice {
                      amount
                      currencyCode
                    }
                  }
                  productType
                  publishedAt
                  tags
                  title
                  updatedAt
                  variants(first: 250) {
                    edges {
                      node {
                        availableForSale
                        quantityAvailable
                        compareAtPrice
                        compareAtPriceV2 {
                          amount
                          currencyCode
                        }
                        id
                        image {
                          altText
                          id
                          originalSrc
                        }
                        metafields(first: 250) {
                          edges {
                            node {
                              description
                              id
                              key
                              namespace
                              value
                              valueType
                            }
                          }
                        }
                        price
                        priceV2 {
                          amount
                          currencyCode
                        }
                        requiresShipping
                        selectedOptions {
                          name
                          value
                        }
                        sku
                        title
                        weight
                        weightUnit
                        presentmentPrices(first: 250) {
                          edges {
                            node {
                              price {
                                amount
                                currencyCode
                              }
                              compareAtPrice {
                                amount
                                currencyCode
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  vendor
                }
              }
            }
          }
        `,
        },
      },
    },
  ],
};
