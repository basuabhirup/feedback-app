import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedbackArray, handleDelete }) {
	return (
		<div className='feedback-list'>
			{feedbackArray && feedbackArray.length > 0 ? (
				<AnimatePresence>
					{feedbackArray.map(feedback => (
						<motion.div
							key={feedback.id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<FeedbackItem
								key={`feedback-id-${feedback.id}`}
								feedback={feedback}
								handleDelete={handleDelete}
							/>
						</motion.div>
					))}
				</AnimatePresence>
			) : (
				<p>No Feedback Yet</p>
			)}
		</div>
	)
}

export default FeedbackList
