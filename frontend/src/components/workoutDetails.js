const WorkoutDetails = ({workout}) => {
  return (
    <div className="workout-details">
      <h4>WORKOUT TITLE<br/>{workout.title}</h4>
      <p><strong>Load (kgs):</strong>{workout.load}</p>
    </div>
  )
}

export default WorkoutDetails
