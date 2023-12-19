import gql from 'graphql-tag'

// ADD_NOVEL mutation
export const ADD_NOVEL = gql`
  mutation AddNovel($image: String, $title: String) {
    addNovel(image: $image, title: $title) {
      authors {
        id
        name
        novelId
      }
      createdAt
      id
      image
      title
      updatedAt
    }
  }
`

// DELETE_NOVEL mutation
export const DELETE_NOVEL = gql`
  mutation DeleteNovel($id: ID!) {
    deleteNovel(id: $id) {
      id
      title
      image
    }
  }
`

// UPDATE_NOVEL mutation
export const UPDATE_NOVEL = gql`
  mutation UpdateNovel($id: ID!, $title: String, $image: String) {
    updateNovel(id: $id, title: $title, image: $image) {
      id
      image
      title
    }
  }
`

// ADD_AUTHOR mutation
export const ADD_AUTHOR = gql`
  mutation AddAuthor($novelId: ID!, $name: String) {
    addAuthor(novelId: $novelId, name: $name) {
      id
      name
      novelId
    }
  }
`

// DELETE_AUTHOR mutation
export const DELETE_AUTHOR = gql`
  mutation DeleteAuthor($id: ID!) {
    deleteAuthor(id: $id) {
      id
      name
      novelId
    }
  }
`
