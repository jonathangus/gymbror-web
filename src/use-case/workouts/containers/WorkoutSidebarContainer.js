import React from 'react'
import WorkoutSidebar from '../components/WorkoutSidebar'
import WorkoutQueryHoc from '../apollo/WorkoutQueryHoc'

const WorkoutSidebarContainer = ({ data, params: { workoutId } }) => {
  if (!data.workoutsFromUser) return null
  const workout = data.workoutsFromUser.find(item => item.id === workoutId)

  if (!workout) {
    return null
  }

  return <WorkoutSidebar workout={workout} />
}

export default WorkoutQueryHoc(WorkoutSidebarContainer)
