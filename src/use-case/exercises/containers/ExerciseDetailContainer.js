import React from 'react'
import ExercisesDetail from '../components/ExercisesDetail'
import ExerciseQueryHoc from '../apollo/ExerciseQueryHoc'

const ExerciseDetailContainer = ({ data, params: { exerciseId }}) => {
  const exercise = data.exercisesFromUser && data.exercisesFromUser.find(ex => ex.id === exerciseId);

  return <ExercisesDetail data={data} exercise={exercise}/>
};

export default ExerciseQueryHoc(ExerciseDetailContainer)