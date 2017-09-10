import { graphql, gql } from 'react-apollo'

export const exercisesQuery = gql`
    query exercisesFromUser($userId: ID!) {
        exercisesFromUser(userId: $userId) {
            userId,
            id,
            type,
            name,
            sessions {
                exerciseId
                comment,
                sets {
                    value
                    reps
                }
            }
        }
    }
`