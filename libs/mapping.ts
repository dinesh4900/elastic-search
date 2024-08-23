export const salesDataMapping = {
  dynamic: 'false',
  properties: {
    product_id: {
      type: 'text',
      fields: {
        keyword: {
          type: 'keyword',
          ignore_above: 256,
        },
      },
    },
    product_name: {
      type: 'text',
      fields: {
        keyword: {
          type: 'keyword',
          ignore_above: 256,
        },
      },
    },
    category: {
      type: 'text',
      fields: {
        keyword: {
          type: 'keyword',
          ignore_above: 256,
        },
      },
    },
    discounted_price: {
      type: 'long',
    },
    actual_price: {
      type: 'long',
    },
    discount_percentage: {
      type: 'long',
    },
    rating: {
      type: 'long',
    },
    rating_count: {
      type: 'long',
    },
  }
}