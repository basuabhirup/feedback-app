import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedbackArray }) {
	return (
		<div className='feedback-list'>
			{feedbackArray && feedbackArray.length > 0 ? (
        feedbackArray.map((feedback) => (
          <FeedbackItem feedback={feedback} />
        ))
			) : (
				<p>No Feedback Yet</p>
			)}
		</div>
	)
}

export default FeedbackList
