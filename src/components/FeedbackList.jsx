import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedbackArray, handleDelete }) {
	return (
		<div className='feedback-list'>
			{feedbackArray && feedbackArray.length > 0 ? (
				feedbackArray.map(feedback => (
					<FeedbackItem
						key={`feedback-id-${feedback.id}`}
						feedback={feedback}
						handleDelete={handleDelete}
					/>
				))
			) : (
				<p>No Feedback Yet</p>
			)}
		</div>
	)
}

export default FeedbackList
