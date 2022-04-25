import { gql } from '@apollo/client';

export const GET_POSTS = gql`
   query GetProducts {
      products {
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