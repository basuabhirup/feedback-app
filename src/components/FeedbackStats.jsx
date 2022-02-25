import PropTypes from "prop-types";

function FeedbackStats({ feedbackArray }) {
  // Calculate Average Ratings
  let average = feedbackArray.reduce((acc, curr) => {
    return acc + curr.rating
  }, 0) / feedbackArray.length

  average = average.toFixed(1).replace(/[.,]0$/, '')

	return (
		<div className='feedback-stats'>
			<h4>{feedbackArray.length} Reviews</h4>
			<h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
		</div>
	)
}

FeedbackStats.protoTypes = {
  feedbackArray: PropTypes.array.isRequired
}

export default FeedbackStats
