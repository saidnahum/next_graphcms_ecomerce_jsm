import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
   query GetProducts {
      products {
         id
         name
         slug
         price
         details
         image {
            url
            width
            height
         }
      }
   }
`;

export const GET_BANNERS = gql`
   query GetBanners {
      banners {
         id
         image {
            url
            width
            height
         }
         buttonText
         product
         desc
         smallText
         midText
         largeText1
         largeText2
         discount
         saleTime
      }
   }
`;

export const GET_PRODUCTS_SLUGS = gql`
   query GetProductsSlugs {
      products {
         slug
      }
   }
`;

export const GET_PRODUCT_BY_SLUG = gql`
   query GetProductBySlug ($slug: String!) {
      product ( where: { slug: $slug } ) {
         id
         name
         slug
         price
         details
         image {
            url
            width
            height
      }
      }
   }
`;