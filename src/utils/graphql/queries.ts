import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
query courseBySlug($slug: String!){
  courseBySlug(slug: $slug) {
    title
    subTitle
    price
    sampleVideo
    sampleVideoCover
    thumbnail
    enrollees
    price
    slug
  }
}
`