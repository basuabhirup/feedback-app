import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'

function FeedbackItem({ feedback, handleDelete }) {
	return (
		<Card>
			<div className='num-display'>{feedback.rating}</div>
			<button onClick={() => handleDelete(feedback.id)} className="close">
				<FaTimes color='purple' />
			</button>
			<div className='text-display'>{feedback.text}</div>
		</Card>
	)
}

export default FeedbackItem
