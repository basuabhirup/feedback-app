import Card from './shared/Card'

function FeedbackItem({ feedback }) {
	return (
		<Card >
			<div className='num-display'>{feedback.rating}</div>
			<div className='text-display'>{feedback.text}</div>
		</Card>
	)
}

export default FeedbackItem
