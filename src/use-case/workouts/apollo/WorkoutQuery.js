import { gql } from 'react-apollo'

export const workoutQuery = gql`
  query workoutsFromUser($userId: ID!) {
    workoutsFromUser(userId: $userId) {
        userId,
        date,
        title,
        id,
        comment,
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

export const workoutMutation = gql`
    mutation saveWorkout($workout: WorkoutInput!) {
        addWorkout(input: $workout)
    }
`