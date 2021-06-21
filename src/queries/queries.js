import { gql } from 'apollo-boost';

const getCodersQuery = gql`
    {
        coders {
            name
            level
            id
            projects {
                id
            }
        }
    }
`;

const getProjectsQuery = gql`
    {
        projects {
            name
            details
            id
            coders {
                id
            }
        }
    }
`;


// const addBookMutation = gql`
//     mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
//         addBook(name: $name, genre: $genre, authorId: $authorId){
//             name
//             id
//         }
//     }
// `;


export { getCodersQuery, getProjectsQuery };
